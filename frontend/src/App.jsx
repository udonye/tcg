import React, { useState, useEffect } from 'react';                                                            
  import './App.css';                                                                                            
  import Navbar from './components/Navbar';                                                                      
  import SearchForm from './components/SearchForm';                                                              
  import FlightResults from './components/FlightResults';                                                        
  import HotelResults from './components/HotelResults';                                                          
                                                                                                                 
  function App() {                                                                                               
    const [activeTab, setActiveTab] = useState('flights');                                                       
    const [results, setResults] = useState([]);                                                                  
    const [loading, setLoading] = useState(false);                                                               
    const [currentSlide, setCurrentSlide] = useState(0);                                                         
                                                                                                                 
    const slides = [                                                                                               
      {                                                                                                          
        image: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop)',        
        title: 'Explore New York',                                                                               
        subtitle: 'Experience the city that never sleeps',                                                       
        cta: 'Book Now'                                                                                          
      },                                                                                                         
      {                                                                                                          
        image: 'url(https://images.unsplash.com/photo-1540959375944-7049f642e9d4?w=1200&h=600&fit=crop)',        
        title: 'Discover Hong Kong',                                                                             
        subtitle: 'Modern skyline meets ancient traditions',                                                     
        cta: 'Explore'                                                                                           
      },                                                                                                         
      {                                                                                                          
        image: 'url(https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=600&fit=crop)',           
        title: 'Qatar Airways',                                                                                  
        subtitle: '5-star luxury in the skies',                                                                  
        cta: 'Book Flight'                                                                                       
      },                                                                                                         
      {                                                                                                          
        image: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop)',           
        title: 'Singapore Airlines',                                                                             
        subtitle: 'Award-winning service worldwide',                                                             
        cta: 'Reserve Now'                                                                                       
      }                                                                                                          
    ];                                                                                                           
                                                                                                                 
    useEffect(() => {                                                                                            
      const timer = setInterval(() => {                                                                          
        setCurrentSlide((prev) => (prev + 1) % slides.length);                                                   
      }, 5000);                                                                                                  
      return () => clearInterval(timer);                                                                         
    }, [slides.length]);                                                                                         
                                                                                                                 
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
                                                                                                                 
        <section className="hero">                                                                               
          <div className="hero-content">                                                                         
            <div className="logo-3d">✈️</div>                                                                    
            <h1>Your Journey Starts Here</h1>                                                                    
            <p>Book flights & hotels with Book Now, Pay Later</p>                                                
          </div>                                                                                                 
        </section>                                                                                               
                                                                                                                 
        <div className="carousel-container">                                                                     
          <div className="carousel">                                                                             
            {slides.map((slide, index) => (                                                                      
              <div                                                                                               
                key={index}                                                                                      
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}                           
                style={{ background: slide.image }}                                                              
              >                                                                                                  
                <div className="carousel-overlay"></div>                                                         
                <div className="carousel-content">                                                               
                  <h2 className="carousel-title">{slide.title}</h2>                                              
                  <p className="carousel-subtitle">{slide.subtitle}</p>                                          
                  <button className="carousel-cta">{slide.cta}</button>                                          
                </div>                                                                                           
              </div>                                                                                             
            ))}                                                                                                  
            <div className="carousel-indicators">                                                                
              {slides.map((_, index) => (                                                                        
                <div                                                                                             
                  key={index}                                                                                    
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}                              
                  onClick={() => setCurrentSlide(index)}                                                         
                ></div>                                                                                          
              ))}                                                                                                
            </div>                                                                                               
          </div>                                                                                                 
        </div>                                                                                                   
                                                                                                                 
        <div className="bnpl-banner">                                                                            
          <h3>💳 Book Now, Pay Later</h3>                                                                        
          <p>Split your payment into 3, 6, or 12 interest-free installments</p>                                  
        </div>                                                                                                   
                                                                                                                 
        <div className="search-container">                                                                       
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>                                            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>     
              <button                                                                                            
                onClick={() => setActiveTab('flights')}                                                          
                style={{                                                                                         
                  padding: '0.75rem 1.5rem',                                                                     
                  borderRadius: '8px',                                                                           
                  background: activeTab === 'flights' ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' :    
'rgba(255,255,255,0.1)',                                                                                         
                  color: 'white',                                                                                
                  fontWeight: '600',                                                                             
                  transition: 'all 0.3s',                                                                        
                  border: 'none',                                                                                
                  cursor: 'pointer'                                                                              
                }}                                                                                               
              >                                                                                                  
                ✈️ Flights                                                                                       
              </button>                                                                                          
              <button                                                                                            
                onClick={() => setActiveTab('hotels')}                                                           
                style={{                                                                                         
                  padding: '0.75rem 1.5rem',                                                                     
                  borderRadius: '8px',                                                                           
                  background: activeTab === 'hotels' ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' :     
'rgba(255,255,255,0.1)',                                                                                         
                  color: 'white',                                                                                
                  fontWeight: '600',                                                                             
                  transition: 'all 0.3s',                                                                        
                  border: 'none',                                                                                
                  cursor: 'pointer'                                                                              
                }}                                                                                               
              >                                                                                                  
                🏨 Hotels                                                                                        
              </button>                                                                                          
            </div>                                                                                               
          </div>                                                                                                 
          <SearchForm onSearch={handleSearch} searchType={activeTab} />                                          
        </div>                                                                                                   
                                                                                                                 
        <div className="results-container">                                                                      
          {loading && <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>Searching...</div>}
          {!loading && results.length > 0 && (                                                                   
            activeTab === 'flights' ?                                                                            
              <FlightResults results={results} /> :                                                              
              <HotelResults results={results} />                                                                 
          )}                                                                                                     
          {!loading && results.length === 0 && (                                                                 
            <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>Search to see results</div>  
          )}                                                                                                     
        </div>                                                                                                   
                                                                                                                 
        <footer className="footer">                                                                              
          <p>© 2026 TCG Travel. All rights reserved.</p>                                                         
          <p>Book Now, Pay Later. Travel Smarter.</p>                                                            
        </footer>                                                                                                
      </div>                                                                                                     
    );                                                                                                           
  }                                                                                                              
                                                                                                                 
  export default App;
