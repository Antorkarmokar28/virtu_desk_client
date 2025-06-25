"use client";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "motion/react";
const GoogleMap = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-[400px] mt-20"
    >
      <motion.iframe
        variants={slideInFromLeft(0.04)}
        title="Virtudesk Main Office"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.5063!2d-122.2015!3d47.6101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c398d891efb%3A0xc0a44ff41b26b63f!2s325%20118th%20Ave%20SE%20%23200%2C%20Bellevue%2C%20WA%2098005!5e0!3m2!1sen!2sus!4v0!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
};

export default GoogleMap;
