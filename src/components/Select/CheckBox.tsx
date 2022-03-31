import React, { FC } from 'react';

interface CheckBoxProps {
  className?: string;
  checked: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({ className, checked }) => {
  return (
    <div className={className + ' w-6'}>
      {checked ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.71 16.29C10.32 16.68 9.69 16.68 9.3 16.29L5.71 12.7C5.32 12.31 5.32 11.68 5.71 11.29C6.1 10.9 6.73 10.9 7.12 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.71 16.29Z"
            fill="#5100B9"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 3.5H17C18.933 3.5 20.5 5.067 20.5 7V17C20.5 18.933 18.933 20.5 17 20.5H7C5.067 20.5 3.5 18.933 3.5 17V7C3.5 5.067 5.067 3.5 7 3.5Z"
            stroke="#212121"
          />
        </svg>
      )}
    </div>
  );
};

export default CheckBox;
