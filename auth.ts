import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { prisma } from "./prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
...authConfig })