import React from 'react';
import { User } from 'firebase/auth';
import { SignIn } from '../services/firebase';

const AuthContext = React.createContext<
  { user: User | null; login: () => Promise<void> } | undefined
>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState<User | null>(null);

  const login = async () => {
    const signedInUser = await SignIn(email, password);

    if (!signedInUser) {
      // TODO: Handle failed login
    }

    setUser(signedInUser);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { user, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
