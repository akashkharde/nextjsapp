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
      <section className="home_aboutTheme h-[145vh]  lg:h-[100vh] md:h-[110vh] sm:h-[145vh]  "  id="about">
        <HomeAbout />
      </section>
      <section className="home_servicesTheme"  id="services">
        <HomeServices />
      </section>
    </div>

  )
}