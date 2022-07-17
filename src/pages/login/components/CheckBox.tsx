import { useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CheckBoxProps {
  htmlFor: string;
  labelCheckbox: string;
  cbCheckboxHandler: (state: boolean) => void;
}

export default function CheckBox({
  htmlFor,
  labelCheckbox,
  cbCheckboxHandler,
}: CheckBoxProps) {
  const [checkboxState, setCheckboxState] = useState(false);

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentCheckboxStatus = e.target.checked;
    setCheckboxState(currentCheckboxStatus);
    cbCheckboxHandler(currentCheckboxStatus);
  };

  return (
    <label htmlFor={htmlFor} className="inline-block cursor-pointer">
      <div className="flex items-center justify-center gap-2">
        <div className="relative max-w-max">
          <input
            type="checkbox"
            id={htmlFor}
            className="peer absolute top-0 left-0 h-full w-full opacity-0"
            checked={checkboxState}
            onChange={checkboxHandler}
          />

          <div className="h-6 w-6 rounded-md bg-slate-200 shadow shadow-slate-300 transition duration-300 peer-focus:outline-none peer-focus:ring peer-focus:ring-sky-300 peer-focus:ring-offset-2 peer-focus:ring-offset-slate-100" />

          <div className="absolute top-0 left-0 flex h-full w-full scale-95 items-center justify-center text-slate-600 opacity-0 transition duration-300 peer-checked:scale-100 peer-checked:opacity-100">
            <FontAwesomeIcon
              icon={faCheck}
              role="presentation"
              aria-hidden="true"
            />
          </div>
        </div>

        {labelCheckbox && <p className="select-none">{labelCheckbox}</p>}
      </div>
    </label>
  );
}
