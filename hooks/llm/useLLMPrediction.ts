import { useMutation } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Message } from '@/types';

const getLLMPredictionFetcher = async (query: string): Promise<Message> => {
  const response = await axios(`/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      query,
    },
  });
  return {
    id: uuidv4(),
    text: response.data,
    author: 'assistant',
  };
};

export const useLLMPrediction = () => {
  const { mutateAsync: getLLMPredictionMutation, isPending } = useMutation({
    mutationFn: getLLMPredictionFetcher,
  });
  console.log(isPending);
  return { getLLMPrediction: getLLMPredictionMutation, isBotTyping: isPending };
};
