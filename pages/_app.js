import "@/styles/globals.css";
import Navbar from "@/components/Navbar";


import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="">
        <Navbar />
        <Component {...pageProps}/>
      </div>
    </QueryClientProvider>
  );
}
