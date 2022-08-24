import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "../component/Header/Header";
import Shop from '../component/Shop/Shop.js';

const Home = () => {
    return (
        <div>
           <Header/>
            <Shop/>
            <Routes>
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<PrivateRoute>
          <About />
        </PrivateRoute>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />*/}
      </Routes> 
        </div>
    );
};

export default Home;