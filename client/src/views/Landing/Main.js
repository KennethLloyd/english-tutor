import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { css } from '@emotion/css';
import { HashLink as Link } from 'react-router-hash-link';
import './index.css';
import Navbar from '../../components/Landing/Navbar';
import Footer from '../../components/Landing/Footer';
import Teachers from './Teachers';
import Pricing from './Pricing';
import Contacts from './Contacts';
import { lightenDarkenColor } from '../../utils/utils';

const Main = () => {
  const [scrollClass, setScrollClass] = useState('');
  const [scrollTop, setScrollTop] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(
    'https://res.cloudinary.com/kennethlloyd/image/upload/v1615714976/english-courses/1615714975835-pexels-photo-5965839%201.png.png',
  );
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.5);
  const [titleText, setTitleText] = useState('English Tutor');
  const [titleTextColor, setTitleTextColor] = useState('#000000');
  const [subtitleText, setSubtitleText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Inhendrerit gravida rutrum quisque.',
  );
  const [subtitleTextColor, setSubtitleTextColor] = useState('#000000');
  const [actionButtonText, setActionButtonText] = useState('LEARN MORE');
  const [actionButtonTextColor, setActionButtonTextColor] = useState('#FFFFFF');
  const [actionButtonColor, setActionButtonColor] = useState('#5e72e4');

  const [logo, setLogo] = useState(
    'https://res.cloudinary.com/kennethlloyd/image/upload/v1615110700/english-courses/english-tutor-logo-dark.svg',
  );
  const [teachersLabel, setTeachersLabel] = useState('Teachers');
  const [pricingLabel, setPricingLabel] = useState('Pricing');
  const [contactLabel, setContactLabel] = useState('Contact');

  const [teacherBackgroundColor, setTeacherBackgroundColor] = useState(
    '#F0F0F0',
  );
  const [pricingBackgroundColor, setPricingBackgroundColor] = useState(
    '#f6f9fc',
  );
  const [contactBackgroundColor, setContactBackgroundColor] = useState(
    '#F0F0F0',
  );

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset;

      if (window.scrollY > 200) {
        setScrollClass('scroll'); // show header
      } else {
        setScrollClass(''); // hide header
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const overlay = css`
    background-color: rgba(255, 255, 255, ${backgroundOpacity});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;

  const jumbotron = css`
    margin-top: 15rem;
  `;

  const titleTextStyle = css`
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 1.5;
    color: ${titleTextColor};
  `;

  const subtitleTextStyle = css`
    font-size: 1.25rem;
    font-weight: 400;
    max-width: 840px;
    color: ${subtitleTextColor};
  `;

  const actionButtonStyle = css`
    color: ${actionButtonTextColor};
    background-color: ${actionButtonColor};
    border-color: ${actionButtonColor};
    &:hover {
      background-color: ${lightenDarkenColor(actionButtonColor, 90)};
      border-color: ${lightenDarkenColor(actionButtonColor, 90)};
    }
  `;

  return (
    <div className={`position-relative ${scrollClass}`}>
      <Navbar
        logo={logo}
        teachersLabel={teachersLabel}
        pricingLabel={pricingLabel}
        contactLabel={contactLabel}
        textColor={subtitleTextColor}
        isScrolled={scrollClass === 'scroll' ? true : false}
        headerColor={actionButtonColor}
        headerTextColor={actionButtonTextColor}
      />

      <main>
        <section
          id="home"
          className="d-flex align-items-center position-relative vh-100 hero"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <Container className={`pl-xl-9 pr-xl-9 ${overlay}`} fluid>
            <div className={jumbotron}>
              <h1 className={titleTextStyle}>{titleText}</h1>
              <p className={subtitleTextStyle}>{subtitleText}</p>
              <p className="lead">
                <Button className={actionButtonStyle}>
                  <Link to="/#contact">{actionButtonText}</Link>
                </Button>
              </p>
            </div>
          </Container>
        </section>

        <section
          id="teachers"
          className={css`
            background: ${teacherBackgroundColor};
          `}
        >
          <Teachers />
        </section>

        <section
          id="pricing"
          className={css`
            background: ${pricingBackgroundColor};
          `}
        >
          <Pricing />
        </section>

        <section
          id="contact"
          className={css`
            background: ${contactBackgroundColor};
          `}
        >
          <Contacts />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Main;
