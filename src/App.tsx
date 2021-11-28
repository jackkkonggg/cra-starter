import { FC } from 'react';
import { Root } from '@pages/Root';
import { ThemeProviders } from '@providers/ThemeProviders';

export const App: FC = () => {
  return (
    <ThemeProviders>
      <Root />
    </ThemeProviders>
  );
};
