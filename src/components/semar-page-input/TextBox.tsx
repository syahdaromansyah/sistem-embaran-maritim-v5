import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TextBoxProps {
  htmlFor: string;
  iconPlaceholder: IconProp;
  placeholder: string;
  value: string;
  textBoxHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextBox({
  htmlFor,
  iconPlaceholder,
  placeholder,
  value = '',
  textBoxHandler = () => {},
}: TextBoxProps) {
  return (
    <label htmlFor={htmlFor} className="relative inline-block w-full">
      <textarea
        name={htmlFor}
        id={htmlFor}
        className="min-h-[200px] w-full resize-y rounded-2xl bg-slate-200 py-3 pr-4 pl-10 shadow shadow-slate-300 transition duration-300 placeholder:text-slate-400 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-100 lg:min-h-[300px]"
        placeholder={placeholder}
        onChange={textBoxHandler}
        value={value}
      />

      <div className="absolute top-3 left-0 pl-4 text-lg text-slate-400">
        <FontAwesomeIcon
          icon={iconPlaceholder}
          role="presentation"
          aria-hidden="true"
        />
      </div>
    </label>
  );
}
