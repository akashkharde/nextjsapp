"use client";
import Container from '../Ui/Container';
import Title from '../Common/Title';
import TypoSmoke from '../Ui/TypingHeading';
import dev from '../../../Assets/images/dev.jpg'
import Image from 'next/image';

const headings = [
  'Developer',
  'Designer',
  'Problem solver',
  'Freelancer',
  'Coffeeholic',
  'Globetrotter',
];
const tech  = [
  "HTML 5",
  "CSS 3",
  "TAILWAND CSS",
  "BOOTSTRAP",
  "JAVASCRIPT",
  "REACT JS",
  "NEXT JS",
  "NODE JS",
  "EXPRESS",
  "MONGODB"
]

function HomeAbout() {
  return (

    <Container >
      <div className='mt-28'>
        <Title name={"About"} />
      </div>
      <div className='relative top-14 my-16 h-16' >
        <TypoSmoke headings={headings} />
      </div>

      <div className='items-center justify-space grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        <div className='items-center justify-center flex'>
          {/* <Image src={dev} alt='myImage' className="lg:h-80 lg:w-80 md:h-80 md:w-80  sm:h-60 sm:w-60 h-60 w-60 mx-1 rounded-full" /> */}
        </div>
        <div className=''>
          <div className='h-20'>
            <div className="home_about_content">
              <h2>DeveLoper</h2>
              <h2>DeveLoper</h2>
            </div>
          </div>
          <div className='text-xl text-justify'>
            Welcome to my digital workspace! I'm Akash, a passionate and versatile Fullstack Web Developer dedicated to transforming innovative ideas into functional, user-friendly applications. With a keen eye for detail and a commitment to excellence, I bring a wealth of experience in crafting dynamic and responsive web solutions.
          </div>
        </div>
      </div>
      <div className='bg-[#000] '>

      </div>

    </Container>
  );
}

export default HomeAbout;
