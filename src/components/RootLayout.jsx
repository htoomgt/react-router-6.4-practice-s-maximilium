import React from 'react';
import MainNavigation from './MainNavigation';

const RootLayout = ({children}) => {
  return (
    <>
        <MainNavigation />
        <main>{children}</main>        
    </>
  )
}

export default RootLayout