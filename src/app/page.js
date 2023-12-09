"use client"
import Header from "./Components/Common/Header";
import HomeSection from "./Components/SubComponents/HomeSection";

import dynamic from 'next/dynamic'
const HomeAbout = dynamic(() => import('./Components/SubComponents/HomeAbout'));
const HomeServices = dynamic(() => import('./Components/SubComponents/HomeServices'));
const HomeWork = dynamic(() => import('./Components/SubComponents/HomeWork'));
const Footer = dynamic(() => import('./Components/Common/Footer'));



export default function Home() {

  return (
    <div className="main">
      {/* <Header /> */}
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
      <section  className="home_footerTheme">
      <Footer />
      </section>
    </div>
  )
}