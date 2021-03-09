import { Container } from 'reactstrap';

import NavBarSettings from '../components/NavBarSettings.js';
import HeroSettings from '../components/HeroSettings.js';

const Index = () => {
  return (
    <>
      <Container className="bg-gradient-info pt-5 pb-5" fluid>
        <NavBarSettings />
        <HeroSettings />
      </Container>
    </>
  );
};

export default Index;
