import { MessageAuthor } from '@/types';

type Props = {
  message: string;
  author: MessageAuthor;
};

export const MessageItem = ({ message, author }: Props) => {
  return (
    <div className={'p-2 max-w-3xl mx-auto'}>
      <div className={'text-sm font-bold capitalize'}>{author}</div>
      {message}
    </div>
  );
};
