import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { db } from "@/lib/db"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user) return null

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )
        if (!isPasswordValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          profile_image: user.profile_image || "",
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user , trigger, session }) {

        // Set token on first login
  if (user) {
    token.id = user.id
    token.name = user.name
    token.email = user.email
    token.role = user.role
    token.profile_image = user.profile_image
  }


      // On session update, merge new session into token
      if (trigger === "update" && session) {
        token.name = session.name ?? token.name
        token.email = session.email ?? token.email
        token.profile_image = session.profile_image ?? token.profile_image
      }

      if (token.id) {
        const latestUser = await db.user.findUnique({
          where: { id: token.id },
        })

        if (latestUser) {
          token.name = latestUser.name
          token.email = latestUser.email
          token.profile_image = latestUser.profile_image
          token.role = latestUser.role
        }
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.role = token.role
        session.user.profile_image = token.profile_image
      }
      return session
    },
  },

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
