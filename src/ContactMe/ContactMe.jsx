import Behance from '../img/icon/Behance.png'
import Github from '../img/icon/GitHub.png'
import Instagram from '../img/icon/Instagram.png'
import Letter from '../img/icon/Letter.png'
import Linkedin from '../img/icon/LinkedIn.png'
const ContactMe = () => {
  return (
    <div className="contact" id="Contact">
      <p className="contact-title">How to touch me</p>
      <div className="contact-container">
        <div className="contact-container-left">
          <div className="contact-container-left-item">
            <img src={Letter} alt="email-icon" />
            <a href="Chlora006@gmail.com" rel="noreferrer" target="_blank">
              Chlora006@gmail.com
            </a>
          </div>
          <div className="contact-container-left-item">
            <img src={Linkedin} alt="linkedin-icon" />
            <a
              href="https://www.linkedin.com/in/zaijingliu06/"
              rel="noreferrer"
              target="_blank"
            >
              www.linkedin.com/in/zaijing-liu-161275271
            </a>
          </div>
          <div className="contact-container-left-item">
            <img src={Behance} alt="Behance-icon" />
            <a
              href="https://www.behance.net/chloraliu"
              rel="noreferrer"
              target="_blank"
            >
              https://www.behance.net/chloraliu
            </a>
          </div>
        </div>
        <div className="contact-container-right">
          <div className="contact-container-right-item">
            <img src={Github} alt="github-icon" />
            <a
              href="https://github.com/Chlora06"
              rel="noreferrer"
              target="_blank"
            >
              https://github.com/Chlora06
            </a>
          </div>
          <div className="contact-container-right-item">
            <img src={Instagram} alt="ins-icon" />
            <a
              href="https://www.instagram.com/chloraliu/"
              rel="noreferrer"
              target="_blank"
            >
              https://www.instagram.com/chloraliu/
            </a>
          </div>
        </div>
      </div>
      <div className="contact-end"></div>
    </div>
  );
}

export default ContactMe