import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyle = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyle>
      <div className="container">
        <SectionTitle heading="Services" subheading="what i will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            description="I develop the websites. I create high performance websites with brazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website design"
            description="I do ui/ux design for the website that helps it to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            description="I develop mobile applications. I create mobile app with eye catching ui."
          />
        </div>
      </div>
    </ServicesItemStyle>
  );
}
