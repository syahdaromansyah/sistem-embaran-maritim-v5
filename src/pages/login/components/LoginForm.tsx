import { useState } from 'react';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import SemarInputBox from '../../../components/semar-page-input/InputBox';
import SemarCheckbox from '../../../components/semar-page-input/CheckBox';

export default function LoginForm() {
  const [uName, setUName] = useState('');
  const [uPwd, setPwd] = useState('');
  const [uRememberbMe, setRememberMe] = useState(false);

  const uNameInHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUName(e.target.value);
  const uPwdInHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);
  const uRbMeInHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRememberMe(e.target.checked);

  return (
    <form>
      <div className="mb-4">
        <SemarInputBox
          type="email"
          htmlFor="username"
          iconPlaceholder={faUser}
          placeholder="Email"
          value={uName}
          inputBoxHandler={uNameInHandler}
        />
      </div>

      <div className="mb-6">
        <SemarInputBox
          type="password"
          htmlFor="password"
          iconPlaceholder={faLock}
          placeholder="Password"
          value={uPwd}
          inputBoxHandler={uPwdInHandler}
        />
      </div>

      <div className="mb-6 md:flex md:items-center md:justify-between">
        <div className="mb-2 md:mb-0">
          <SemarCheckbox
            htmlFor="rememberme"
            checkboxLabel="Ingat saya"
            checkboxState={uRememberbMe}
            checkBoxHandler={uRbMeInHandler}
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
        <a
          href="/pages/user/dashboardpeta/"
          type="button"
          className="inline-block w-full rounded-full bg-sky-600 py-2 text-center text-xl text-slate-100 shadow shadow-sky-600 transition duration-300 hover:bg-sky-700 focus:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
        >
          Masuk
        </a>
      </div>
    </form>
  );
}
