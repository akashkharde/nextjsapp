'use client'
import Title from "../Common/Title";
import Container from "../Ui/Container";
import WorkCards from "../Ui/WorkSlider";
import Image from "next/image";



//   background-image: linear-gradient(transparent 79%, #252528 100%), linear-gradient(#000000 2.1%, transparent 22%), linear-gradient(0deg, rgba(0, 0, 0, 0.66) 0%, rgba(0, 0, 0, 0.07) 45.9%, transparent 100%), linear-gradient(90deg, #19292f 13.2%, #0F0F14 100%);

export default function HomeWork() {
    const dummyProjects = [
        {
            _id: '1',
            name: 'BestBet Builder',
            type: "Web App",
            status: 'On Going',
            projectImage: "/Assets/images/pro1.jpg",
            Address: "https://bestbetsbuilder.bettorlogic.com/"

        },
        {
            _id: '2',
            name: 'Pinnac Enginnering Solution',
            type: "WebSite",
            status: "On Going",
            projectImage: '/Assets/images/pro2.jpg',
            Address: "https://calm-kashata-1ac3ba.netlify.app/"
        },
        {
            _id: '3',
            name: 'PixiBytez',
            type: "Website",
            status: "Completed",
            projectImage: '/Assets/images/pro3.jpg',
            Address: "https://www.pixiebytez.com/"
        },
        {
            _id: '4',
            name: 'Weather App',
            type: "Website",
            status: "Completed",
            projectImage: '/Assets/images/pro4.jpg',
            Address: ""

        },
    ];


    return (
        <Container >
            <div className="">
                <div className="mt-20">
                    <Title name={'Work'} />
                </div>
                <div className="mt-4 lg:mx-12 md:mx-1" >
                    <WorkCards projects={dummyProjects} />
                </div>
            </div>
        </Container>
    )
}