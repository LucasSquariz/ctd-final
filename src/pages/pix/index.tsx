'use client';
import * as s from './style';
import GreenCircleImg from '../../assets/greenCircleImg';
import SearchImg from '../../assets/searchImg';
import RightArrowImg from '../../assets/rightArrowImg';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useState, useEffect } from 'react';
import { useZxing } from 'react-zxing';
import { useRouter } from 'next/navigation';

const Inicio = () => {
  const [result, setResult] = useState('');
  const router = useRouter();
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    }
  });

  useEffect(() => {
    if (result != '') {
      router.push('/carregarvalor/carregarvalor_c');
    }
  }, [result]);

  return (
    <LayoutAuth>
      <s.ContainerPage>
        <Sidebar />
        <s.Content>
          <s.ContentContainer>
            <s.ActivityContainer>
              <div className="cardQR">
                <video className="videoQR" ref={ref} />
              </div>
            </s.ActivityContainer>
          </s.ContentContainer>
        </s.Content>
      </s.ContainerPage>
    </LayoutAuth>
  );
};

export default Inicio;
