import { Textarea } from '@/components/ui/textarea';

export const ChatInput = () => {
  return (
    <Textarea
      className={'mb-2 resize-none max-w-3xl mx-auto'}
      placeholder={'Type a message...'}
      spellCheck={false}
    />
  );
};
