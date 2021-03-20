import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { css } from '@emotion/css';
import './index.css';
import Navbar from '../../components/Landing/Navbar';
import Teachers from './Teachers';
import Pricing from './Pricing';
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
                  {actionButtonText}
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

        <section id="process" className="process">
          <div className="container-fluid container-fluid-max">
            <div className="row text-center py-5">
              <div className="col-12 pb-4">
                <h2 className="text-red">How It Works</h2>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x text-red"></i>
                  <i className="fas fa-map-marked fa-stack-1x text-white"></i>
                </span>
                <h3 className="mt-3 text-red h4">Choose a destination</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                  repudiandae.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x text-red"></i>
                  <i className="fas fa-plane fa-stack-1x text-white"></i>
                </span>
                <h3 className="mt-3 text-red h4">Book a flight</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                  repudiandae.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x text-red"></i>
                  <i className="fas fa-car fa-stack-1x text-white"></i>
                </span>
                <h3 className="mt-3 text-red h4">Rent a car</h3>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x text-red"></i>
                  <i className="fas fa-home fa-stack-1x text-white"></i>
                </span>
                <h3 className="mt-3 text-red h4">Rent an appartment</h3>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </p>
              </div>
              <div className="col-12 pt-3">
                <a
                  className="btn bg-red text-white"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Neuschwanstein_Castle"
                  role="button"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="featured-destinations"
          className="featured-destinations bg-lightblue"
        >
          <div className="row no-gutters">
            <div className="col-12 col-md-6 d-flex align-items-center order-1 order-md-0">
              <div className="p-15">
                <h3>Explore Norway</h3>
                <p>
                  <strong>Ålesund</strong> is a town and municipality in Møre og
                  Romsdal County, Norway. It is part of the traditional district
                  of Sunnmøre and the centre of the Ålesund Region. It is a sea
                  port and is noted for its concentration of Art Nouveau
                  architecture. The town of Ålesund is the administrative centre
                  of Ålesund Municipality, as well as the principal shipping
                  town of the Sunnmøre district.{' '}
                </p>
                <p>
                  The 99-square-kilometre (38 sq mi) municipality is the 382nd
                  largest by area out of the 422 municipalities in Norway.
                  Ålesund is the 17th most populous municipality in Norway with
                  a population of 47,199. The municipality's population density
                  is 506.6 inhabitants per square kilometre (1,312/sq mi) and
                  its population has increased by 14% over the last decade.
                </p>
                <a
                  className="btn bg-red text-white"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/%C3%85lesund"
                  role="button"
                >
                  Read More →
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 order-0 order-md-1">
              <div
                className="vh-100 cover"
                style={{
                  backgroundImage:
                    'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/norway_700.jpg)',
                }}
              ></div>
            </div>
            <div className="col-12 col-md-6 order-2">
              <div
                className="vh-100 cover"
                style={{
                  backgroundImage:
                    'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/germany_700.jpg)',
                }}
              ></div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center order-3">
              <div className="p-15">
                <h3>Explore Germany</h3>
                <p>
                  <strong>Neuschwanstein Castle</strong> is a 19th-century
                  Romanesque Revival palace on a rugged hill above the village
                  of Hohenschwangau near Füssen in southwest Bavaria, Germany.
                  The palace was commissioned by Ludwig II of Bavaria as a
                  retreat and in honour of Richard Wagner. Ludwig paid for the
                  palace out of his personal fortune and by means of extensive
                  borrowing, rather than Bavarian public funds.
                </p>
                <p>
                  The castle was intended as a home for the king, until he died
                  in 1886. It was open to the public shortly after his death.
                  Since then more than 61 million people have visited
                  Neuschwanstein Castle. More than 1.3 million people visit
                  annually, with as many as 6,000 per day in the summer.
                </p>
                <a
                  className="btn bg-red text-white"
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Neuschwanstein_Castle"
                  role="button"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="popular-destinations"
          className="popular-destinations py-5"
        >
          <div className="container-fluid container-fluid-max">
            <div className="row">
              <div className="col-12">
                <h2 className="pb-3 text-red">Popular Destinations</h2>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <a href="" className="text-white">
                  <figure className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Vienna.jpg"
                      alt="Vienna"
                    />
                    <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                      <h3>Vienna</h3>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <a href="" className="text-white">
                  <figure className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Edinburgh.jpg"
                      alt="Edinburgh"
                    />
                    <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                      <h3>Edinburgh</h3>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <a href="" className="text-white">
                  <figure className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/new_york.jpg"
                      alt="New York"
                    />
                    <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                      <h3>New York</h3>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-12 col-sm-6">
                <a href="" className="text-white">
                  <figure className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/porto.jpg"
                      alt="Porto"
                    />
                    <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                      <h3>Porto</h3>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="col-12 col-md-6">
                <a href="" className="text-white">
                  <figure className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/manarola.jpg"
                      alt="Manarola"
                    />
                    <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                      <h3>Manarola</h3>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <a className="btn bg-red text-white" href="" role="button">
                  More Destinations ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="request-quote" className="py-5 request-quote bg-lightblue">
          <div className="container-fluid container-fluid-max">
            <div className="row justify-content-center">
              <div className="col-12 col-md-auto py-3 text-center">
                <h2 className="mb-0 text-red">
                  Ready to start your next journey?
                </h2>
                <p className="mb-0 h4 text-red font-weight-normal">
                  Get in touch today!
                </p>
              </div>
              <div className="col-12 col-md-auto d-flex justify-content-center align-items-center">
                <a
                  className="btn bg-red text-white font-weight-bold"
                  href=""
                  role="button"
                >
                  REQUEST A QUOTE
                  <i className="ml-1 fas fa-hand-point-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-5 page-footer">
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-6 footer-child copyright">
              HoneyDreams © 2018 All Rights Reserved
            </div>
            <div className="col-12 col-md-6 footer-child footer-links">
              <a href="" className="mr-3">
                Privacy Policy
              </a>
              <a href="">FAQ</a>
              <div>
                <small>
                  Made with <i className="fas fa-heart text-red"></i> by{' '}
                  <a href="http://georgemartsoukos.com/" target="_blank">
                    George Martsoukos
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
