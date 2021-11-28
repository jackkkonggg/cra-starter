import { Root } from '@pages/Root';
import { ThemeProviders } from '@providers/ThemeProviders';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <ThemeProviders>
      <Root />
    </ThemeProviders>
  );
};
