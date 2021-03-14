import { Container } from 'reactstrap';

import ContactPageSettings from '../components/Admin/Contacts/ContactPageSettings.js';
import ContactList from '../components/Admin/Teachers/TeacherList.js';

const Contacts = () => {
  return (
    <>
      <Container className="bg-gradient-info pt-5 pb-5" fluid>
        <ContactPageSettings />
        <ContactList />
      </Container>
    </>
  );
};

export default Contacts;
