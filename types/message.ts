import { ObjectValues } from '@/types/utils';

const MessageAuthorValues = {
  user: 'user',
  bot: 'assistant',
} as const;

export type MessageAuthor = ObjectValues<typeof MessageAuthorValues>;

export type Message = {
  id: string;
  text: string;
  author: MessageAuthor;
  status?: string;
  error?: string;
};
