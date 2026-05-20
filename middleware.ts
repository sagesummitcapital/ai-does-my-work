/**
 * Clerk middleware — no-op while marketing site is public.
 *
 * To activate auth on protected routes (e.g. /dashboard):
 *  1. Set Clerk env vars in .env.local
 *  2. Replace the no-op below with the commented clerkMiddleware block
 *  3. Wrap layout body in <ClerkProvider>
 */
import { NextResponse } from "next/server";

export default function middleware() {
  return NextResponse.next();
}

// --- Activate Clerk auth by replacing the above with this:
//
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
//
// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
//
// export default clerkMiddleware(async (auth, req) => {
//   if (isProtectedRoute(req)) await auth.protect();
// });

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
