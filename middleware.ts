import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(() => {
  console.log("Middleware funcionando correctamente.");
});

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
