import React, { FC, MouseEventHandler, useState, useEffect } from 'react';

import searchFor from '../../utils/searchObjectValues';

interface ArrowDownProps {
  className?: string;
  rotate?: string;
}

const ArrowDown: FC<ArrowDownProps> = ({ className, rotate }) => {
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
        <path d="M7 10L12 15L17 10H7Z" fill="#212121" />
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


// types
type Option = {
  value: string,
  label: string,
}

interface SelectComponentProps {
  size?: 'comfortable' | 'compact';
  style?: any;
  className?: any;
  full?: boolean;
  disabled?: boolean;
  id?: string;
  options: any;
}

export const SelectComponent: FC<SelectComponentProps> = ({
  //id,
  //children,
  //size,
  //style,
  //className,
  options,
  //hint,
  //full,
  //disabled,
}) => {
  //const classSizes =
  //size === 'compact' ? 'py-1.5 px-3 text-sm' : 'py-3 px-6 text-base';
  //const classTypes = {
  //primary:
  //'bg-purple border border-purple text-white hover:bg-purple-400 active:bg-purple-700',
  //secondary:
  //'bg-white border border-purple text-purple hover:bg-purpleLight active:bg-purpleLight-75',
  //tertiary:
  //'bg-white border border-gray text-black hover:bg-gray-50 active:bg-gray-100',
  //ghost:
  //'bg-transparent  text-purple hover:bg-purpleLight active:bg-purpleLight-75',
  //destructive:
  //'bg-red border border-red text-white hover:bg-red-400 active:bg-red-700',
  //inverse:
  //'text-purple bg-white hover:bg-purpleLight active:bg-purpleLight-75',
  //}

  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(Object);
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState('');
  const [optionsQuery, setOptionsQuery] = useState(new Array());
  //const [optionslabels, setOptionsLabels] = useState(false);

  //useEffect(() => {
  //console.log(options);
  //options.map((object: Object) => {
  //for (let [key, value] of Object.entries(object)) {
  //console.log(`${key}: ${value}`);
  //}
  //});
  //});

  useEffect(() => {
    setOptionsQuery(options);
  }, []);

  useEffect(() => {
    //console.log(optionsQuery);
    //console.log(options)
    //console.log(searchFor(options, 'choco'));
    //let a = searchFor(options, query);
    setOptionsQuery(searchFor(options, query));
  }, [query]);

  useEffect(() => {
    //if(selected == '') {
      //setOptionsQuery(options);
      //console.log("skadjdasl")
      
    //}

      setOptionsQuery(options);
  }, [selected])

  //useEffect(() => {
  //const a =
  //setOptionsLabels(optio)
  //}, []);

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => {
        setFocus(true);
      }}
      onMouseLeave={() => {
        setFocus(false);
      }}
    >
      <button
        onClick={() => {
          setActive(!active);
        }}
        className="flex flex-row justify-between h-12 px-4 py-3 border rounded w-72 border-gray"
      >
        <div className="font-normal text-black">
          {/*{selected !== '' ? selected : 'Select'}*/}
          <input
            type="text"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            className="absolute h-10 outline-none w-44 top-1 focus-within:no-underline"
            placeholder="Select..."
          />
        </div>
        <div className="flex flex-row">
          {focus && selected !== '' ? (
            <ClearIndicator
              onClick={() => {
                setSelected('');
                setQuery('');
              }}
              className="mr-4"
            />
          ) : null}
          <ArrowDown className="" rotate={active ? 'rotate(180)' : ''} />
        </div>
      </button>

      {active ? (
        <div
          className="absolute right-0 bg-white rounded w-72 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{
            boxShadow:
              '0px 0px 2px rgba(0, 0, 0, 0.24), 0px 2px 4px rgba(0, 0, 0, 0.16)',
          }}
        >
          {}
          <div className="py-1">
          {optionsQuery.map((option: Option) => {
                return (
                  <button
                    onClick={() => {
                      setSelected(option);
                      setQuery(option.label);
                    }}
                    className="flex flex-row justify-between block w-full px-4 py-2 text-base text-left text-gray-700 hover:bg-gray-50"
                  >
                    {option.label}
                    {selected.value === option.value ? <CheckedIndicator /> : ''}
                  </button>
                );
          })

          }
            {/*{optionsQuery.map((object: Object) => {
              for (let [key, value] of Object.entries(object)) {
                return (
                  <button
                    onClick={() => {
                      setSelected({key, value});
                      setQuery(value);
                    }}
                    className="flex flex-row justify-between block w-full px-4 py-2 text-base text-left text-gray-700 hover:bg-gray-50"
                  >
                    {value}
                    {selected.key === key ? <CheckedIndicator /> : ''}
                  </button>
                );
              }
              return null;
            })}*/}
          </div>
        </div>
      ) : null}

      {/*<div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <div className="absolute right-0 w-56 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
    <div className="py-1" role="none">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-0">Account settings</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-1">Support</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="block w-full px-4 py-2 text-sm text-left text-gray-700" role="menuitem" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>*/}

      {/*<SelectLib
        className={
          className +
          'mt-1 text-black font-normal border-gray hover:border-black focus:border-black'
        }
        classNamePrefix="select"
        options={options}
        isClearable={true}
        //isMulti={true}
        //isDisabled={true}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => <ArrowDown />,
          //ClearIndicator: () => <ClearIndicator />,
        }}
      />*/}
    </div>
  );
};
