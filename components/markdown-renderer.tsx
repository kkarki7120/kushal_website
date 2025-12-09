"use client"

import React, { useMemo } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypePrism from "rehype-prism-plus"
import { CodeBlock } from "./markdown-code-block"

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()

interface MarkdownRendererProps {
  content: string
}

type TocItem = {
  id: string
  text: string
  level: number
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const toc = useMemo<TocItem[]>(() => {
    if (typeof window === "undefined") return []

    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(content, "text/html")

      const headingEls = Array.from(
        doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
      )

      return headingEls.map((el) => {
        const text = el.textContent ?? ""
        const tag = el.tagName.toLowerCase()
        const level = Number(tag.replace("h", "")) || 2
        const id = slugify(text)

        return { id, text, level }
      })
    } catch {
      return []
    }
  }, [content])

  const getIndentClass = (level: number) => {
    if (level === 1 || level === 2) return "ml-0"
    return `ml-${(level - 2) * 3}`
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {/* TABLE OF CONTENTS */}
      {toc.length > 0 && (
        <div className="mb-10 rounded-2xl border bg-muted/40 px-4 py-4 dark:bg-neutral-900/60">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-3">
            Table of contents
          </h2>
          <div className="space-y-2">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block rounded-xl border bg-background px-3 py-2 text-sm transition-all hover:border-blue-500 hover:bg-blue-50/70 hover:text-blue-600 dark:hover:bg-blue-950/40 ${getIndentClass(
                  item.level
                )}`}
              >
                <span className="line-clamp-2">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* MARKDOWN CONTENT */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypePrism]}
        components={{
          // Typography
          p: ({ ...props }) => (
            <p className="my-4 leading-relaxed" {...props} />
          ),

          // Headings with ID
          h1: ({ ...props }) => {
            const id = slugify(String(props.children))
            return (
              <h1
                id={id}
                className="text-4xl md:text-5xl font-extrabold mt-10 mb-6"
                {...props}
              />
            )
          },
          h2: ({ ...props }) => {
            const id = slugify(String(props.children))
            return (
              <h2
                id={id}
                className="text-3xl md:text-4xl font-bold mt-10 mb-4"
                {...props}
              />
            )
          },
          h3: ({ ...props }) => {
            const id = slugify(String(props.children))
            return (
              <h3
                id={id}
                className="text-2xl md:text-3xl font-semibold mt-8 mb-3"
                {...props}
              />
            )
          },

          // Code blocks
          code: ({ node, inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code className="px-1 py-0.5 rounded bg-muted font-mono text-sm" {...props}>
                  {children}
                </code>
              )
            }

            return (
              <CodeBlock className={className} {...props}>
                {children}
              </CodeBlock>
            )
          },

          // Lists
          ul: ({ ...props }) => (
            <ul className="list-disc pl-6 space-y-2 my-4" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal pl-6 space-y-2 my-4" {...props} />
          ),

          // Blockquotes
          blockquote: ({ ...props }) => (
            <blockquote
              className="
                border-l-4 border-blue-500 bg-blue-50/40 
                dark:bg-blue-900/20 dark:border-blue-400 
                p-4 italic rounded-r-xl my-6"
              {...props}
            />
          ),

          // Tables
          table: ({ ...props }) => (
            <table
              className="
                w-full border border-gray-300 dark:border-gray-700 
                rounded-xl overflow-hidden my-6"
              {...props}
            />
          ),
          th: ({ ...props }) => (
            <th
              className="border px-4 py-2 font-semibold bg-gray-200 dark:bg-gray-800"
              {...props}
            />
          ),
          td: ({ ...props }) => (
            <td className="border px-4 py-2 dark:border-gray-700" {...props} />
          ),

          // HR lines
          hr: () => <hr className="my-8 border-gray-300 dark:border-gray-700" />,

          // Images
          img: ({ ...props }) => (
            <figure className="my-6 text-center">
              <img
                {...props}
                className="mx-auto rounded-xl shadow-lg max-w-3xl object-contain"
              />
              {props.alt && (
                <figcaption className="text-sm text-gray-500 mt-2">
                  {props.alt}
                </figcaption>
              )}
            </figure>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}