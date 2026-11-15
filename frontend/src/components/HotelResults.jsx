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
