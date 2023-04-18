import RightArrowImg from 'assets/rightArrowImg';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useAuthState } from 'contexts/auth/AuthContext';
import React, { useRef } from 'react';
import * as s from './styles';
import Copy from 'assets/copy';
import { success } from 'helpers/notify/success';
import { MdContentCopy } from 'react-icons/md';
const Carregarvalor_a = () => {
  const { user } = useAuthState();
  const cvuRef = useRef<HTMLHeadingElement>(null);
  const handleClick = () => {
    if (cvuRef.current) {
      const range = document.createRange();
      range.selectNode(cvuRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      success('CVU Cópiado com sucesso!');
    }
  };

  const AliasRef = useRef<HTMLHeadingElement>(null);
  const handleClickAlias = () => {
    if (AliasRef.current) {
      const range = document.createRange();
      range.selectNode(AliasRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      success('Alias Cópiado com sucesso!');
    }
  };

  return (
    <>
      <LayoutAuth>
        <s.ContainerPage>
          <Sidebar />
          <s.Content>
            <s.ContainerEnglobaDivsA>
              <s.DivCVU>
                <s.TitleDivCVU>
                  <s.SpanCarregarValor primary={true}>
                    Copie seu código de verificação ou nome de usuário para
                    começar a transferir dinheiro de outra conta{' '}
                  </s.SpanCarregarValor>
                </s.TitleDivCVU>
                <s.DivSpaceBetween style={{ marginBottom: '52px' }}>
                  <s.DivColumn>
                    <s.CVUTitle>Código de verificação</s.CVUTitle>
                    <s.CVUData ref={cvuRef}>{user?.cvu}</s.CVUData>
                  </s.DivColumn>

                  <MdContentCopy
                    style={{
                      cursor: 'pointer'
                    }}
                    size={37.56}
                    color="#c1fd35"
                    onClick={handleClick}
                  />
                </s.DivSpaceBetween>
                <s.DivSpaceBetween>
                  <s.DivColumn>
                    <s.CVUTitle>Nome de usuário</s.CVUTitle>
                    <s.CVUData ref={AliasRef}>{user?.alias}</s.CVUData>
                  </s.DivColumn>
                  <MdContentCopy
                    style={{ cursor: 'pointer' }}
                    size={37.56}
                    color="#c1fd35"
                    onClick={handleClickAlias}
                  />
                </s.DivSpaceBetween>
              </s.DivCVU>
            </s.ContainerEnglobaDivsA>
          </s.Content>
        </s.ContainerPage>
      </LayoutAuth>
    </>
  );
};

export default Carregarvalor_a;
