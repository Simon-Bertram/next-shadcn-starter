import { useSession, signIn, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <>
        <p>You need to be authenticated to view this page.</p>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <>
      <h1>Welcome, {session.user.name}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Dashboard;
