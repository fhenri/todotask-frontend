// src/components/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/authService';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const { accessToken } = await signIn(login, password);
      localStorage.setItem('accessToken', accessToken);

      // Fetch user info
      //const user = await getUser(accessToken);

      navigate('/user');
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };

  return (
<div className="p-10 md:mt-12">
    <h1 className="mb-8 font-extrabold text-4xl">Login</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleLogin}>
            <div>
                <label className="block font-semibold" htmlFor="login">Login</label>
                <input className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                       id="name" type="login" name="login" required autoFocus
                       onChange={(e) => setLogin(e.target.value)}/>
            </div>

            <div className="mt-4">
                <label className="block font-semibold" htmlFor="password">Password</label>
                <input className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                       id="password" type="password" name="password" required autoComplete="new-password"
                       onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="flex items-center justify-between mt-8">
                <button type="submit"
                        className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Login</button>
            </div>
        </form>

        <aside className="">
            <div className="bg-gray-100 p-8 rounded">
                <h2 className="font-bold text-2xl">Instructions</h2>
                <ul className="list-disc mt-4 list-inside">
                    <li>This is not an open app.</li>
                    <li>You can use the <span className="font-bold">tododemo / tododemo</span> account to test the app</li>
                    <li>All data from the tododemo account are removed on daily basis, demo account also cannot send mails.</li>
                </ul>
            </div>
        </aside>

    </div>
</div>
  );
};

export default Login;
