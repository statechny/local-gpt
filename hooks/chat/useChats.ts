import { useQuery } from '@tanstack/react-query';
import { Chat } from '@/types';

const getChats = async (): Promise<Chat[]> => {
  //TODO get chats from DB
  return Array.from({ length: 10 }, (_, index) => ({
    id: `${index + 1}`,
    name: `Chat ${index + 1}`,
  }));
};
export const useChats = () => {
  const { data: chats } = useQuery({
    queryKey: ['chats'],
    queryFn: getChats,
    refetchOnWindowFocus: false,
  });

  return { chats };
};
