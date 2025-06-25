"use client";
import { Button } from "@/components/ui/button";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllHeroContentQuery } from "@/redux/features/hero/heroApi";
import { slideInFromBottom, slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "motion/react";
const Hero = () => {
  const { data = [] } = useGetAllHeroContentQuery(undefined);
  const heroData = data?.data;

  return (
    <>
      {heroData?.map((item: any) => (
        <div
          key={item._id}
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.backgroundImage})`,
            minHeight: "600px",
          }}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00000083] to-[#00000026]"></div>

          {/* Content on Top of Overlay */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="relative z-20 container mx-auto text-white py-40 px-4"
          >
            <motion.h1
              variants={slideInFromTop(0.02)}
              className="text-4xl font-bold mb-4"
            >
              {item.title}
            </motion.h1>
            <motion.p variants={slideInFromLeft(0.04)} className="text-lg w-2/4">{item.subtitle}</motion.p>
            <motion.div variants={slideInFromBottom(0.06)}>
              <Button className="mt-8 cursor-pointer">More Explore</Button>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Hero;
