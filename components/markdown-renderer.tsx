"use client"

import React, { useMemo } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

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
        const tag = el.tagName.toLowerCase() // "h1"..."h6"
        const level = Number(tag.replace("h", "")) || 2
        const id = slugify(text)

        return { id, text, level }
      })
    } catch {
      return []
    }
  }, [content])

  const getIndentClass = (level: number) => {
    switch (level) {
      case 1:
        return "ml-0"
      case 2:
        return "ml-0"
      case 3:
        return "ml-3"
      case 4:
        return "ml-6"
      case 5:
        return "ml-8"
      case 6:
        return "ml-10"
      default:
        return "ml-0"
    }
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {/* 🔹 Table of Contents Card */}
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

      {/* 🔹 Actual Markdown / HTML content */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{

           // Paragraph spacing
          p: ({ node, ...props }) => (
            <p className="my-4 leading-relaxed" {...props} />
          ),
          // Headings with IDs + strong styling
          h1: ({ node, ...props }) => {
            const text = String(props.children)
            const id = slugify(text)
            return (
              <h1
                id={id}
                className="text-4xl md:text-5xl font-extrabold mt-10 mb-6"
                {...props}
              />
            )
          },
          h2: ({ node, ...props }) => {
            const text = String(props.children)
            const id = slugify(text)
            return (
              <h2
                id={id}
                className="text-3xl md:text-4xl font-bold mt-10 mb-4"
                {...props}
              />
            )
          },
          h3: ({ node, ...props }) => {
            const text = String(props.children)
            const id = slugify(text)
            return (
              <h3
                id={id}
                className="text-2xl md:text-3xl font-semibold mt-8 mb-3"
                {...props}
              />
            )
          },
          h4: ({ node, ...props }) => {
            const text = String(props.children)
            const id = slugify(text)
            return (
              <h4
                id={id}
                className="text-xl md:text-2xl font-semibold mt-6 mb-2"
                {...props}
              />
            )
          },
          h5: ({ node, ...props }) => {
            const text = String(props.children)
            const id = slugify(text)
            return <h5 id={id} {...props} />
          },
          h6: ({ node, ...props }) => {
            const text = String(props.children)
            const id = slugify(text)
            return <h6 id={id} {...props} />
          },

          // Lists
          ul: ({ node, ordered, ...props }) => (
            <ul className="list-disc pl-6 space-y-2 my-4" {...props} />
          ),
          ol: ({ node, ordered, ...props }) => (
            <ol className="list-decimal pl-6 space-y-2 my-4" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="leading-relaxed" {...props} />
          ),

          // Images
          img: ({ node, ...props }) => (
            <img
              {...props}
              className="mx-auto my-6 rounded-xl shadow-md w-full max-w-3xl object-contain"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

