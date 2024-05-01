import project4 from '../img/project4.png'
import project3 from '../img/project3.png'
import project2 from '../img/project2.png'
import project1 from '../img/project1.png'
import HoverDescription from './HoverDescription'
const Projects = () => {
  
  return (
    <div className="projects" id="Projects">
      <p className="projects-title">My projects</p>
      <div className="projects-container">
        <div className="projects-container-project">
          <HoverDescription
            image={project1}
            alt="Project1-CSC648: Software Engineering - Travel Wise"
            description="This a group project. Six people worked together to complete the
              front and back ends of this website. My role is front-end leader,
              and UX designer. Find the user's pain point, make personas,
              user stories, and complete storyboard. After analyzing, we sure
              what functions we need. And using react, js, css and sass to build
              the front-end."
          />
          <div className="projects-container-project-text">
            <p className="title">CSC648: Software Engineering - Travel Wise </p>
            <div className="projects-container-project-text-link">
              <a
                href="https://www.figma.com/file/RD0A8zw1ulz1KuEk5hVbFw/Travel-wise?type=design&node-id=0%3A1&mode=design&t=WzKFTAo1xicQIIiz-1"
                rel="noreferrer"
                target="_blank"
              >
                Figma Link
              </a>
              <a
                href="https://tp2024.westus3.cloudapp.azure.com/"
                rel="noreferrer"
                target="_blank"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
        <div className="projects-container-project">
          <HoverDescription
            image={project2}
            alt="Project2-CSC680: App Dev For Mobile Device - PetpetGo"
            description="This is a IOS group project. In this project, we use Swift to
              develop this ios app which can help people adopt pets. And I
              design the whole UI interface. And make Lo-fi and Hi-fi prototype."
          />

          <div className="projects-container-project-text">
            <p className="title">
              CSC680: App Dev For Mobile Device - PetpetGo
            </p>
            <div className="projects-container-project-text-link">
              <a
                href="https://www.figma.com/file/5Bb0WiE4KIohLhr2Yo8lB6/PetpetGo-ios?type=design&node-id=0%3A1&mode=design&t=AouMXAXaA2wPyK2p-1"
                rel="noreferrer"
                target="_blank"
              >
                Figma Link
              </a>
              <a
                href="https://github.com/Damon0427/petpetgo"
                rel="noreferrer"
                target="_blank"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
        <div className="projects-container-project">
          <HoverDescription
            image={project3}
            alt="Project3CSC413: Software Development - Tank Game "
            description="Using Java to create a tank game. Developed game features
              including a start/end screen, 2-player mode, tank movement and
              rotation, split screen, mini-map, health bars, lives count,
              power-ups, breakable and unbreakable walls, bullet mechanics,
              animations, and sound effects."
          />
          <div className="projects-container-project-text">
            <p className="title">CSC413: Software Development - Tank Game </p>
            <div className="projects-container-project-text-link">
              <a
                href="https://github.com/Chlora06/CaT_Tank"
                rel="noreferrer"
                target="_blank"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
        <div className="projects-container-project">
          <HoverDescription
            image={project4}
            alt="Project4-CSC413: Software Development - Tank Game "
            description=" Design a furniture website. And finished Lo-fi and Hi-fi
              prototype."
          />
          <div className="projects-container-project-text">
            <p className="title">Furniture website - FurniSimple </p>
            <div className="projects-container-project-text-link">
              <a
                href="https://www.figma.com/file/TneSd11MgeiX1Algr3Tebg/Furniture-Website?type=design&node-id=0%3A1&mode=design&t=WROlqADxI2WSnWoF-1"
                rel="noreferrer"
                target="_blank"
              >
                Figma Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
