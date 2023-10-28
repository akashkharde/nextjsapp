"use client";
import lokkeeImage from '../../../Assets/images/lokkee.webp';
import TypingHeading from '../Ui/TypingHeading';
import Image from '../Ui/Image';
import { Caption, Paragraph } from '../Ui/TypoGraphy';

const headings = [
  'Developer',
  'Designer',
  'Problem solver',
  'Freelancer',
  'Coffeeholic',
  'Globetrotter',
];

function HomeAbout() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 w-full bg-neutrals-900"
    >
      <div className="flex min-h-screen w-full items-center max-lg:flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,min(91.666667%/2,40rem))_minmax(0,min(91.666667%/2,40rem))_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,min(80%/2,40rem))_minmax(0,min(80%/2,40rem))_minmax(0,1fr)]" style={{backgroundColor:"black"}}>
        <Image
          metadata={lokkeeImage}
          alt="Myself, Kilian, at the harbour, with a view of the sea and a vision in mind"
          className="h-full max-h-screen bg-neutrals-800 object-cover object-center lg:col-start-1 lg:col-end-3"
        />
        <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:ps-10 xl:ps-20 " >
          <Caption id="about-heading">About</Caption>
          <TypingHeading headings={headings} />
          <Paragraph>
            I am Kilian, a passionate freelancer from Hamburg, Germany, bringing you
            <span className="text-neutrals-100">web development and design from the future</span>. My
            expertise is developing next-level websites and web applications including full frontend
            design.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
