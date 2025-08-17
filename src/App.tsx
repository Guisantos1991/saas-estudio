// src/App.tsx
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import SideBar from "./components/SideBar";

// Páginas
const SetClient = lazy(() => import("./pages/SetClient"));
const Sales = lazy(() => import("./pages/Sales"));
const CalendarClient = lazy(() => import("./pages/CalendarClient"));
const Overview = lazy(() => import("./pages/Overview"));

function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Fundo CLARO do app
    <div className="min-h-screen w-full bg-neutral-100 text-neutral-900 antialiased">
      <div className="flex">
        {/* Sidebar com fundo CLARO explícito (não herda preto) */}
        <motion.aside
          initial={false}
          animate={{ opacity: 1 }}
          className="
            sticky top-0 h-svh w-64 shrink-0
            border-r border-neutral-200
            bg-white
            overflow-y-auto
            p-4
          "
        >
          <SideBar />
        </motion.aside>

        {/* Conteúdo */}
        <main className="flex-1 min-w-0 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function Fallback() {
  return <div className="p-6 text-sm text-neutral-500">Carregando…</div>;
}

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <SetClient />
            </Layout>
          }
        />
        <Route
          path="/cadastro"
          element={
            <Layout>
              <SetClient />
            </Layout>
          }
        />
        <Route
          path="/vendas"
          element={
            <Layout>
              <Sales />
            </Layout>
          }
        />
        <Route
          path="/agenda"
          element={
            <Layout>
              <CalendarClient />
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <Layout>
              <Overview />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}