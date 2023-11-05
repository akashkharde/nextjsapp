"use client";
import Container from '../Ui/Container';
import Title from '../Common/Title';
import TypoSmoke from '../Ui/TypingHeading';
import dev from '../../../Assets/images/dev.jpg';
import Image from 'next/image';
import { InfiniteVerticalSlider } from '../Ui/InfiniteVerticalSlider';

function HomeAbout() {
  const headings = [
    'Developer',
    'Designer',
    'Problem solver',
    'Freelancer',
    'Coffeeholic',
    'Globetrotter',
  ];

  const tech = [
    "HTML 5",
    "CSS 3",
    "TAILWAND CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "REACT JS",
    "NEXT JS",
    "NODE JS",
    "EXPRESS",
    "MONGODB",
    "SEO"
  ].map((tech , i) =>({
    id:i+1,
    tech
  } ))

  return (

    <Container >
      <div className='mt-20'>
        <Title name={"About"} />
      </div>
      <div className='relative  my-8 h-12 flext items-center' >
        <TypoSmoke headings={headings} />
      </div>

      <div className='items-center justify-space grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8'>
        <div className='items-center justify-center flex'>
          <Image src={dev} alt='myImage' className="lg:h-72 lg:w-72 md:h-80 md:w-80  sm:h-40 sm:w-40 h-40 w-40 mx-1 rounded-full" />
        </div>
        <div >
          <div className='h-20'>
            <div className='home_about_content'>
              <h2>DeveLoper</h2>
              <h2>DeveLoper</h2>
            </div>
          </div>
          <div className='text-xl text-justify'>
            Welcome to my digital workspace! I&apos;m Akash, a passionate and versatile Fullstack Web Developer dedicated to transforming innovative ideas into functional, user-friendly applications. With a keen eye for detail and a commitment to excellence, I bring a wealth of experience in crafting dynamic and responsive web solutions.
          </div>
        </div>
      </div>
 
      <InfiniteVerticalSlider tech={tech} />

    </Container>
  );
}

export default HomeAbout;
