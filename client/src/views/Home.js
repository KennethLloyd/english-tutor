import { useState } from 'react';
import { Button, Container } from 'reactstrap';
import { css, cx } from '@emotion/css';
import Navbar from '../components/Landing/Navbar';
import { lightenDarkenColor } from '../utils/utils';

const Home = () => {
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

  const backgroundStyle = css`
    height: 100vh;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  const overlay = css`
    background-color: rgba(255, 255, 255, ${backgroundOpacity});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;

  const jumbotron = css`
    margin-top: 10%;
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
    <div className={backgroundStyle}>
      <div className={overlay}>
        <Navbar
          logo={logo}
          teachersLabel={teachersLabel}
          pricingLabel={pricingLabel}
          contactLabel={contactLabel}
          color={subtitleTextColor}
        />
        <Container className="pl-xl-9 pr-xl-9" fluid>
          <div className={jumbotron}>
            <h1 className={titleTextStyle}>{titleText}</h1>
            <p className={subtitleTextStyle}>{subtitleText}</p>
            <p className="lead">
              <Button className={actionButtonStyle}>{actionButtonText}</Button>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
