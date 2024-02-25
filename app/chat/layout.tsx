export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={'h-screen w-ful'}>{children}</main>;
}
