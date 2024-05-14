import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Experiences from "../src/components/Experiences";
// import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";

const Skills = dynamic(() => import("../src/components/Skills"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Ayoob | Home</title>
      </Head>
      <Home />
      <About />
      <Process />
      <Skills />
      <Experiences />
      <Contact />
    </Layout>
  );
};
export default Index;
