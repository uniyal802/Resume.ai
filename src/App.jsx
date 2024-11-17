import { useState } from 'react';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Header from './components/custom/Header';
import { Toaster } from './components/ui/sonner';

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // Placeholder while user info is loading
  }

  if (!isSignedIn) {
    return <Navigate to={'/auth/sign-in'} />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
