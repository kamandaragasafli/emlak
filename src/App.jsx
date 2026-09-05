import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LangProvider } from "./LangContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import AboutPage from "./pages/AboutPage";
import ProcessPage from "./pages/ProcessPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import PropertyPage from "./pages/PropertyPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HelmetProvider>
      <LangProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/az" replace />} />

            <Route path="/:lang" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="kataloq" element={<CatalogPage />} />
              <Route path="haqqimizda" element={<AboutPage />} />
              <Route path="proses" element={<ProcessPage />} />
              <Route path="reyler" element={<ReviewsPage />} />
              <Route path="elaqe" element={<ContactPage />} />
              <Route path="obyekt/:id" element={<PropertyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/az" replace />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </HelmetProvider>
  );
}
