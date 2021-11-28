import { keyframes, styled } from '@mui/system';
import { FC } from 'react';
import logo from '@assets/logo.svg';
import { Link, Typography } from '@mui/material';

const RootFrame = styled('div')`
  text-align: center;
`;

const RootHeader = styled('header')`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const RootLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RootLogo = styled('img')`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${RootLogoSpin} infinite 20s linear;
  }
`;

const RootLink = styled(Link)`
  color: #61dafb;
`;

export const Root: FC = () => {
  return (
    <RootFrame>
      <RootHeader>
        <RootLogo src={logo} alt="Logo" />
        <Typography>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <RootLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </RootLink>
      </RootHeader>
    </RootFrame>
  );
};
