"use client"
import HomeAbout from "./Components/SubComponents/HomeAbout";
import HomeSection from "./Components/SubComponents/HomeSection";
import HomeServices from "./Components/SubComponents/HomeServices";


export default function Home() {

  return (

    <div className="main">
      <section className="Home__Section">
        <HomeSection />
      </section>
      <section className="home_aboutTheme "  id="about">
        <HomeAbout />
      </section>
      <section className="home_servicesTheme"  id="services">
        <HomeServices />
      </section>
    </div>

  )
}