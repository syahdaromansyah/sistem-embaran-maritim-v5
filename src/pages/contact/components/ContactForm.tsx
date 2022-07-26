import { useState } from 'react';
import {
  faUser,
  faEnvelope,
  faBuildingColumns,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import SemarInputBox from '../../../components/semar-page-input/InputBox';
import SemarTextBox from '../../../components/semar-page-input/TextBox';

export default function ContactForm() {
  const [uName, setUName] = useState('');
  const [uEmail, setUEmail] = useState('');
  const [uAgency, setUAgency] = useState('');
  const [uFeedback, setUFeedback] = useState('');

  const uInputHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const elementId = e.target.id;
    if (elementId === 'username') setUName(e.target.value);
    if (elementId === 'usermail') setUEmail(e.target.value);
    if (elementId === 'useragency') setUAgency(e.target.value);
    if (elementId === 'userfeedback') setUFeedback(e.target.value);
  };

  return (
    <form>
      <div className="gap-4 md:mb-4 md:flex md:items-center">
        {/* Username Contact Input */}
        <div className="mb-4 md:mb-0 md:flex-1">
          <SemarInputBox
            type="text"
            htmlFor="username"
            iconPlaceholder={faUser}
            placeholder="Username"
            value={uName}
            inputBoxHandler={uInputHandler}
          />
        </div>

        {/* Email Contact Input */}
        <div className="mb-4 md:mb-0 md:flex-1">
          <SemarInputBox
            type="email"
            htmlFor="usermail"
            iconPlaceholder={faEnvelope}
            placeholder="Email"
            value={uEmail}
            inputBoxHandler={uInputHandler}
          />
        </div>
      </div>

      {/* Agency Contact Input */}
      <div className="mb-4">
        <div className="mb-4">
          <SemarInputBox
            type="text"
            htmlFor="useragency"
            iconPlaceholder={faBuildingColumns}
            placeholder="Instansi"
            value={uAgency}
            inputBoxHandler={uInputHandler}
          />
        </div>
      </div>

      {/* Feedback Contact Input */}
      <div className="mb-4">
        <SemarTextBox
          htmlFor="userfeedback"
          iconPlaceholder={faMessage}
          placeholder="Masukan Anda"
          value={uFeedback}
          textBoxHandler={uInputHandler}
        />
      </div>

      <div className="text-right">
        <button
          type="button"
          className="w-full max-w-max rounded-full bg-sky-600 px-12 py-2 text-xl font-semibold text-slate-100 transition duration-300 hover:bg-sky-800 focus:bg-sky-800 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
        >
          Kirim
        </button>
      </div>
    </form>
  );
}
