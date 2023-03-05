import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MdContentCopy } from 'react-icons/md';

import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import * as s from './styles';
import { useAuthState } from 'contexts/auth/AuthContext';
import { useGetUserById } from 'hooks/useGerUserById';
import { useEffect, useRef, useState } from 'react';
import { success } from 'helpers/notify/success';

const Perfil = () => {
  const { user } = useAuthState();

  const { data } = useGetUserById(user.user_id);

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
    <LayoutAuth>
      <s.ContainerPage>
        <s.SidebarContainer>
          <Sidebar />
        </s.SidebarContainer>
        <s.Content>
          <s.ContentProfile>
            <s.Title>Seus dados</s.Title>
            <s.DivRow>
              <s.UserData>Email</s.UserData>
              <s.Data>{data?.email}</s.Data>
            </s.DivRow>
            <s.Line />
            <s.DivSpaceBetween>
              <s.DivRow>
                <s.UserData>Nome e sobrenome</s.UserData>
                <s.Data>
                  {data?.firstname}
                  &nbsp;
                  {data?.lastname}
                </s.Data>
              </s.DivRow>
              <EditIcon color="disabled" />
            </s.DivSpaceBetween>

            <s.Line />
            <s.DivSpaceBetween>
              <s.DivRow>
                <s.UserData>CPF</s.UserData>
                <s.Data>{data?.dni}</s.Data>
              </s.DivRow>
              <EditIcon color="disabled" />
            </s.DivSpaceBetween>
            <s.Line />
            <s.DivSpaceBetween>
              <s.DivRow>
                <s.UserData>Telefone</s.UserData>
                <s.Data>{data?.phone}</s.Data>
              </s.DivRow>
              <EditIcon color="disabled" />
            </s.DivSpaceBetween>
            <s.Line />
            <s.DivSpaceBetween>
              <s.DivRow>
                <s.UserData>Senha de acesso</s.UserData>
                <s.Data>******</s.Data>
              </s.DivRow>
              <EditIcon color="disabled" />
            </s.DivSpaceBetween>
            <s.Line />
          </s.ContentProfile>
          <s.DivAdmPayment>
            <s.Title style={{ marginBottom: '0' }}>
              Administrar meios de pagamento
            </s.Title>
            <ArrowForwardIcon fontSize="large" />
          </s.DivAdmPayment>
          <s.DivCVU>
            <s.TitleDivCVU>
              Copiar seu CVU ou alias para adicionar ou transferir valor a
              partir de outra conta
            </s.TitleDivCVU>
            <s.DivSpaceBetween style={{ marginBottom: '52px' }}>
              <s.DivColumn>
                <s.CVUTitle>CVU</s.CVUTitle>
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
                <s.CVUTitle>Alias</s.CVUTitle>
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
        </s.Content>
      </s.ContainerPage>
    </LayoutAuth>
  );
};

export default Perfil;
