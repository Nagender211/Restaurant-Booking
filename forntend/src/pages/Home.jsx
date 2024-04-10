import React from "react";
import HeroSection from "../componets/HeroSection";
import About from "../componets/About";
import Qualities from "../componets/Qualities";
import Menu from "../componets/Menu"
import WhoAreWe from "../componets/WhoAreWe"
import Team from "../componets/Team"
import Reservation from "../componets/Reservation"
import Footer from "../componets/Footer";
function Home(){
    return (
        <>
        <HeroSection />
        <About />
        <Qualities />
        <Menu />
        <WhoAreWe />
        <Team />
        <Reservation />
        <Footer />

        </>
    )
   
}
export default Home;