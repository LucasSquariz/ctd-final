import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { LayoutProps } from './types';

const LayoutGuest = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutGuest;
