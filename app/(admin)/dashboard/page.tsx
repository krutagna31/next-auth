import { auth } from "@/auth";
import { Header } from "@/components/sections";

export default async function DashboardPage() {
  const session = await auth();
  console.log(session);

  return <Header />
}
