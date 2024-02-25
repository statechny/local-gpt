'use client';
import React, { useEffect, useRef } from 'react';
import { MessageItem } from '@/components/message/message-item';
import { useMessages } from '@/hooks';

export const MessagesList = () => {
  const chatElement = useRef<HTMLDivElement>(null);
  const { messages } = useMessages();

  useEffect(() => {
    const current = chatElement.current;
    current?.scroll({ top: current.scrollHeight });
  }, [messages?.length]);

  return (
    <div className={'flex-1 overflow-auto'} ref={chatElement}>
      {messages?.map(({ id, text, author }) => (
        <MessageItem key={id} message={text} author={author} />
      ))}
    </div>
  );
};
