import React, { useState } from 'react';                                                                       
  import './App.css';                                                                                            
  import Navbar from './components/Navbar';                                                                      
  import SearchForm from './components/SearchForm';                                                              
  import FlightResults from './components/FlightResults';                                                        
  import HotelResults from './components/HotelResults';                                                          
                                                                                                                 
  function App() {                                                                                               
    const [activeTab, setActiveTab] = useState('flights');                                                       
    const [results, setResults] = useState([]);                                                                  
    const [loading, setLoading] = useState(false);                                                               
                                                                                                                 
    const handleSearch = async (params) => {                                                                     
      setLoading(true);                                                                                          
      try {                                                                                                      
        const endpoint = activeTab === 'flights' ? '/api/flights/search' : '/api/hotels/search';                 
        const response = await fetch(endpoint, {                                                                 
          method: 'POST',                                                                                        
          headers: { 'Content-Type': 'application/json' },                                                       
          body: JSON.stringify(params),                                                                          
        });                                                                                                      
        const data = await response.json();                                                                      
        setResults(data.flights || data.hotels || []);                                                           
      } catch (error) {                                                                                          
        console.error('Search error:', error);                                                                   
        setResults([]);                                                                                          
      } finally {                                                                                                
        setLoading(false);                                                                                       
      }                                                                                                          
    };                                                                                                           
                                                                                                                 
    return (                                                                                                     
      <div className="app">                                                                                      
        <Navbar />                                                                                               
        <div className="search-container">                                                                       
          <div className="search-header">                                                                        
            <h1>Find Your Perfect Trip</h1>                                                                      
            <p>Book flights & hotels at the best prices</p>                                                      
          </div>                                                                                                 
          <div className="tab-buttons">                                                                          
            <button className={`tab-btn ${activeTab === 'flights' ? 'active' : ''}`} onClick={() =>              
setActiveTab('flights')}>✈️ Flights</button>                                                                     
            <button className={`tab-btn ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() =>               
setActiveTab('hotels')}>🏨 Hotels</button>                                                                       
          </div>                                                                                                 
          <SearchForm onSearch={handleSearch} searchType={activeTab} />                                          
        </div>                                                                                                   
        <div className="results-container">                                                                      
          {loading && <div className="loader">Searching...</div>}                                                
          {!loading && results.length > 0 && (activeTab === 'flights' ? <FlightResults results={results} /> :    
<HotelResults results={results} />)}                                                                             
          {!loading && results.length === 0 && <div className="no-results">Search results will appear here</div>}
        </div>                                                                                                   
      </div>                                                                                                     
    );                                                                                                           
  }                                                                                                              
                                                                                                                 
  export default App;
