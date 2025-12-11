import { Fragment, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Process from "./components/Process";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import PageTransition from "./components/PageTransition";

// Lazy load heavy components
const Skills = lazy(() => import("./components/Skills"));
const PersonalProjects = lazy(() => import("./components/PersonalProjects"));

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <PageTransition>
            <Home />
            <About />
            <Process />
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
              <PersonalProjects />
            </Suspense>
            <Experiences />
            <Contact />
          </PageTransition>
        </AnimatePresence>
      </Layout>
    </HelmetProvider>
  );
}

export default App;

