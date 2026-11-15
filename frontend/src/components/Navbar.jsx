import React from 'react';                                                                                     
                                                                                                                 
  function Navbar() {                                                                                            
    return (                                                                                                     
      <nav className="navbar">                                                                                   
        <div className="navbar-logo">TCG Travel</div>                                                            
        <div className="navbar-right">                                                                           
          <a href="#flights" className="nav-link">Flights</a>                                                    
          <a href="#hotels" className="nav-link">Hotels</a>                                                      
          <a href="#bnpl" className="nav-link">BNPL</a>                                                          
          <button style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)', color: 'white',      
padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>Sign        
In</button>                                                                                                      
        </div>                                                                                                   
      </nav>                                                                                                     
    );                                                                                                           
  }                                                                                                              
                                                                                                                 
  export default Navbar;
