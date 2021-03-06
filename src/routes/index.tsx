import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from '../pages/form';
import Index from '../pages';
import NotFound from '../pages/notFound';

const RoutesList = () => (
  <Router>
    <Routes>
      <Route path="" element={<Index />} />
      <Route path="/form" element={<Form />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default RoutesList;
