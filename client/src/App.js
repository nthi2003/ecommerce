import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/slides/counterSlide'; // corrected import path for counterSlice

import { routes } from './routes';

import Default from './components/Default/Defauit'
function App() {


  return (
    <div>

      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const BlockHeader= route.isShowHeader ? Default : Fragment
      
            return (
             
              <Route path={route.path} element={
                <BlockHeader>

                  <Page />

                </BlockHeader>
            
            } />
            )
          })}


        </Routes>
      </Router>

    </div>
  );
}

export default App;