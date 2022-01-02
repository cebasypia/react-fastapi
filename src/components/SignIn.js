import { getAuth, signInWithEmailAndPassword,setPersistence, inMemoryPersistence } from 'firebase/auth'
import { useState } from 'react';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    setPersistence(auth, inMemoryPersistence)
    signInWithEmailAndPassword (auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) =>{
        console.error(error.message);
        console.error(error);
      })
  };
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;