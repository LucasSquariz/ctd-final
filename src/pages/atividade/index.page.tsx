import * as s from './style';

import ActivityCards from 'components/ActivityCards';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useGetAccount } from 'hooks/useGetAccount';
import useGetAccountActivityById from 'hooks/useAccountActivityById';
import { useAuthState } from 'contexts/auth/AuthContext';

const Atividade = () => {  
  const { user } = useAuthState();
  /* @ts-ignore */
  const activity = useGetAccountActivityById(user.id);
  const activityData = activity?.data;

  return (
    <>
      {activityData && (
        <LayoutAuth>
          <s.ContainerPage>
            <Sidebar />
            <s.Content>
              <s.ContentContainer>
                <ActivityCards activityData={activityData} />
              </s.ContentContainer>
            </s.Content>
          </s.ContainerPage>
        </LayoutAuth>
      )}
    </>
  );
};

export default Atividade;
