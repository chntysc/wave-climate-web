import React from "react";
import HeroSection from "./fragments/herosection/HeroSection";
import ArticleSection from "./fragments/article/ArticleSection";

import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <ArticleSection />
    </motion.div>
  );
}

export default Home;
