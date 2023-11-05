import Title from "../Common/Title";
import Container from "../Ui/Container";
import WorkCards from "../Ui/WorkSlider";

export default function HomeWork() {
    const dummyProjects = [
        {
            _id: '1',
            name: 'BestBet Builder',
            type:"Web App",
            status: 'On Going',
        },
        {
            _id: '2',
            name: 'Pinnac Enginnering Solution',
            type:"WebSite",
            status:"On Going",
        },
        {
            _id: '3',
            name: 'PixiBytez',
            type:"Website",
            status: "Completed",
        },
        {
            _id: '4',
            name: 'Weather App',
            type:"Website",
            status: "Completed",
        },
        {
            _id: '',
            name: '',
            type:"",
            status: "",
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