import "@/styles/globals.css";
import { Footer, MobileNav } from "@/components";
import { AnimatePresence } from "framer-motion";

export default function App({
  Component,
  pageProps,
  router,
}: {
  Component: any;
  pageProps: any;
  router: any;
}) {
  // Define the route where you don't want the footer
  const hideFooterRoutes = ["/core"]; // Add more routes if needed

  return (
    <>
      <MobileNav />
      
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      
      {!hideFooterRoutes.includes(router.route) && <Footer />}
    </>
  );
}
