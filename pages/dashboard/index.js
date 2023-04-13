import React from "react";
import DashboardLayout from "./DashboardLayout";

import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function index() {
  const [user, loading] = useAuthState(auth);

  
  return (
    <DashboardLayout>
      <div className="">
        <h1>Welcome to your dashboard {user?.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    </DashboardLayout>
  );
}
