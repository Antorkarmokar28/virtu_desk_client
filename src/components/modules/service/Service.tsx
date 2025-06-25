/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card } from "@/components/ui/card";
import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";
import { slideInFromRight } from "@/utils/motion";
import { motion } from "motion/react";
const Service = () => {
  const { data = [] } = useGetAllServiceQuery(undefined);
  const serviceData = data?.data;
  console.log(serviceData);
  return (
    <motion.div initial="hidden" animate="visible" className="bg-white mt-20">
      <motion.div variants={slideInFromRight(0.4)} className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {serviceData?.map((item: any) => (
            <Card className="bg-white shadow-xl p-10 text-xl leading-2" key={item._id}>
              <h3 className="text-orange-500 font-bold">{item?.title}</h3>
              <p className="text-lg text-slate-700">{item?.shortDescription}</p>
            </Card>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
