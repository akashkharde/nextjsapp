import Title from "../Common/Title";
import Container from "../Ui/Container";
import WorkCards from "../Ui/WorkSlider";

export default function HomeWork() {
const dummyProjects = [
    {
      _id: 'project1',
      name: 'Project 1',
      slug: { current: 'project-1' },
      date: '2023-01-01',
      tags: ['Website', 'Tag1', 'Tag2'],
    },
    {
      _id: 'project2',
      name: 'Project 2',
      slug: { current: 'project-2' },
      date: '2023-02-01',
      tags: ['Graphic design', 'Tag2', 'Tag3'],
    },
    {
        _id: 'project3',
        name: 'Project 2',
        slug: { current: 'project-2' },
        date: '2023-02-01',
        tags: ['Graphic design', 'Tag2', 'Tag3'],
      },
      {
        _id: 'project4',
        name: 'Project 2',
        slug: { current: 'project-2' },
        date: '2023-02-01',
        tags: ['Graphic design', 'Tag2', 'Tag3'],
      },
      {
        _id: 'project5',
        name: 'Project 2',
        slug: { current: 'project-2' },
        date: '2023-02-01',
        tags: ['Graphic design', 'Tag2', 'Tag3'],
      },
  ];

  
    return(
        <Container >
            <div className="mt-24">
                <Title name={'Work'} />
            </div>
            <div className="mt-6 lg:mx-12 md:mx-1" >
                <WorkCards  projects={dummyProjects}/>
            </div>
        </Container>
    )
}