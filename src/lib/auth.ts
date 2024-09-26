import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Nodemailer from 'next-auth/providers/nodemailer';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import { env } from '@/env';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Google({
      authorization: {
        prompt: 'consent',
        access_type: 'offline',
        response_type: 'code',
      },
    }),
    Nodemailer({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
    }),
  ],
});
