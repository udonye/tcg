  import React from 'react';                                                                                     
                                                                                                                 
  function HotelResults({ results }) {                                                                           
    const handleBook = (hotel) => {                                                                              
      alert(`Booking: ${hotel.name} - $${hotel.price}/night`);                                                   
    };                                                                                                           
                                                                                                                 
    return (                                                                                                     
      <div className="results-grid">                                                                             
        {results.map((hotel, index) => (                                                                         
          <div key={index} className="result-card">                                                              
            <div className="result-image">🏨</div>                                                               
            <div className="result-content">                                                                     
              <div className="result-title">{hotel.name || 'Hotel'}</div>                                        
              <div style={{ color: '#6b7280', marginBottom: '1rem' }}>{hotel.location || 'Premium                
Location'}</div>                                                                                                 
              <div className="result-price">${hotel.price || '120'}/night</div>                                  
              <button className="book-btn" onClick={() => handleBook(hotel)}>Reserve Now</button>                
            </div>                                                                                               
          </div>                                                                                                 
        ))}                                                                                                      
      </div>                                                                                                     
    );                                                                                                           
  }                                                                                                              
                                                                                                                 
  export default HotelResults;                                                                                   
  EOF
