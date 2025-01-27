import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  console.log("Middleware funcionando correctamente.");
});

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
