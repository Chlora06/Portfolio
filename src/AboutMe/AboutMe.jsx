import project from '../img/p-img1.png'

import resume from "../img/Resume 1.0.pdf";
const AboutMe = () => {
  return (
    <div className="aboutMe" id="About">
      <div className="aboutMe-container">
        <div className="aboutMe-container-left">
          <p className="aboutMe-container-left-sentence">
            Hello, I&apos;m Zaijing Liu. My major is Computer science, and minor
            is Design. I have a great interest in UX design. Through self-study,
            I have also learned many UX design concepts and techniques, and I
            will also use them in the projects. Like to make persona, storyboard
            to find where is the users&apos; pain point. And I am committed to
            designing more user centric web interfaces. I hope to make websites
            easier for more people to use.
          </p>
          <div className="aboutMe-container-left-bottom">
            <div className="aboutMe-container-left-bottom-skills">
              <p>Skills:</p>
              <p>React, SASS, HTML, CSS, JavaScript, and Figma</p>
            </div>
          </div>
          <div className="aboutMe-container-left-bottom-smallPieces">
            <a
              href={resume}
              download="Zaijing_Liu_Resume.pdf"
              className="aboutMe-container-left-bottom-smallPieces-resume"
            >
              <p> Click to download my resume</p>
            </a>
          </div>
        </div>
        <div className="aboutMe-container-right">
          <div className="aboutMe-container-right-bottom-picture">
            <img src={project} alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe
