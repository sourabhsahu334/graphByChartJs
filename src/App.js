
import {React,BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Dashboard from "./dashboard/Dashboard";
import { useEffect } from "react";


const data = [
  {
    country: 'Country A',
    year: 2021,
    topics: 'Technology',
    sector: 'Agriculture',
    region: 'Asia',
    pest: 'Drought',
    source: 'Source A',
    intensity: 5,
    likelihood: 3,
    relevance: 4,
  },
  {
    country: 'Country B',
    year: 2022,
    topics: 'Economy',
    sector: 'Manufacturing',
    region: 'Europe',
    pest: 'Flood',
    source: 'Source B',
    intensity: 4,
    likelihood: 2,
    relevance: 3,
  },
  {
    country: 'Country C',
    year: 2022,
    topics: 'Health',
    sector: 'Healthcare',
    region: 'Africa',
    pest: 'Disease',
    source: 'Source C',
    intensity: 2,
    likelihood: 5,
    relevance: 4,
  },
  {
    country: 'Country D',
    year: 2023,
    topics: 'Environment',
    sector: 'Energy',
    region: 'North America',
    pest: 'Wildfire',
    source: 'Source D',
    intensity: 3,
    likelihood: 4,
    relevance: 5,
  },
  {
    country: 'Country E',
    year: 2023,
    topics: 'Politics',
    sector: 'Government',
    region: 'South America',
    pest: 'Conflict',
    source: 'Source E',
    intensity: 1,
    likelihood: 1,
    relevance: 2,
  },
  {
    country: 'Country F',
    year: 2024,
    topics: 'Society',
    sector: 'Education',
    region: 'Oceania',
    pest: 'Heatwave',
    source: 'Source F',
    intensity: 4,
    likelihood: 3,
    relevance: 4,
  },
];

const App = () => (
  
    
    <div>
            
<Dashboard data={data}/>
    </div>
    
);

export default App;
