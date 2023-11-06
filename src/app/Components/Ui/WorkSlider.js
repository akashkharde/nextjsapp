'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { cn, clamp } from '../Lib/Utils';

const CAROUSEL_SLIDES_GAP = 24;

function ProjectCarousel({ projects }) {
    const carouselRef = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [carouselSlideWidth, setCarouselSlideWidth] = useState(0);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const scrollPosition = useMotionValue(0);
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
    function scrollToPreviousSlide() {
        scrollToSlide(currentSlide - 1);
    }

    function scrollToNextSlide() {
        scrollToSlide(currentSlide + 1);
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
    const isDisabled = false
    const handleMouseMove = (event) => {
        if (carouselRef.current && dragStart) {
            const distanceX = event.clientX - dragStart.pointerX;

            carouselRef.current.scrollTo({
                left: dragStart.scrollX - distanceX,
            });
            if (!isDragging) setIsDragging(true);
        }
    };

    return (
        <div>
            <div className="relative py-1 top-56">
                <div aria-label="Carousel Controls" className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-2 lg:px-2">
                    <button type="button"
                        onClick={scrollToPreviousSlide}
                        title="Previous project slide" aria-controls="project-carousel"
                        disabled={currentSlide === 0}
                        className="pointer-events-auto aspect-square h-fit rounded-full border border-neutrals-600 bg-neutrals-900/90 p-4 text-neutrals-100 drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-neutrals-900/50"
                    >
                        {/* <Icons.ChevronLeft className="h-5 w-5" /> */}
                        A
                    </button>
                    <button
                        type="button"
                        onClick={scrollToNextSlide}
                        title="Next project slide"
                        aria-controls="project-carousel"
                        disabled={currentSlide === projects.length - 1}
                        className="pointer-events-auto aspect-square h-fit rounded-full border border-neutrals-600 bg-neutrals-900/90 p-4 text-neutrals-100 drop-shadow-md backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 supports-[backdrop-filter]:bg-neutrals-900/50"
                    >
                        {/* <Icons.ChevronRight className="h-5 w-5" /> */}
                        B
                    </button>
                </div>
                <p
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="sr-only"
                >
                    Project {currentSlide + 1} of {projects.length}
                </p>
            </div>
            <div ref={carouselRef} className={cn('grid auto-cols-min grid-flow-col gap-x-6 overflow-x-auto')}>
                {projects.map((project, index) => (
                    
                    <motion.div
                        key={project._id}
                        className={cn('aspect-[2/3] w-[clamp(18rem,42vmin,26rem)] overflow-hidden rounded-md')} style={{ backgroundImage: `url(${project.projectImage})` }}>
                        <div className={cn('group block h-full w-full rounded-md border border-neutrals-50/30 flex flex-col items-center justify-center cursor-pointer')}>
                            <div className='text-white mb-3'>{project.name}</div>
                            <div className='text-white mb-3'>{project.type}</div>
                            <div className='text-white mb-3'>{project.status}</div>
                            {/* <Image src={project.projectImage} width={200} height={200} alt='' /> */}
                        </div>
                    </motion.div>

                ))}
            </div>

        </div>
    );
}

export default ProjectCarousel;
