import React, { FC, MouseEventHandler, useState, useEffect, useRef } from 'react';

import CheckBox from './CheckBox';

import searchFor from '../../utils/searchObjectValues';

interface ArrowDownProps {
  className?: string;
  rotate?: string;
  disabled?: boolean;
}

const ArrowDown: FC<ArrowDownProps> = ({ className, rotate, disabled }) => {
  return (
    <div className={className + ' w-6'}>
      <svg
        className="mr-4 rotate-90"
        transform={rotate}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10L12 15L17 10H7Z"
          fill={disabled ? '#BDBDBD' : '#212121'}
        />
      </svg>
    </div>
  );
};

interface ClearIndicatorProps {
  className?: string;
  onClick: MouseEventHandler;
}

const ClearIndicator: FC<ClearIndicatorProps> = ({ className, onClick }) => {
  return (
    <div className={className + ' w-6'} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"
          fill="#212121"
        />
      </svg>
    </div>
  );
};

interface CheckedIndicatorProps {
  className?: string;
}

const CheckedIndicator: FC<CheckedIndicatorProps> = ({ className }) => {
  return (
    <div className={className + ' w-6'}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 6.99997L19.5902 5.58997L9.00016 16.17Z"
          fill="#212121"
        />
      </svg>
    </div>
  );
};

interface CloseXProps {
  className?: string;
  onClick?: MouseEventHandler;
}

const CloseX: FC<CloseXProps> = ({ className, onClick }) => {
  return (
    <div className={className + ' w-4 cursor-pointer'} onClick={onClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2005 3.80665C11.9405 3.54665 11.5205 3.54665 11.2605 3.80665L8.00047 7.05998L4.74047 3.79998C4.48047 3.53998 4.06047 3.53998 3.80047 3.79998C3.54047 4.05998 3.54047 4.47998 3.80047 4.73998L7.06047 7.99998L3.80047 11.26C3.54047 11.52 3.54047 11.94 3.80047 12.2C4.06047 12.46 4.48047 12.46 4.74047 12.2L8.00047 8.93998L11.2605 12.2C11.5205 12.46 11.9405 12.46 12.2005 12.2C12.4605 11.94 12.4605 11.52 12.2005 11.26L8.94047 7.99998L12.2005 4.73998C12.4538 4.48665 12.4538 4.05998 12.2005 3.80665Z"
          fill="#212121"
        />
      </svg>
    </div>
  );
};

{
  /*<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2005 3.80665C11.9405 3.54665 11.5205 3.54665 11.2605 3.80665L8.00047 7.05998L4.74047 3.79998C4.48047 3.53998 4.06047 3.53998 3.80047 3.79998C3.54047 4.05998 3.54047 4.47998 3.80047 4.73998L7.06047 7.99998L3.80047 11.26C3.54047 11.52 3.54047 11.94 3.80047 12.2C4.06047 12.46 4.48047 12.46 4.74047 12.2L8.00047 8.93998L11.2605 12.2C11.5205 12.46 11.9405 12.46 12.2005 12.2C12.4605 11.94 12.4605 11.52 12.2005 11.26L8.94047 7.99998L12.2005 4.73998C12.4538 4.48665 12.4538 4.05998 12.2005 3.80665Z" fill="#212121"/>
</svg>*/
}

// types
type Option = {
  value: string;
  label: string;
};

{
  /*type Selecteds = {

}*/
}


function useOutsideHandleDisableActive(ref: any, setActive: Function) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

interface SelectComponentProps {
  size?: 'comfortable' | 'compact';
  style?: any;
  className?: any;
  full?: boolean;
  disabled?: boolean;
  id?: string;
  options: Array<Object>;
  value: any;
  setValue: Function;
  isMulti?: boolean;
}

export const SelectComponent: FC<SelectComponentProps> = ({
  //id,
  //children,
  //size,
  //style,
  //className,
  options,
  value,
  setValue,
  isMulti,
  disabled,
}) => {
  //const classSizes =
  //size === 'compact' ? 'py-1.5 px-3 text-sm' : 'py-3 px-6 text-base';

  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(Object);
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState('');
  const [optionsQuery, setOptionsQuery] = useState(new Array());
  const [selecteds, setSelecteds] = useState<Set<Option>>(new Set());


  const wrapperRef = useRef(null);
  useOutsideHandleDisableActive(wrapperRef, setActive);

  useEffect(() => {
    setOptionsQuery(options);
    console.log(disabled);
  }, []);

  useEffect(() => {
    setOptionsQuery(searchFor(options, query));
  }, [query]);

  useEffect(() => {
    setOptionsQuery(options);

    setValue(selected);
  }, [selected]);

  useEffect(() => {
    setValue(selecteds);
    console.log('value: ' + value);
  }, [selecteds]);

  useEffect(() => {
    console.log('value: ' + value);
  }, [value]);

  return (
    <div
      ref={wrapperRef}
      className={
        disabled
          ? 'relative inline-block cursor-not-allowed bg-gray-100'
          : 'relative inline-block cursor-pointer'
      }
      onMouseEnter={() => {
        setFocus(true);
      }}
      onMouseLeave={() => {
        setFocus(false);
      }}
    >
      <button
        onClick={() => {
          disabled ? '' : setActive(!active);
        }}
        className={
          disabled
            ? 'flex flex-row justify-between h-12 px-4 py-3 border rounded w-72 border-gray cursor-not-allowed'
            : 'flex flex-row justify-between h-12 px-4 py-3 border rounded w-72 border-gray'
        }
      >
        <div
          className="font-normal"
          style={{
            color: '#212121',
          }}
        >
          {/*{selected !== '' ? selected : 'Select'}*/}

          {!isMulti ? (
            <input
              type="text"
              value={query}
              onChange={({ target }) => setQuery(target.value)}
              className="absolute h-10 outline-none w-44 top-1 focus-within:no-underline"
              style={{
                background: disabled ? '#F5F5F5' : '',
                cursor: disabled ? 'not-allowed' : 'auto',
              }}
              placeholder="Select..."
              disabled={disabled}
            />
          ) : (
            ''
          )}

          {isMulti && selecteds.size >= 1 ? (
            (() => {
              let selects = Array.from(selecteds);
              console.log(value);

              return (
                <div className="absolute flex flex-row items-center h-10 top-1">
                  {selects.map((select) => {
                    return (
                      <div
                        className="flex flex-row justify-between items-center text-left h-6 px-2 py-0.5 text-sm bg-gray-100 text-normal hover:bg-gray-50 mr-1"
                        style={{
                          borderRadius: '500px',
                          letterSpacing: '0.01em',
                        }}
                        onClick={() => {
                          selecteds.delete(select);
                          setSelecteds(selecteds);
                          //setActive(!active);
                          setValue(selecteds);
                        }}
                      >
                        {select.label}
                        <CloseX />
                      </div>
                    );
                  })}
                </div>
              );
            })()
          ) : !isMulti ? (
            ''
          ) : (
            <div className={disabled ? 'text-gray-400' : ''}>Select...</div>
          )}
        </div>
        <div className="flex flex-row">
          {focus && selected !== '' && !isMulti && !disabled ? (
            <ClearIndicator
              onClick={() => {
                setSelected('');
                setValue('');
                setQuery('');
              }}
              className="mr-4"
            />
          ) : null}
          <ArrowDown
            className=""
            rotate={active ? 'rotate(180)' : ''}
            disabled={disabled}
          />
        </div>
      </button>

      {active && !isMulti && !disabled ? (
        <div
          className="absolute right-0 py-4 bg-white rounded w-72 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{
            boxShadow:
              '0px 0px 2px rgba(0, 0, 0, 0.24), 0px 2px 4px rgba(0, 0, 0, 0.16)',
          }}
        >
          <div className="py-1">
            {optionsQuery.map((option: Option) => {
              return (
                <button
                  onClick={() => {
                    setSelected(option);
                    setActive(!active);
                    setValue(option);
                    setQuery(option.label);
                  }}
                  className="flex flex-row justify-between block w-full px-4 py-2 text-base text-left text-gray-700 hover:bg-gray-50"
                >
                  {option.label}
                  {selected.value === option.value ? <CheckedIndicator /> : ''}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {active && isMulti && !disabled ? (
        <div
          className="absolute right-0 py-4 bg-white rounded w-72 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{
            boxShadow:
              '0px 0px 2px rgba(0, 0, 0, 0.24), 0px 2px 4px rgba(0, 0, 0, 0.16)',
          }}
        >
          <div className="py-1">
            {optionsQuery.map((option: Option) => {
              return (
                <button
                  onClick={() => {
                    if (selecteds.has(option)) {
                      selecteds.delete(option);
                      setSelecteds(selecteds);
                      setValue(selecteds);
                    } else {
                      selecteds.add(option);
                      setSelecteds(selecteds);
                      setValue(selecteds);
                    }
                  }}
                  className="flex flex-row items-center block w-full px-4 py-2 text-base text-left text-gray-700 hover:bg-gray-50"
                >
                  <CheckBox checked={selecteds.has(option)} />
                  <p className="ml-2 text-sm text-black">{option.label}</p>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
