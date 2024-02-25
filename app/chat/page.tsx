import { ChatInput } from '@/components/chat';
import { MessagesList } from '@/components/message';

export default function Chat() {
  return (
    <div className={'h-full flex-1 flex flex-col'}>
      <MessagesList />
      <ChatInput />
    </div>
  );
}
