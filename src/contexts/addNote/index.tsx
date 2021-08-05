import React, { FC, useState, createContext } from 'react';
import { ContextDefaultValuesType } from './types';

const contextDefaultValues: ContextDefaultValuesType = {
  status: false,
  setStatus: () => {},
};

export const AddStoreContext =
  createContext<ContextDefaultValuesType>(contextDefaultValues);

const AddStoreProvider: FC = ({ children }) => {
  const [status, setStatus] = useState<boolean>(contextDefaultValues.status);
  const setStatusAddStore = (value: boolean) => setStatus(value);

  return (
    <AddStoreContext.Provider
      value={{
        status,
        setStatus: setStatusAddStore,
      }}
    >
      {children}
    </AddStoreContext.Provider>
  );
};

export default AddStoreProvider;
