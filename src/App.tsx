import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Biography from "./pages/Biography";
import Initiatives from "./pages/Initiatives";
import Publications from "./pages/Publications";
import Advisory from "./pages/Advisory";
import WaltonCastle from "./pages/WaltonCastle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/walton-castle" element={<WaltonCastle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
