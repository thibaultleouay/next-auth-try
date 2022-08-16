import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      sendVerificationRequest({
        identifier: email,
        url,
        token,
      }) {
        console.log(url)
        console.log(token)
      },

    }),
  ],
});
