import React, { FC, ReactChild, createContext, useContext } from 'react';
import { Tab, TabProps } from '../Tab';

export interface TabsProps {
  children?: Array<TabProps>;
  value: number;
  onChange: FC;
}

const TabsContext = createContext({});
export function useTabs() {
  return useContext(TabsContext);
}

export const Tabs: FC<TabsProps> = ({ children, value, onChange }) => {
  return (
    <TabsContext.Provider
      value={{
        value,
        onChange: (index) => {
          if (onChange) onChange(index);
        },
      }}
    >
      <div className="liu-tabs">{children}</div>
    </TabsContext.Provider>
  );
};
