import Header from "./Components/Common/Header";
import HomeAbout from "./Components/SubComponents/HomeAbout";
import HomeSection from "./Components/SubComponents/HomeSection";
import RootLayout from "./layout";


export default function Home() {

  return (

    <main className="main">
      <section className="Home__Section">
        <HomeSection />
      </section>
      <section>
        <HomeAbout />
      </section>
    </main>

  )
}