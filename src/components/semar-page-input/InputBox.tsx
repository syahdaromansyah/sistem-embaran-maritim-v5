import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InputBoxProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  htmlFor: string;
  iconPlaceholder: IconProp;
  placeholder: string;
  value: string;
  inputBoxHandler: (inputValue: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBox({
  type,
  htmlFor,
  iconPlaceholder,
  placeholder,
  value = '',
  inputBoxHandler = () => {},
}: InputBoxProps) {
  return (
    <label htmlFor={htmlFor} className="relative inline-block w-full">
      <input
        type={type}
        id={htmlFor}
        placeholder={placeholder}
        className="peer w-full rounded-full bg-slate-200 py-2 pl-10 shadow shadow-slate-300 transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-100"
        onChange={inputBoxHandler}
        value={value}
      />

      <div className="absolute top-0 left-0 flex h-full items-center justify-center pl-4 text-lg text-slate-400">
        <FontAwesomeIcon
          icon={iconPlaceholder}
          role="presentation"
          aria-hidden="true"
        />
      </div>
    </label>
  );
}
