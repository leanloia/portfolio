import React from 'react';
// import { Link as a } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';
// import Button from './Button';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3 solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    min-height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__description {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }

  .projectItem__links {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.8rem;
  }

  .button {
    font-size: 2rem;
    background-color: ${(props) =>
      props.outline ? 'var(--gray-1)' : 'transparent'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'black' : 'var(--gray-1)')};
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }

    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fuga quia omnis maxime saepe nam esse inventore, suscipit vero
          asperiores tempora quasi ullam facere officiis! Vero voluptate dolore
          eius non!`,
  linkLive = '#',
  linkCode = '#',
}) {
  return (
    <ProjectItemStyle>
      <a to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <p className="projectItem__description">{description}</p>
        <div className="projectItem__links">
          <div className="button-wrapper">
            <a
              target="_blank"
              rel="noreferrer"
              className="button"
              href={linkLive}
            >
              live
            </a>
          </div>
          <div className="button-wrapper">
            <a
              target="_blank"
              rel="noreferrer"
              className="button"
              href={linkCode}
            >
              code
            </a>
          </div>
        </div>
      </div>
    </ProjectItemStyle>
  );
}
