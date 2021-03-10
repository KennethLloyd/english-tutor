import { Container } from 'reactstrap';

import TeacherPageSettings from '../components/TeacherPageSettings.js';
import TeacherList from '../components/TeacherList.js';

const Teachers = () => {
  console.log('HERE');
  return (
    <>
      <Container className="bg-gradient-info pt-5 pb-5" fluid>
        <TeacherPageSettings />
        <TeacherList />
      </Container>
    </>
  );
};

export default Teachers;
