import { Container } from 'reactstrap';

import TeacherPageSettings from '../components/TeacherPageSettings.js';
// import HeroSettings from '../components/HeroSettings.js';

const Teachers = () => {
  console.log('HERE');
  return (
    <>
      <Container className="bg-gradient-info pt-5 pb-5" fluid>
        <TeacherPageSettings />
        {/* <HeroSettings /> */}
      </Container>
    </>
  );
};

export default Teachers;
