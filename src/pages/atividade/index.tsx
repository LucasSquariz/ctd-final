import * as s from './style';

import ActivityCards from 'components/ActivityCards';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useGetAccount } from 'hooks/useGetAccount';
import useGetAccountActivityById from 'hooks/useAccountActivityById';

const Atividade = () => {
  const { data } = useGetAccount();

  /* @ts-ignore */
  const activity = useGetAccountActivityById(data?.user_id);
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
