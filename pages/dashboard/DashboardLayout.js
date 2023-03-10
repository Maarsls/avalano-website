import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { auth } from "../../utils/firebase";

export default function DashboardLayout({ children }) {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  
  if (loading) return <h1>Loading</h1>;
  if (!user) route.push("/auth/login");
  if (user) return <div className="h-screen pt-24 p-5 bg-primary-background-color">{children}</div>;
}
