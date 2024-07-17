import { createContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    number: '5',
    category: '9',
    difficulty: 'easy',
  });

  const updateSetting = (property, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [property]: value,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
