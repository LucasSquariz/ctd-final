import { api } from 'api/client';
import { useAuthState } from 'contexts/auth/AuthContext';
import { parseCookies } from 'nookies';
import { useQuery } from 'react-query';

export const QUERY_KEY_GET_CARDS = 'QUERY_KEY_GET_CARDS';

export async function getCardsList(userId: number) {
  try {
    if (!userId) {
      return;
    }    
    const { data } = await api.get(`/accounts/${userId}/cards`);
    return data ;
  } catch (err:any) {
    console.error(err);
  }  
}

export function useGetCards(userId: any) {
  return useQuery(QUERY_KEY_GET_CARDS, () => getCardsList(userId));
}
