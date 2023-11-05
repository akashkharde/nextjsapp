import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn, clamp } from '../Lib/Utils';

const CAROUSEL_SLIDES_GAP = 24;

function ProjectCarousel({ projects }) {
    const carouselRef = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [carouselSlideWidth, setCarouselSlideWidth] = useState(0);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const updateCarouselConstraints = useCallback(() => {
      if (!carouselRef.current || !carouselRef.current.firstElementChild) return;
  
      setCarouselWidth(carouselRef.current.offsetWidth);
      setCarouselSlideWidth(carouselRef.current.firstElementChild.offsetWidth);
      setMaxScrollWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }, []);
  
    useEffect(() => {
      updateCarouselConstraints();
  
      window.addEventListener('resize', updateCarouselConstraints);
      window.addEventListener('orientationchange', updateCarouselConstraints);
  
      return () => {
        window.removeEventListener('resize', updateCarouselConstraints);
        window.removeEventListener('orientationchange', updateCarouselConstraints);
      };
    }, [updateCarouselConstraints]);
  
    function updateCurrentSlide(latestScrollPosition) {
      setCurrentSlide(
        clamp(
          0,
          Math.round(latestScrollPosition / (carouselSlideWidth + CAROUSEL_SLIDES_GAP)),
          projects.length - 1,
        ),
      );
    }
  
    useEffect(() => {
      const handleScroll = () => {
        if (carouselRef.current) {
          updateCurrentSlide(carouselRef.current.scrollLeft);
        }
      };
  
      carouselRef.current.addEventListener('scroll', handleScroll);
  
      return () => {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      };
    }, [carouselSlideWidth, projects.length]);
  
    function scrollToSlide(slideIndex) {
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: slideIndex * (carouselSlideWidth + CAROUSEL_SLIDES_GAP),
          behavior: 'smooth',
        });
      }
    }
  

  const handleMouseDown = (event) => {
    const isMainMouseButtonClicked = event.button === 0;

    if (isMainMouseButtonClicked) {
      setDragStart({
        scrollX: event.currentTarget.scrollLeft,
        pointerX: event.clientX,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  const handleMouseMove = (event) => {
    if (carouselRef.current && dragStart) {
      const distanceX = event.clientX - dragStart.pointerX;

      carouselRef.current.scrollTo({
        left: dragStart.scrollX - distanceX,
      });
      if (!isDragging) setIsDragging(true);
    }
  };

  const filteredProjects = projects;

  return (
    <div>
      <div ref={carouselRef} className={cn('grid auto-cols-min grid-flow-col gap-x-6 overflow-x-auto')}>
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            className={cn('aspect-[2/3] w-[clamp(18rem,42vmin,26rem)] overflow-hidden rounded-md')}
          >
            <div className={cn('group block h-full w-full rounded-md border border-neutrals-50/30')}>
              {/* Your project content here */}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Progress bar or controls here */}
    </div>
  );
}

export default ProjectCarousel;
