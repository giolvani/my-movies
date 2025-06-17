import { createContext } from 'react';

export interface HeaderContextType {
  title: string;
  setTitle: (title: string) => void;
  showBackButton: boolean;
  setShowBackButton: (showBackButton: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType>({
  title: 'Movies List',
  setTitle: () => {},
  showBackButton: false,
  setShowBackButton: () => {},
});

export default HeaderContext;
