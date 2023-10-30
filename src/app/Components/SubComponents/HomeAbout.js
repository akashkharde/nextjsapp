"use client";
import lokkeeImage from '../../../Assets/images/lokkee.webp';
import TypingHeading from '../Ui/TypingHeading';
import Image from '../Ui/Image';
import { Caption, Paragraph } from '../Ui/TypoGraphy';
import  Container  from '../Ui/Container';
import Title from '../Common/Title';
import TypoSmoke from '../Ui/TypingHeading';

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

  <Container >
   <div>
   <Title name={"About"} />
   </div>
    <div className='relative top:9'>
      <TypoSmoke headings={headings} />
    </div>
  </Container>
  );
}

export default HomeAbout;
