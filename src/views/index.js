import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import Admin from "./admin";

function Views() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/admin/addUser' />} />
        <Route path="/admin/*" element={
            <Admin />
        } />
      </Routes>
    </BrowserRouter >
  );
}

export default Views;
