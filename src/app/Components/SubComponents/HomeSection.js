"use client";

import Button from '../Ui/Button';
import Container from '../Ui/Container';
import { neutralsZ } from '@/Assets/Const/ColorConst';
import html from '../../../Assets/images/html.png';
import css from '../../../Assets/images/css.png';
import javascript from '../../../Assets/images/javascript.png';
import nodejs from '../../../Assets/images/nodejs.png';
import ex from '../../../Assets/images/ex.png';
import react from '../../../Assets/images/react js.png';
import db from '../../../Assets/images/mongodb.png';


const HomeSection = () => (
  <div
    className=" flex h-screen w-full flex-col justify-center py-28 ">
    <Container >
      <div className="flex flex-col items-center justify-center HomeSection_div relative z-1">
        <h1
          id="hero-heading"
          className={`text-center text-2xl/tight font-bold text-${neutralsZ} sm:text-5xl/tight md:text-7xl lg:text-8xl/tight`}
        >
          TRANSFORMING IDEAS INTO DIGITAL REALITIES
        </h1>
        {/* <div className='flex'> 
          <img className='h-6 w-auto' metadata={html} alt='html' />
          <img className='h-6 w-6' metadata={css} alt='css' />
          <img className='h-6 w-6' metadata={javascript} alt='js' />
          <img className='h-6 w-6' metadata={nodejs} alt='nodejs' />
          <img className='h-6 w-6' metadata={ex} alt='express' />
          <img className='h-6 w-6' metadata={react} alt='react' />
          <img className='h-6 w-6' metadata={db} alt='mongodb' />
        </div> */}
         <div className='flex'> 
      <img className='h-6 w-auto' src={html} alt='html' />
      <img className='h-6 w-6' src={css} alt='css' />
      <img className='h-6 w-6' src={javascript} alt='js' />
      <img className='h-6 w-6' src={nodejs} alt='nodejs' />
      <img className='h-6 w-6' src={ex} alt='express' />
      <img className='h-6 w-6' src={react} alt='react' />
      <img className='h-6 w-6' src={db} alt='mongodb' />
    </div>
        <div className="mt-12 flex items-stretch gap-x-6 gap-y-3 max-sm:flex-col sm:items-center">
          <Button
            as="a"
            href="/#work"
            background="primary"
            size="large"
          >
            Dig into my universe
          </Button>
          <Button
            as="a"
            href="/#services"
            background="primary"
            size="large"
          >
            See services
          </Button>
        </div>
      </div>
    </Container>
  </div>
);

export default HomeSection;
