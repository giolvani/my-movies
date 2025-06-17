import { createContext } from 'react';

export interface HeaderContextType {
  title: string;
  setTitle: (title: string) => void;
}

// Create context with default values
const HeaderContext = createContext<HeaderContextType>({
  title: 'Pop Movies',
  setTitle: () => {},
});

export default HeaderContext;
