import {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme extends MuiTheme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions extends MuiThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
