"use client"
import Header from "./Components/Common/Header";
import HomeAbout from "./Components/SubComponents/HomeAbout";
import HomeContact from "./Components/SubComponents/HomeContact";
import HomeSection from "./Components/SubComponents/HomeSection";
import HomeServices from "./Components/SubComponents/HomeServices";
import HomeWork from "./Components/SubComponents/HomeWork";


export default function Home() {

  return (
    <div className="main">
      <Header />
      <section className="Home__Section">
        <HomeSection />
      </section>
      <section className="home_aboutTheme" id="about">
        <HomeAbout />
      </section>
      <section className="home_servicesTheme" id="services">
        <HomeServices />
      </section>
      <section className="home_workTheme"  id="work">
        <HomeWork />
      </section>
      <section className="home_servicesTheme" id="services">
        <HomeContact />
      </section>
    </div>
  )
}