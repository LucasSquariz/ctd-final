import * as s from './styles';
import RedCircleImg from '../../assets/redCircleImg';
import GreenCircleImg from '../../assets/greenCircleImg';
import { ActivityItemType } from './types';
import { useState } from 'react';
import RightArrowImg from 'assets/rightArrowImg';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import SearchImg from 'assets/searchImg';
import { Input } from 'components/Input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import CustomizedMenus from 'components/FilterButton';

export async function getServerSideProps(context: any) {
  return {
    props: {} // will be passed to the page component as props
  };
}

const ActivityCards = ({ activityData }: any) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [data, setData] = useState(activityData);

  const { pathname } = useRouter();

  const { control } = useForm({
    defaultValues: {
      search: ''
    }
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearch = (event: any) => {
    setPage(1);
    setSearch(event.target.value);
    filterActivity(search);
  };

  const paginationActivity = (data: ActivityItemType[], page: number) => {
    return data?.slice(page * 4 - 4, page * 4);
  };

  const dateFormat = (date: string) => {
    date.split('-');
    const year = date[2] + date[3];
    const month = date[5] + date[6];
    const day = date[8] + date[9];
    return `${day}/${month}/${year}`;
  };

  const filterActivity = (search: string): ActivityItemType[] => {
    if (search === '') {
      setData(activityData);
      return data;
    }
    setData(
      activityData?.filter((element: ActivityItemType) =>
        element.description.toLowerCase().includes(search)
      )
    );
    return data;
  };

  const filterDateActivity = (type: string): ActivityItemType[] => {
    let hours = 0;
    switch (type) {
      case 'hoje':
        hours = -24;
        break;
      case 'ontem':
        hours = -24 * 2;
        break;
      case 'semana':
        hours = -24 * 7;
        break;
      case '15 dias':
        hours = -24 * 15;
        break;
      case 'mes':
        hours = -24 * 30;
        break;
      case 'ano':
        hours = -24 * 265;
        break;
      case 'reset':
        setData(activityData);
        return data;
    }
    setData(
      activityData?.filter(function (element: ActivityItemType) {
        const lastDay = new Date(new Date().setHours(hours));
        return lastDay < new Date(element.dated);
      })
    );
    return data;
  };

  const FilterByDate = (type: string) => {
    filterDateActivity(type);
  };

  return (
    <>
      <s.SearchBarLabel activePath={pathname === '/inicio'}>
        <Input
          icon={() => <SearchImg />}
          type="text"
          id="search"
          name="search"
          placeholder="Buscar em sua atividade"
          control={control}
          onChange={handleSearch}
        />
      </s.SearchBarLabel>
      <s.SearchContainer activePath={pathname === '/atividade'}>
        <s.SearchBarLabelActivity>
          <Input
            icon={() => <SearchImg />}
            type="text"
            id="search"
            name="search"
            placeholder="Buscar em sua atividade"
            control={control}
            onChange={handleSearch}
          />
        </s.SearchBarLabelActivity>
        <CustomizedMenus FilterByDate={FilterByDate} />
      </s.SearchContainer>
      <s.ActivityContainer>
        <s.ActivityTitle>Suas atividades</s.ActivityTitle>
        <>
          {data &&
            paginationActivity(data, page)?.map((item: ActivityItemType) => (
              <s.ActivityCards key={item.id}>
                <s.ActivityCardsDescriptionAndImg>
                  <Link
                    href={`/detalheAtividade/${item.account_id}/${item.id}`}
                  >
                    {item.type === 'Deposit' ? (
                      <GreenCircleImg />
                    ) : (
                      <RedCircleImg />
                    )}
                  </Link>
                  <s.ActivityCardsDescription>
                    {item.description}
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>
                    {item.type === 'Deposit'
                      ? `+ R$ ${item.amount}`
                      : `- R$ ${Math.abs(item.amount)}`}
                  </s.ActivityCardsCash>
                  <s.ActivityCardsDate>
                    {dateFormat(item.dated)}
                  </s.ActivityCardsDate>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
            ))}
        </>
        <s.MoreActivities activePath={pathname === '/inicio'}>
          <s.MoreActivitiesTitle>Ver toda sua atividade</s.MoreActivitiesTitle>
          <Link href={'/atividade'}>
            <RightArrowImg />
          </Link>
        </s.MoreActivities>
        <s.MoreActivities activePath={pathname === '/atividade'}>
          <s.PaginationContainer>
            <Pagination
              count={Math.ceil(data?.length / 4)}
              shape="rounded"
              size="large"
              onChange={handleChange}
              sx={{
                '.MuiPagination-ul': {
                  justifyContent: 'center',
                  height: '35px'
                }
              }}
            />
          </s.PaginationContainer>
        </s.MoreActivities>
      </s.ActivityContainer>
    </>
  );
};

export default ActivityCards;
