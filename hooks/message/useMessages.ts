import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Message } from '@/types';

const getMessages = async (): Promise<Message[]> => {
  //TODO get messages from DB by chat_id
  return [];
};

const postMessage = async (message: Message) => {
  //TODO post message to DB
  return message;
};
export const useMessages = () => {
  const queryClient = useQueryClient();
  const { data: messages } = useQuery({
    queryKey: ['messages'],
    queryFn: getMessages,
    refetchOnWindowFocus: false,
  });

  const { mutateAsync: sendMessage } = useMutation({
    mutationFn: postMessage,
    onMutate: async (newMessage) => {
      await queryClient.cancelQueries({ queryKey: ['messages'] });
      const previousMessages = queryClient.getQueryData<Message[]>([
        'messages',
      ]);
      queryClient.setQueriesData<Message[]>({ queryKey: ['messages'] }, [
        ...(previousMessages ?? []),
        newMessage,
      ]);
    },
  });

  return { messages, onSendMessage: sendMessage };
};
