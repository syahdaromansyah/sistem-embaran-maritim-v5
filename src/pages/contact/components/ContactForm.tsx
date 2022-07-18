import {
  faUser,
  faEnvelope,
  faBuildingColumns,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import InputBox from './InputBox';
import TextBox from './TextBox';

export default function ContactForm() {
  return (
    <form>
      <div className="gap-4 md:mb-4 md:flex md:items-center">
        {/* Username Contact Input */}
        <div className="mb-4 md:mb-0 md:flex-1">
          <InputBox
            type="text"
            htmlFor="username"
            iconPlaceholder={faUser}
            placeholder="Username"
            cbInputHandler={() => {}}
          />
        </div>

        {/* Email Contact Input */}
        <div className="mb-4 md:mb-0 md:flex-1">
          <InputBox
            type="email"
            htmlFor="usermail"
            iconPlaceholder={faEnvelope}
            placeholder="Email"
            cbInputHandler={() => {}}
          />
        </div>
      </div>

      {/* Agency Contact Input */}
      <div className="mb-4">
        <div className="mb-4">
          <InputBox
            type="text"
            htmlFor="useragency"
            iconPlaceholder={faBuildingColumns}
            placeholder="Instansi"
            cbInputHandler={() => {}}
          />
        </div>
      </div>

      {/* Feedback Contact Input */}
      <div className="mb-4">
        <TextBox
          htmlFor="userfeedback"
          iconPlaceholder={faMessage}
          placeholder="Masukan Anda"
          cbInputHandler={() => {}}
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
