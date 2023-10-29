"use client";

import GridBackground from '../Ui/GridBackground';
import Button from '../Ui/Button';
import Container from '../Ui/Container';

const HomeSection = () => (
  <div
    className="flex h-screen w-full flex-col justify-center py-28 ">
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h1
          id="hero-heading"
          className="text-center text-2xl/tight font-bold text-neutrals-50 sm:text-5xl/tight md:text-7xl lg:text-8xl/tight"
        >
          Web Development <br />and Design Studio <br />from the Future
        </h1>
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
