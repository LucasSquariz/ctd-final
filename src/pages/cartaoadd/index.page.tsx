import * as s from './style';
import GreenCircleImg from '../../assets/greenCircleImg';
import SearchImg from '../../assets/searchImg';
import RightArrowImg from '../../assets/rightArrowImg';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import Card from 'components/Card/Card';

const Inicio = () => {
  return (
    <LayoutAuth>
      <s.ContainerPage>
        <Sidebar />
        <s.Content>
          <s.ContentContainer>
            <s.ActivityContainer>
              <Card></Card>
            </s.ActivityContainer>
          </s.ContentContainer>
        </s.Content>
      </s.ContainerPage>
    </LayoutAuth>
  );
};

export default Inicio;
