import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(request) {
      if(request.nextUrl.pathname.startsWith('/dashboard')&&
      request.nextauth.token?.role!=='admin'){
        return NextResponse.rewrite(
            new URL('/denied', request.url)
        )
      }
      if(request.nextUrl.pathname.startsWith('/profile') &&
      request.nextauth.token?.role!=='admin' && 
      request.nextauth.token?.role!=='user'){
        return NextResponse.rewrite(
            new URL('/denied', request.url)
        )
      }
    },
    {
      callbacks: {
        authorized: ({ token }) => !!token
      },
    }
  )

export const config={matcher: ["/dashboard","/profile"]};