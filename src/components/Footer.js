import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem;
    margin-top: 5rem;

    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }

    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Leandro Loiacono</h1>
          <PText>
            I'm a freelance website developer from Argentina, living since 2019
            in Barcelona, Catalunya. I create and design websites while I try to
            develop my own skills and learn new things.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/home',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+34 693 004488',
                path: 'tel:+34693004488',
              },
              {
                title: 'leandro.a.loiacono@gmail.com',
                path: 'mailto:leandro.a.loiacono@gmail.com',
              },
              {
                title: 'Barcelona, Catalunya, Spain',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/leanloia',
              },
              {
                title: 'Linkedin',
                path: 'https://linkedin.com/in/leandro-loiacono',
              },
              {
                title: 'Instagram',
                path: 'https://instagram.com/ilbaleno',
              },
              {
                title: 'Codepen',
                path: 'https://codepen.io/interstellarpf',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2024 - Leandro Loiacono | Designed By Leandro Loiacono
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
