/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllHeroContentQuery } from "@/redux/features/hero/heroApi";
const Hero = () => {
  const { data = [] } = useGetAllHeroContentQuery(undefined);
  const heroData = data?.data;
  return (
    <div>
      <div className="container mx-auto">
        {heroData?.map((item: any) => (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
