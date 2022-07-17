import { useState } from 'react';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import InputBox from './InputBox';
import CheckBox from './CheckBox';

export default function LoginForm() {
  const [, setUsername] = useState('');
  const [, setPassword] = useState('');
  const [, setRememberMe] = useState(false);

  const unameInputHandler = (unameValue: string) => {
    setUsername(unameValue);
  };

  const pwdInputHandler = (pwdValue: string) => {
    setPassword(pwdValue);
  };

  const rbmeInputHandler = (rbmeValue: boolean) => {
    setRememberMe(rbmeValue);
  };

  return (
    <form>
      <div className="mb-4">
        <InputBox
          type="email"
          htmlFor="username"
          iconPlaceholder={faUser}
          placeholder="Email"
          cbInputHandler={unameInputHandler}
        />
      </div>

      <div className="mb-6">
        <InputBox
          type="password"
          htmlFor="password"
          iconPlaceholder={faLock}
          placeholder="Password"
          cbInputHandler={pwdInputHandler}
        />
      </div>

      <div className="mb-6 md:flex md:items-center md:justify-between">
        <div className="mb-2 md:mb-0">
          <CheckBox
            htmlFor="rememberme"
            labelCheckbox="Ingat saya"
            cbCheckboxHandler={rbmeInputHandler}
          />
        </div>

        <div>
          <p>
            Belum memiliki akun?{' '}
            <a
              href="/"
              className="inline-block underline transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
            >
              Buat akun.
            </a>
          </p>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="w-full rounded-full bg-sky-600 py-2 text-xl text-slate-100 shadow shadow-sky-600 transition duration-300 hover:bg-sky-700 focus:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
        >
          Masuk
        </button>
      </div>
    </form>
  );
}
