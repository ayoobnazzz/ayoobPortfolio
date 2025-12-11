import dynamic from "next/dynamic";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Experiences from "../src/components/Experiences";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";
import PageTransition from "../src/components/PageTransition";

const Skills = dynamic(() => import("../src/components/Skills"), {
  ssr: false,
});

const PersonalProjects = dynamic(() => import("../src/components/PersonalProjects"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Ayoob | Home</title>
      </Head>
      <AnimatePresence mode="wait">
        <PageTransition>
          <Home />
          <About />
          <Process />
          <Skills />
          <PersonalProjects />
          <Experiences />
          <Contact />
        </PageTransition>
      </AnimatePresence>
    </Layout>
  );
};
export default Index;
