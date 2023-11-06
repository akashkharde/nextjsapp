'use client'
import Title from "../Common/Title";
import Container from "../Ui/Container";
import WorkCards from "../Ui/WorkSlider";
import Image from "next/image";




export default function HomeWork() {
    const dummyProjects = [
        {
            _id: '1',
            name: 'BestBet Builder',
            type: "Web App",
            status: 'On Going',
            projectImage: "/Assets/images/pro1.jpg",
        },
        {
            _id: '2',
            name: 'Pinnac Enginnering Solution',
            type: "WebSite",
            status: "On Going",
            projectImage: '/Assets/images/pro2.png'
        },
        {
            _id: '3',
            name: 'PixiBytez',
            type: "Website",
            status: "Completed",
            projectImage: '/Assets/images/pro3.png'
        },
        {
            _id: '4',
            name: 'Weather App',
            type: "Website",
            status: "Completed",
            projectImage: '/Assets/images/pro4.jpg'
        },
        {
            _id: '',
            name: '',
            type: "",
            status: "",
            projectImage: '../../Assets/images/pro5.jpg'
        },
    ];


    return (
        <Container >
            <div className="mt-24">
                <Title name={'Work'} />
            </div>
            <div className="mt-6 lg:mx-12 md:mx-1" >
                <WorkCards projects={dummyProjects} />
            </div>
        </Container>
    )
}