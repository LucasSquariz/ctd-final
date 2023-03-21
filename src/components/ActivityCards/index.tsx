import * as s from './styles';
import RedCircleImg from '../../assets/redCircleImg';
import GreenCircleImg from '../../assets/greenCircleImg';
import { ItemType } from './types';
import { useState } from 'react';
import RightArrowImg from 'assets/rightArrowImg';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';

const ActivityCards = ({ activityData }: any) => {
  const [page, setPage] = useState(1);
  const { pathname } = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginationActivity = (page: number) => {
    return activityData?.slice(page * 4 - 4, page * 4);
  };

  const dateFormat = (date: string) => {
    date.split('-');
    const year = date[2] + date[3];
    const month = date[5] + date[6];
    const day = date[8] + date[9];
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      {paginationActivity(page)?.map((item: ItemType) => (
        <s.ActivityCards key={item.id}>
          <s.ActivityCardsDescriptionAndImg>
            {item.type === 'Deposit' ? <GreenCircleImg /> : <RedCircleImg />}
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
            <s.ActivityCardsDate>{dateFormat(item.dated)}</s.ActivityCardsDate>
          </s.ActivityCardsCashAndDate>
        </s.ActivityCards>
      ))}
      <s.MoreActivities activePath={pathname === '/inicio'}>
        <s.MoreActivitiesTitle>Ver toda sua atividade</s.MoreActivitiesTitle>
        <div onClick={() => setPage(page + 1)}>
          <RightArrowImg />
        </div>
      </s.MoreActivities>
      <s.MoreActivities activePath={pathname === '/atividade'}>
        <s.PaginationContainer>
          <Pagination
            count={Math.ceil(activityData?.length / 4)}
            shape="rounded"
            size="large"
            onChange={handleChange}
            sx={{
              '.MuiPagination-ul': {
                justifyContent: 'center',
                width: '950px',
                height: '35px'
              }
            }}
          />
        </s.PaginationContainer>
      </s.MoreActivities>
    </>
  );
};

export default ActivityCards;
