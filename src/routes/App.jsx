import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../containers/Layout.jsx";
import Login from "../containers/Login.jsx";
import RecoveryPassword from "../containers/RecoveryPassword.jsx";
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import "../styles/global.css";

const App = () => {
    return (
      <BrowserRouter>
       <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/RecoveryPassword" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
       </Layout>
 </BrowserRouter>
    );
}
export default App; 