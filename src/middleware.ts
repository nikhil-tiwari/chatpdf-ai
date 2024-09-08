import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = {
    matcher: [
        // Match all paths except for static files
        '/((?!_next|.*\\..*).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}