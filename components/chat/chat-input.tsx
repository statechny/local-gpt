'use client';
import { Textarea } from '@/components/ui/textarea';
import { useMessages } from '@/hooks';
import { Message } from '@/types';
import { uuid } from 'uuidv4';
import { useEffect } from 'react';

export const ChatInput = () => {
  const { onSendMessage } = useMessages();
  const handleSendMessage = (value: string) => {
    const message: Message = {
      id: uuid(),
      author: 'user',
      text: value,
    };
    onSendMessage(message);
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
