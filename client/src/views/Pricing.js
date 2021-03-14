import { Container } from 'reactstrap';

import PricingPageSettings from '../components/Admin/Pricing/PricingPageSettings.js';
import PricingList from '../components/Admin/Pricing/PricingList.js';

const Pricing = () => {
  return (
    <>
      <Container className="bg-gradient-info pt-5 pb-5" fluid>
        <PricingPageSettings />
        <PricingList />
      </Container>
    </>
  );
};

export default Pricing;
