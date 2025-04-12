import React from "react";
import Header from "../components/home/Header";
import Working from "../components/home/Working";
import WhyUs from "../components/home/WhyUs";
import PopularServices from "../components/home/PopularServices";
import Download from "../components/home/Download";
import Poster from "../components/home/Poster";

const Home = () => {
  return (
    <div>
      <Header />
      <Working />
      <WhyUs />
      <Poster />
      <PopularServices />
      <Download />
    </div>
  );
};

export default Home;
