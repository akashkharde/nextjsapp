"use client";

import Button from '../Ui/Button';
import Container from '../Ui/Container';
import { neutralsZ } from '@/Assets/Const/ColorConst';
import html from '../../../Assets/images/html.png';
import css from '../../../Assets/images/css.png';
import javascript from '../../../Assets/images/javascript.png';
import nodejs from '../../../Assets/images/nodejs.png';
import ex from '../../../Assets/images/ex.png';
import react from '../../../Assets/images/reactjs.png';
import db from '../../../Assets/images/mongodb.png';
import Image from 'next/image';


const HomeSection = () => (
  <div
    className=" flex h-screen w-full flex-col justify-center items-center">
    <Container >
      <div className="flex flex-col items-center justify-evenly HomeSection_div relative z-1">
        <h1
          id="hero-heading"
          className={`text-center text-4xl/tight font-bold text-${neutralsZ} sm:text-5xl/tight md:text-6xl/tight lg:text-7xl/tight scale-105`}
        >
          TRANSFORMING IDEAS INTO DIGITAL REALITIES
        </h1>
        <div className='flex my-12'>
          <Image className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave' src={html} alt='html' />
          <Image className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave' src={css} alt='css' />
          <Image className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave' src={javascript} alt='js' />
          <Image className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave' src={nodejs} alt='nodejs' />
          <Image className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave' src={ex} alt='express' />
          <Image className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave' src={react} alt='react' />
          <Image className='lg:h-20 md:h-16 sm:h-14 h-10 w-auto mx-[5px] wave' src={db} alt='mongodb' />
        </div>
        <div className="flex items-stretch gap-x-6 gap-y-3 max-sm:flex-col sm:items-center">
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
