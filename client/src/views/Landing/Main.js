import { useEffect, useState } from 'react';
import { Button, Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/css';
import './index.css';
import Navbar from '../../components/Landing/Navbar';
import Footer from '../../components/Landing/Footer';
import Teachers from './Teachers';
import Pricing from './Pricing';
import Contacts from './Contacts';
import { lightenDarkenColor } from '../../utils/utils';
import api from '../../api/api';

const Main = ({ title, description, appIcon }) => {
  const [loaded, setLoaded] = useState(false);
  const [scrollClass, setScrollClass] = useState('');
  const [scrollTop, setScrollTop] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.45);
  const [titleText, setTitleText] = useState('');
  const [titleTextColor, setTitleTextColor] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [subtitleTextColor, setSubtitleTextColor] = useState('');
  const [actionButtonText, setActionButtonText] = useState('');
  const [actionButtonTextColor, setActionButtonTextColor] = useState('');
  const [actionButtonColor, setActionButtonColor] = useState('');

  const [logo, setLogo] = useState('');
  const [teachersLabel, setTeachersLabel] = useState('');
  const [pricingLabel, setPricingLabel] = useState('');
  const [contactLabel, setContactLabel] = useState('');

  const [teacherList, setTeacherList] = useState([]);
  const [teacherConfig, setTeacherConfig] = useState({});
  const [teacherBackgroundColor, setTeacherBackgroundColor] = useState(
    '#FFFFFF',
  );
  const [pricingList, setPricingList] = useState([]);
  const [pricingConfig, setPricingConfig] = useState({});
  const [pricingBackgroundColor, setPricingBackgroundColor] = useState(
    '#FFFFFF',
  );
  const [contactList, setContactList] = useState([]);
  const [contactConfig, setContactConfig] = useState({});
  const [contactBackgroundColor, setContactBackgroundColor] = useState(
    '#FFFFFF',
  );
  const [footerConfig, setFooterConfig] = useState({});

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await api(`/settings/all`);
      if (data) {
        if (data.navigationSettings) {
          const navSettings = data.navigationSettings;

          setLogo(navSettings.logoUrl);
          setTeachersLabel(navSettings.teachersLabel);
          setPricingLabel(navSettings.pricingLabel);
          setContactLabel(navSettings.contactLabel);
        }

        if (data.heroSettings) {
          const { heroSettings } = data;

          setBackgroundImage(heroSettings.backgroundImageUrl);
          setBackgroundOpacity(
            parseFloat(heroSettings.backgroundOpacity) / 100,
          );
          setTitleText(heroSettings.titleText);
          setTitleTextColor(heroSettings.titleTextColor);
          setSubtitleText(heroSettings.subtitleText);
          setSubtitleTextColor(heroSettings.subtitleTextColor);
          setActionButtonText(heroSettings.actionButtonText);
          setActionButtonTextColor(heroSettings.actionButtonTextColor);
          setActionButtonColor(heroSettings.actionButtonColor);
        }

        if (data.teacherSettings) {
          const { teacherSettings } = data;

          setTeacherBackgroundColor(teacherSettings.backgroundColor);
          setTeacherConfig(teacherSettings);
        }
        if (data.teacherList && data.teacherList.length) {
          setTeacherList(data.teacherList);
        }

        if (data.pricingSettings) {
          const { pricingSettings } = data;

          setPricingBackgroundColor(pricingSettings.backgroundColor);
          setPricingConfig(pricingSettings);
        }
        if (data.pricingList && data.pricingList.length) {
          setPricingList(data.pricingList);
        }

        if (data.contactList && data.contactList.length) {
          setContactList(data.contactList);
        }
        if (data.contactSettings) {
          const { contactSettings } = data;

          setContactBackgroundColor(contactSettings.backgroundColor);
          setContactConfig(contactSettings);

          const {
            footerLabel,
            footerBackgroundColor,
            footerTextColor,
          } = contactSettings;

          setFooterConfig({
            footerLabel,
            footerBackgroundColor,
            footerTextColor,
          });
        }
      }

      setLoaded(true);
    };

    fetchData();
  }, []);

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

  return loaded ? (
    <div className={`position-relative ${scrollClass}`}>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={appIcon} />
        <meta name="description" content={description} />
        <meta name="theme-color" content={actionButtonColor} />
      </Helmet>
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
                {actionButtonText ? (
                  <Button className={actionButtonStyle}>
                    <a href="/#contact">{actionButtonText}</a>
                  </Button>
                ) : (
                  ''
                )}
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
          <Teachers config={teacherConfig} list={teacherList} />
        </section>

        <section
          id="pricing"
          className={css`
            background: ${pricingBackgroundColor};
          `}
        >
          <Pricing config={pricingConfig} list={pricingList} />
        </section>

        <section
          id="contact"
          className={css`
            background: ${contactBackgroundColor};
          `}
        >
          <Contacts config={contactConfig} list={contactList} />
        </section>
      </main>

      <Footer config={footerConfig} />
    </div>
  ) : (
    <></>
  );
};

export default Main;
