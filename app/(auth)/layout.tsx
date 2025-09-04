export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-svh place-content-center">{children}</main>
  );
}
