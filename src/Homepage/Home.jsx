import Myphoto from '../img/Myphoto.png'
import ins from '../img/ins.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';

import TypingAnimation from './TypingAnimation';

const Home = () => {

  return (
    <div className="homepage">
      <div className="homepage-title">
        <div className="homepage-title-container">
          <p className="homepage-title-hello">Hello, I&apos;m...</p>
          <p className="homepage-title-name">
            <TypingAnimation text="Zaijing Liu" speed={250} />
          </p>

          <p className="homepage-title-role">
            UX Designer
            <br />& A front-end Developer
          </p>
        </div>

        <div className="homepage-icon">
          <a
            href="https://www.instagram.com/chloraliu/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ins} alt="ins-icon" />
          </a>
          <a
            href="https://github.com/Chlora06"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="ins-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/zaijingliu06/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="ins-icon" />
          </a>
        </div>
      </div>

      <div className="homepage-photo">
        <img
          className="homepage-photo-img Myself"
          src={Myphoto}
          alt="My photo"
        />
      </div>
    </div>
  );
}

export default Home
