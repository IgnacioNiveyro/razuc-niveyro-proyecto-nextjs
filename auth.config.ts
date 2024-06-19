import type { NextAuthConfig } from 'next-auth';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      return baseUrl + '/home';
    },
    async session({ session, token }) {
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith('/home');

      const adminRoutes = 
        nextUrl.pathname.startsWith('/home/create') || 
        nextUrl.pathname.startsWith('/home/edit') || 
        nextUrl.pathname.match(/^\/home\/[^\/]+\/edit$/) ||
        nextUrl.pathname.startsWith('/home/pick-book');
      
      const loginRoutes = nextUrl.pathname.startsWith('/login')

      if(adminRoutes){
        
        if(isLoggedIn)
          return true;
        else
          return false; // Va al login

      }else{
        if (loginRoutes && isLoggedIn) {
          const absoluteUrl = new URL('/home', nextUrl.origin);
          return NextResponse.redirect(absoluteUrl.toString());
        }
        if(isOnHome)
          return true;
      }
    },
  },
  
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
