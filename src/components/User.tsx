// src/components/User.tsx
import React, { useState, useEffect } from 'react';
import { getUser } from '../services/authService';

// Define a type for User
type UserType = {
  username: string;
  name: string;
  email: string;
  // Add other properties as needed
};

const User: React.FC = () => {
  // Declare the type of the user state variable
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const fetchedUser = await getUser(token);
        setUser(fetchedUser);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;