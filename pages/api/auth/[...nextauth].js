import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    //LinkedInProvider({
    //  clientId: process.env.LINKEDIN_CLIENT_ID,
    //  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  //}),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/home", 
  },
  session: {
    strategy: "jwt",
  },
  debug: true,
}

export default NextAuth(authOptions);