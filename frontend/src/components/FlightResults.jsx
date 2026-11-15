import React from 'react';                                                                                     
                                                                                                                 
  function FlightResults({ results }) {                                                                          
    return (                                                                                                     
      <div className="results-grid">                                                                             
        {results.map((flight, index) => (                                                                        
          <div key={index} className="result-card">                                                              
            <div className="result-image">✈️</div>                                                               
            <div className="result-content">                                                                     
              <div className="result-title">{flight.airline || 'Flight'}</div>                                   
              <div style={{ color: '#6b7280', marginBottom: '1rem' }}>{flight.duration || '4h 30m'}</div>        
              <div className="result-price">${flight.price || '199'}</div>                                       
              <button className="book-btn">Book Now</button>                                                     
            </div>                                                                                               
          </div>                                                                                                 
        ))}                                                                                                      
      </div>                                                                                                     
    );                                                                                                           
  }                                                                                                              
                                                                                                                 
  export default FlightResults;                                                                                  
```                                                                                                              
                                                                                                                 
Commit. Then HotelResults.jsx: https://github.com/udonye/tcg/blob/main/frontend/src/components/HotelResults.jsx  
                                                                                                                 
Delete everything, paste:                                                                                        
                                                                                                                 
```javascript                                                                                                    
  import React from 'react';                                                                                     
                                                                                                                 
  function HotelResults({ results }) {                                                                           
    return (                                                                                                     
      <div className="results-grid">                                                                             
        {results.map((hotel, index) => (                                                                         
          <div key={index} className="result-card">                                                              
            <div className="result-image">🏨</div>                                                               
            <div className="result-content">                                                                     
              <div className="result-title">{hotel.name || 'Hotel'}</div>                                        
              <div style={{ color: '#6b7280', marginBottom: '1rem' }}>{hotel.location || 'Location'}</div>       
              <div className="result-price">${hotel.price || '120'}/night</div>                                  
              <button className="book-btn">Reserve Now</button>                                                  
            </div>                                                                                               
          </div>                                                                                                 
        ))}                                                                                                      
      </div>                                                                                                     
    );                                                                                                           
  }                                                                                                              
                                                                                                                 
  export default HotelResults;
