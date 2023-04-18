import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MdContentCopy } from 'react-icons/md';

import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useAuthState } from 'contexts/auth/AuthContext';
import { QUERY_KEY_USER_BY_ID, useGetUserById } from 'hooks/useGerUserById';
import { useRef, useState } from 'react';
import { success } from 'helpers/notify/success';
import { useUpdateUser } from 'hooks/useUpdateUser';
import { UpdateUser } from './types';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { Input } from 'components/Input';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from 'helpers/auth/withSSRAuth';
import * as s from './styles';
import { Button } from 'components/Button';
import { useQueryClient } from 'react-query';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => ({
  props: {}
}));

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

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema)
  });

  const { mutate: updateUser } = useUpdateUser(String(user.user_id));
  const [editName, setEditName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const queryClient = useQueryClient();
  const onSubmit: SubmitHandler<FieldValues> = (data: UpdateUser) => {
    updateUser(
      {
        ...data
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEY_USER_BY_ID);

          success('Alteração realizada com sucesso!');
          setEditName(false);
          setEditPhone(false);
          setEditPassword(false);
        }
      }
    );
  };

  console.log(data);

  return (
    <LayoutAuth>
      <s.ContainerPage>
        <Sidebar />
        <s.Content>
          <s.ContentProfile>
            <s.Title>Seus dados</s.Title>
            <s.DivRow>
              <s.UserData>Email</s.UserData>
              <s.Data>{data?.email}</s.Data>
            </s.DivRow>
            <s.Line />
            {editName ? (
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  margin: '10px 0'
                }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Nome"
                  control={control}
                />
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Sobrenome"
                  control={control}
                />
                <Button type="submit" style={{ width: '100%' }}>
                  Salvar
                </Button>
              </form>
            ) : (
              <s.DivSpaceBetween>
                <s.DivRow>
                  <s.UserData>Nome e sobrenome</s.UserData>
                  <s.Data>
                    {data?.firstname}
                    &nbsp;
                    {data?.lastname}
                  </s.Data>
                </s.DivRow>
                <EditIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => setEditName(true)}
                  color="disabled"
                />
              </s.DivSpaceBetween>
            )}

            <s.Line />
            <s.DivSpaceBetween>
              <s.DivRow>
                <s.UserData>CPF</s.UserData>
                <s.Data>{data?.dni}</s.Data>
              </s.DivRow>
            </s.DivSpaceBetween>
            <s.Line />
            {editPhone ? (
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  margin: '10px 0'
                }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Digite um novo número"
                  control={control}
                />

                <Button type="submit" style={{ width: '100%' }}>
                  Salvar
                </Button>
              </form>
            ) : (
              <s.DivSpaceBetween>
                <s.DivRow>
                  <s.UserData>Telefone</s.UserData>
                  <s.Data>{data?.phone}</s.Data>
                </s.DivRow>
                <EditIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => setEditPhone(true)}
                  color="disabled"
                />
              </s.DivSpaceBetween>
            )}
            <s.Line />
            {editPassword ? (
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  margin: '10px 0'
                }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Digite uma nova senha"
                  control={control}
                />
                <Input
                  type="text"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirme sua nova senha"
                  control={control}
                />

                <Button type="submit" style={{ width: '100%' }}>
                  Salvar
                </Button>
              </form>
            ) : (
              <s.DivSpaceBetween>
                <s.DivRow>
                  <s.UserData>Senha de acesso</s.UserData>
                  <s.Data>******</s.Data>
                </s.DivRow>
                <EditIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => setEditPassword(true)}
                  color="disabled"
                />
              </s.DivSpaceBetween>
            )}
            <s.Line />
          </s.ContentProfile>

          <Link style={{ width: '100%' }} href="/carregarvalor/">
            <s.DivAdmPayment>
              <s.Title style={{ marginBottom: '0' }}>
                Administrar meios de pagamento
              </s.Title>
              <ArrowForwardIcon fontSize="large" />
            </s.DivAdmPayment>
          </Link>
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
                size={30}
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
                size={30}
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
