import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith('/home');

      const adminRoutes = 
        nextUrl.pathname.startsWith('/home/create') || 
        nextUrl.pathname.startsWith('/home/edit') || 
        nextUrl.pathname.match(/^\/home\/[^\/]+\/edit$/) ||
        nextUrl.pathname.startsWith('/home/pick-book');
      

      if(adminRoutes){
        
        if(isLoggedIn)
          return true;
        else
          return false; // Va al login

      }else{
        if(isOnHome)
          return true;
      }
    },
  },
  
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
