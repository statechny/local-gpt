import { Sidebar } from '@/components/sidebar/sidebar';

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={'flex'}>
      <Sidebar />
      <main className={'h-screen w-full'}>{children}</main>
    </div>
  );
}
