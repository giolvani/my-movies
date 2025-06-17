import { useState } from 'react';
import type { ReactNode } from 'react';
import HeaderContext from './HeaderContext';

// Custom provider component
export const HeaderProvider = ({ 
  children,
  initialTitle = 'Pop Movies'
}: { 
  children: ReactNode,
  initialTitle?: string
}) => {
  const [title, setTitle] = useState(initialTitle);

  return (
    <HeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
