import { useContext } from 'react';
import HeaderContext from '@/lib/context/HeaderContext';

export const useHeader = () => useContext(HeaderContext);
