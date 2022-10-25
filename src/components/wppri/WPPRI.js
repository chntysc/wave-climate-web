import React from "react";
import Page from "./fragments/Page";
import { motion } from "framer-motion";
function WppRi() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Page />
    </motion.div>
  );
}

export default WppRi;
