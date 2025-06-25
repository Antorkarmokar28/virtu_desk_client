import GoogleMap from "@/components/modules/GoogleMap/GoogleMap";
import Hero from "@/components/modules/hero/Hero";
import Service from "@/components/modules/service/Service";

const HomePage = () => {
  return (
    <div>
      {/* hero component */}
      <Hero />
      {/* Service component */}
      <Service />
      {/* Google map component */}
      <GoogleMap />
    </div>
  );
};

export default HomePage;
