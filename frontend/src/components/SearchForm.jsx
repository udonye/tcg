  import React, { useState } from 'react';                                                                       
                                                                                                                 
  function SearchForm({ onSearch, searchType }) {                                                                
    const [formData, setFormData] = useState({                                                                   
      from: '',                                                                                                  
      to: '',                                                                                                    
      departDate: '',                                                                                            
      passengers: '1',                                                                                           
      checkIn: '',                                                                                               
      checkOut: '',                                                                                              
      guests: '1'                                                                                                
    });                                                                                                          
                                                                                                                 
    const handleChange = (e) => {                                                                                
      const { name, value } = e.target;                                                                          
      setFormData(prev => ({ ...prev, [name]: value }));                                                         
    };                                                                                                           
                                                                                                                 
    const handleSubmit = (e) => {                                                                                
      e.preventDefault();                                                                                        
      onSearch(formData);                                                                                        
    };                                                                                                           
                                                                                                                 
    return (                                                                                                     
      <form className="search-form" onSubmit={handleSubmit}>                                                     
        <div className="form-grid">                                                                              
          {searchType === 'flights' ? (                                                                          
            <>                                                                                                   
              <div className="form-group">                                                                       
                <label>From</label>                                                                              
                <input type="text" name="from" placeholder="Departure city" value={formData.from}                
onChange={handleChange} required />                                                                              
              </div>                                                                                             
              <div className="form-group">                                                                       
                <label>To</label>                                                                                
                <input type="text" name="to" placeholder="Arrival city" value={formData.to}                      
onChange={handleChange} required />                                                                              
              </div>                                                                                             
              <div className="form-group">                                                                       
                <label>Depart</label>                                                                            
                <input type="date" name="departDate" value={formData.departDate} onChange={handleChange} required
/>                                                                                                               
              </div>                                                                                             
              <div className="form-group">                                                                       
                <label>Passengers</label>                                                                        
                <select name="passengers" value={formData.passengers} onChange={handleChange}>                   
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}                               
                </select>                                                                                        
              </div>                                                                                             
            </>                                                                                                  
          ) : (                                                                                                  
            <>                                                                                                   
              <div className="form-group">                                                                       
                <label>City</label>                                                                              
                <input type="text" name="to" placeholder="Hotel city" value={formData.to} onChange={handleChange}
required />                                                                                                      
              </div>                                                                                             
              <div className="form-group">                                                                       
                <label>Check In</label>                                                                          
                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />   
              </div>                                                                                             
              <div className="form-group">                                                                       
                <label>Check Out</label>                                                                         
                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required /> 
              </div>                                                                                             
              <div className="form-group">                                                                       
                <label>Guests</label>                                                                            
                <select name="guests" value={formData.guests} onChange={handleChange}>                           
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}                               
                </select>                                                                                        
              </div>                                                                                             
            </>                                                                                                  
          )}                                                                                                     
        </div>                                                                                                   
        <button type="submit" className="search-btn">Search {searchType === 'flights' ? 'Flights' :              
'Hotels'}</button>                                                                                               
      </form>                                                                                                    
    );                                                                                                           
  }                                                                                                              
                                                                                                                 
  export default SearchForm;                                                                                     
  EOF
