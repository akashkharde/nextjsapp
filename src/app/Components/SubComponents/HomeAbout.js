"use client";
import lokkeeImage from '../../../Assets/images/lokkee.webp';
import TypingHeading from '../Ui/TypingHeading';
import Image from '../Ui/Image';
import { Caption, Paragraph } from '../Ui/TypoGraphy';
import  Container  from '../Ui/Container';
import Title from '../Common/Title';

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
    <Title name={"About"} />
  </Container>
  );
}

export default HomeAbout;
