import { Container } from 'reactstrap';

import TeacherPageSettings from '../components/Admin/Teachers/TeacherPageSettings.js';
import TeacherList from '../components/Admin/Teachers/TeacherList.js';

const Teachers = () => {
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
