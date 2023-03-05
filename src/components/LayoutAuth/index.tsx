import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { LayoutProps } from './types';

const LayoutAuth = ({ children }: LayoutProps) => {
  return (
    <>
      <Header auth />
      {children}
      <Footer />
    </>
  );
};

export default LayoutAuth;
