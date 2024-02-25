import { Message } from '@/types';
import { MessageItem } from '@/components/message/message-item';

const messagesMock: Message[] = [
  {
    id: '1',
    text: 'Hello! How can I assist you today?',
    author: 'assistant',
  },
  {
    id: '2',
    text: "Hey, I'm having trouble with my account.",
    author: 'user',
  },
  {
    id: '3',
    text: 'What seems to be the problem?',
    author: 'assistant',
  },
  {
    id: '4',
    text: "I can't log in.",
    author: 'user',
  },
  {
    id: '5',
    text: "I'm sorry to hear that you're experiencing trouble logging in. Let's see if we can resolve this. Could you please tell me if you're receiving any specific error messages when you attempt to log in?",
    author: 'assistant',
  },
  {
    id: '5',
    text: 'Yes, it keeps saying "Invalid username or password." But I\'m sure I\'m entering the correct details!',
    author: 'user',
  },
  {
    id: '6',
    text: 'Hello! How can I assist you today?',
    author: 'assistant',
  },
  {
    id: '7',
    text: "Hey, I'm having trouble with my account.",
    author: 'user',
  },
  {
    id: '8',
    text: 'What seems to be the problem?',
    author: 'assistant',
  },
  {
    id: '9',
    text: "I can't log in.",
    author: 'user',
  },
  {
    id: '10',
    text: "I'm sorry to hear that you're experiencing trouble logging in. Let's see if we can resolve this. Could you please tell me if you're receiving any specific error messages when you attempt to log in?",
    author: 'assistant',
  },
  {
    id: '11',
    text: 'Yes, it keeps saying "Invalid username or password." But I\'m sure I\'m entering the correct details!',
    author: 'user',
  },
];

export const MessagesList = () => {
  return (
    <div className={'flex-1 overflow-auto'}>
      {messagesMock.map(({ id, text, author }) => (
        <MessageItem key={id} message={text} author={author} />
      ))}
    </div>
  );
};
