'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarProviders = ({ children } : { children : React.ReactNode}) => {


  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color={"#A9A9A9"}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProviders;