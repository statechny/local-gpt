'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useChats } from '@/hooks';

export const Sidebar = () => {
  const { chats } = useChats();
  return (
    <div className={'w-80 border-r p-4 h-screen'}>
      <ScrollArea className={'h-full'}>
        {chats?.map((chat) => (
          <Link
            href={{ pathname: `/chat` }}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'default' }),
              'justify-start w-full',
            )}
            key={chat.id}
          >
            {chat.name}
          </Link>
        ))}
      </ScrollArea>
    </div>
  );
};
