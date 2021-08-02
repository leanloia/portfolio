import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/pic2.JPG';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import DownloadButton from '../components/DownloadButton';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    img {
      border: 2px solid var(--gray-1);
    }
  }

  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }

  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }

  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }

  .about__info__item {
    margin-bottom: 10rem;
  }

  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Leandro Loiacono</span>
            </p>
            <h2 className="about__subheading">A freelance Web Developer</h2>
            <div className="about__info">
              <PText>
                I'm from Buenos Aires, Argentina. Since I was a child, I love
                learning. I'd started to read from an early age and that mark my
                childhood.
                <br />
                <br />
                I like to read and write, and as a hobbie, I'd interested in
                different kinds of languages. I studied german, french, and dive
                into programming languages just from curiosity.
                <br />
                <br />
                As an adult, changing paths -professionally- gave me the
                opportunity to develop an interest in a more serious way, and
                that is what took me to this search for improve and transfer
                some of my own passion for this world while I enjoy having a
                empty canvas to work with.
              </PText>
            </div>
            {/* <Button btnText="Download CV" btnLink="#" /> */}
            <DownloadButton btnLink="./cv.pdf" btnText="Download CV" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="Bootcamp" items={['Ironhack, Barcelona']} />
            <AboutInfoItem
              title="Photography"
              items={['Esc. Fotografía "Andy Goldstein", Buenos Aires']}
            />
            <AboutInfoItem
              title="High School"
              items={['E.T. "Casal Calviño", Buenos Aires']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Node', 'Express', 'MongoDB']}
            />
            <AboutInfoItem title="Design" items={['Photoshop', 'Figma']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="2021 - "
              items={['Freelance web Developer']}
            />
            <AboutInfoItem
              title="2020"
              items={["Teacher's Assistant, at Ironhack's bootcamp"]}
            />
            <AboutInfoItem
              title="2020"
              items={['Fullstack bootcamp, at Ironhack']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
