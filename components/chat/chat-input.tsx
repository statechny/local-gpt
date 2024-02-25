'use client';
import { v4 as uuidv4 } from 'uuid';
import { Textarea } from '@/components/ui/textarea';
import { useMessages, useLLMPrediction } from '@/hooks';
import { Message } from '@/types';

export const ChatInput = () => {
  const { onSendMessage } = useMessages();
  const { getLLMPrediction } = useLLMPrediction();
  const handleSendMessage = async (value: string) => {
    const message: Message = {
      id: uuidv4(),
      author: 'user',
      text: value,
    };
    await onSendMessage(message);
    const prediction = await getLLMPrediction(value);
    return onSendMessage(prediction);
  };

  return (
    <Textarea
      className={'mb-2 resize-none max-w-3xl mx-auto'}
      placeholder={'Type a message...'}
      spellCheck={false}
      onKeyUp={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage(e.currentTarget.value);
          e.currentTarget.value = '';
        }
      }}
    />
  );
};
