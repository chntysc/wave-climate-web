import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import Description from "./fragments/description/Description";
import Publikasidesc from "./fragments/publikasidesc/Publikasidesc";
import { motion } from "framer-motion";
const TentangKami = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Description />
      <Publikasidesc />
    </motion.div>
  );
};

export default TentangKami;
