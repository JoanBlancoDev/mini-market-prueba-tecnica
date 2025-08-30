interface Props {
  children: React.ReactNode;
}
export default function ProductsLayout({ children }: Props) {
  return (
    <main className="w-full max-w-[1250px] flex flex-col px-8 m-auto min-h-svh">
      {children}
    </main>
  );
}
