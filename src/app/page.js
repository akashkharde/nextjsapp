import Title from "./Components/Common/Title";
import HomeAbout from "./Components/SubComponents/HomeAbout";
import HomeSection from "./Components/SubComponents/HomeSection";


export default function Home() {

  return (

    <div className="main">
      <section className="Home__Section">
        <HomeSection />
      </section>
      <section className="home_aboutTheme">
        <HomeAbout />
      </section>
    </div>

  )
}