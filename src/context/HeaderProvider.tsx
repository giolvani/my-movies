import { useState } from 'react';
import type { ReactNode } from 'react';
import HeaderContext from './HeaderContext';

export const HeaderProvider = ({
  children,
  initialTitle = 'Pop Movies',
  initialShowBackButton = false
}: {
  children: ReactNode;
  initialTitle?: string;
  initialShowBackButton?: boolean;
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [showBackButton, setShowBackButton] = useState(initialShowBackButton);

  return <HeaderContext.Provider value={{ title, setTitle, showBackButton, setShowBackButton }}>{children}</HeaderContext.Provider>;
};

export default HeaderProvider;
