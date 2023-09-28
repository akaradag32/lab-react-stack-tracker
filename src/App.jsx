import { useState } from 'react';
import './App.css';
import companiesJson from './companies.json';
import technologiesJson from './technologies.json';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  const [companies, setCompanies] = useState(companiesJson);
  const [technologies, setTechnologies] = useState(technologiesJson);
  return (
    <Routes>
      <Route path='/' element={<HomePage companieList={companies} />} />
      <Route path='/company/:companySlug' element={<CompanyPage />} />
      <Route path='/tech/:slug' element={<TechnologyPage />} />
    </Routes>
  );
}

export default App;
