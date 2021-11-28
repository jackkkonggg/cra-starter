import { orange } from '@mui/material/colors';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { FC, ReactNode } from 'react';

interface ThemeProvidersProps {
  children: ReactNode;
}

export const ThemeProviders: FC<ThemeProvidersProps> = ({ children }) => {
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
