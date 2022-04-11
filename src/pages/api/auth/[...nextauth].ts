import NextAuth, { Session } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

import prisma from '@/lib/prisma';
export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'john@test.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined
      ) {
        if (!credentials) return null;
        if (
          credentials.email == 'admin@admin.com' &&
          credentials.password == 'admin'
        ) {
          return { email: credentials.email, image: 'a', username: 'Admin' };
        }
        const user = await prisma.student.findFirst({
          where: {
            email: credentials.email.toLowerCase(),
            password: credentials.password,
          },
        });

        if (!user) return null;

        return {
          email: user.email,
          image: 's',
          username: user.name,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      const currentSession: Session = {
        ...session,
        user: {
          ...session.user,
          id: token.id as number,
        },
      };
      return currentSession;
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
  },
  pages: {
    signIn: '/auth/login',
  },
});
