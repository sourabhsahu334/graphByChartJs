import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from "axios"
const Dashboard = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [endYear, setEndYear] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedPest, setSelectedPest] = useState('');
    const [selectedSource, setSelectedSource] = useState('');

    const chartRef = useRef(null);
    const fetchData= async()=>{
        const data1= await axios.get("http://localhost:3000/getData");
        console.log(data1.data)
        setFilteredData(data1.data);
    }
    useEffect(()=>{
      fetchData();
    },[])
    
      

    useEffect(() => {
       if(filteredData!==[]){
         const filtered = filteredData.filter(
            (d) =>
                (!endYear || d.year <= endYear) &&
                (!selectedTopic || d.topics === selectedTopic) &&
                (!selectedSector || d.sector === selectedSector) &&
                (!selectedRegion || d.region === selectedRegion) &&
                (!selectedPest || d.pestle === selectedPest) &&
                (!selectedSource || d.source === selectedSource)
        );
        setFilteredData(filtered);
       }
    }, [ endYear, selectedTopic, selectedSector, selectedRegion, selectedPest, selectedSource,]);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const colors = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099'];

            const datasets = [{
                label: 'Intensity', data: filteredData.map((d) => d.intensity), backgroundColor: colors[0],
            },
            {
                label: 'Likelihood',
                data: filteredData.map((d) => d.likelihood),
                backgroundColor: colors[1],
            },
            {
                label: 'Relevance',
                data: filteredData.map((d) => d.relevance),
                backgroundColor: colors[2],
            },
            ];

            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: filteredData.map((d) => d.country),
                    datasets,
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            return () => {
                chart.destroy();
            };
        }
    }, [filteredData]);

    const handleChangeEndYear = (e) => {
        setEndYear(e.target.value);
    };

    const handleChangeTopic = (e) => {
        setSelectedTopic(e.target.value);
    };

    const handleChangeSector = (e) => {
        setSelectedSector(e.target.value);
    };

    const handleChangeRegion = (e) => {
        setSelectedRegion(e.target.value);
    };

    const handleChangePest = (e) => {
        setSelectedPest(e.target.value);
    };

    const handleChangeSource = (e) => {
        setSelectedSource(e.target.value);
    };

    return (
        <div><div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
        <div>
            <label style={{marginLeft:"20px"}} htmlFor="end-year-filter">End Year:</label>
            <input
                type="number"
                id="end-year-filter"
                value={endYear}
                onChange={handleChangeEndYear}
            />
        </div>
        <div>
            <label style={{marginLeft:"20px"}} htmlFor="topics-filter">Topics:</label>
            <select id="topics-filter" value={selectedTopic} onChange={handleChangeTopic}>
                <option value="">All</option>
                <option value="Technology">Technology</option>
                <option value="Climate Change">Climate Change</option>
                <option value="Economy">Economy</option>
                <option value="Politics">Politics</option>
                <option value="Society">Society</option>
            </select>
        </div>
        <div>
            <label style={{marginLeft:"20px"}} htmlFor="sector-filter">Sector:</label>
            <select id="sector-filter" value={selectedSector} onChange={handleChangeSector}>
                <option value="">All</option>
                <option value="Energy">Energy</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Technology">Technology</option>
                <option value="Transport">Transport</option>
            </select>
        </div>
        <div>
            <label style={{marginLeft:"20px"}} htmlFor="region-filter">Region:</label>
            <select id="region-filter" value={selectedRegion} onChange={handleChangeRegion}>
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value ="Eastern Africa">Eastern Africa</option>
            </select>
        </div>
        <div>
            <label style={{marginLeft:"20px"}} htmlFor="pest-filter">Pest:</label>
            <select id="pest-filter" value={selectedPest} onChange={handleChangePest}>
                <option value="">All</option>
                <option value="Drought">Drought</option>
                <option value="Flood">Flood</option>
                <option value="Heat Wave">Heat Wave</option>
                <option value="Hurricane">Hurricane</option>
                <option value="Wildfire">Wildfire</option>
                <option value ="Industries">Industries</option>
            </select>
        </div>
        <div>
            <label style={{marginLeft:"20px"}} htmlFor="source-filter">Source:</label>
            <select id="source-filter" value={selectedSource} onChange={handleChangeSource}>
                <option value="">All</option>
                <option value="CNN">CNN</option>
                <option value="BBC">BBC</option>
                <option value="The Guardian">The Guardian</option>
                <option value="The New York Times">The New York Times</option>
                <option value="The Washington Post">The Washington Post</option>
            </select>
        </div>
        
    </div>
    <div><canvas ref={chartRef} /></div></div>
    );
};

export default Dashboard;