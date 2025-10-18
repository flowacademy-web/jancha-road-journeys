import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vietnam from "./pages/Vietnam";
import Thailand from "./pages/Thailand";
import Laos from "./pages/Laos";
import VietnamBeachRoute from "./pages/courses/VietnamBeachRoute";
import VietnamHaGiang from "./pages/courses/VietnamHaGiang";
import VietnamHaiVan from "./pages/courses/VietnamHaiVan";
import ThailandCentral from "./pages/courses/ThailandCentral";
import ThailandSouth from "./pages/courses/ThailandSouth";
import ThailandMalaysia from "./pages/courses/ThailandMalaysia";
import LaosNorth from "./pages/courses/LaosNorth";
import Blog from "./pages/Blog";
import FirstOverseasGuide from "./pages/blog/FirstOverseasGuide";
import PackingGuide from "./pages/blog/PackingGuide";
import Top3Courses from "./pages/blog/Top3Courses";
import RiderStories from "./pages/blog/RiderStories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vietnam" element={<Vietnam />} />
          <Route path="/vietnam/beach-route" element={<VietnamBeachRoute />} />
          <Route path="/vietnam/ha-giang" element={<VietnamHaGiang />} />
          <Route path="/vietnam/hai-van" element={<VietnamHaiVan />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/thailand/central" element={<ThailandCentral />} />
          <Route path="/thailand/south" element={<ThailandSouth />} />
          <Route path="/thailand/malaysia" element={<ThailandMalaysia />} />
          <Route path="/laos" element={<Laos />} />
          <Route path="/laos/north" element={<LaosNorth />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/first-overseas-guide" element={<FirstOverseasGuide />} />
          <Route path="/blog/packing-guide" element={<PackingGuide />} />
          <Route path="/blog/top3-courses" element={<Top3Courses />} />
          <Route path="/blog/rider-stories" element={<RiderStories />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
