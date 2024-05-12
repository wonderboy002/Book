import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
function Layout() {
  
  return (
    <div>
      <Navigation/>
      <Outlet/>
    </div>
  );
}

export default Layout;
