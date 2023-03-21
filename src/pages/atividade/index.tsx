import { useForm } from 'react-hook-form';

import * as s from './style';
import { Input } from 'components/Input';
import SearchImg from 'assets/searchImg';
import FilterIcon from 'assets/filterIcon';
import ActivityCards from 'components/ActivityCards';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useGetAccount } from 'hooks/useGetAccount';
import useGetAccountActivityById from 'hooks/useAccountActivityById';
import CustomizedMenus from 'components/FilterButton';

const Atividade = () => {
  const { data } = useGetAccount();

  /* @ts-ignore */
  const activity = useGetAccountActivityById(1);
  const activityData = activity?.data;
  console.log(activityData);

  console.log(activityData);
  const { control } = useForm({
    defaultValues: {
      search: '',
      filter: ''
    }
  });

  return (
    <>
      {activityData && (
        <LayoutAuth>
          <s.ContainerPage>
            <Sidebar />
            <s.Content>
              <s.ContentContainer>
                <s.SearchContainer>
                  <s.SearchBarLabel>
                    <Input
                      icon={() => <SearchImg />}
                      type="text"
                      id="search"
                      name="search"
                      placeholder="Buscar em sua atividade"
                      control={control}
                    />
                  </s.SearchBarLabel>
                  
                    {/* <s.FilterButton>Filtrar</s.FilterButton>
                    <FilterIcon /> */}
                    <CustomizedMenus />
                  
                </s.SearchContainer>
                <s.ActivityContainer>
                  <s.ActivityTitle>Suas atividades </s.ActivityTitle>
                  <ActivityCards activityData={activityData} />
                </s.ActivityContainer>
              </s.ContentContainer>
            </s.Content>
          </s.ContainerPage>
        </LayoutAuth>
      )}
    </>
  );
};

export default Atividade;
