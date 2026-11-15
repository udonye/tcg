const express = require('express');                                                                            
  const cors = require('cors');                                                                                  
  const dotenv = require('dotenv');                                                                              
                                                                                                                 
  dotenv.config();                                                                                               
                                                                                                                 
  const app = express();                                                                                         
                                                                                                                 
  app.use(cors());                                                                                               
  app.use(express.json());                                                                                       
                                                                                                                 
  app.get('/api/health', (req, res) => {                                                                         
    res.json({ status: 'TCG Backend Running', timestamp: new Date() });                                          
  });                                                                                                            
                                                                                                                 
  app.post('/api/flights/search', (req, res) => {                                                                
    res.json({                                                                                                   
      flights: [                                                                                                 
        { id: 1, airline: 'Delta', price: 299, duration: '4h 30m', date: '2026-12-01' },                         
        { id: 2, airline: 'United', price: 249, duration: '5h 15m', date: '2026-12-01' },                        
        { id: 3, airline: 'American', price: 279, duration: '4h 45m', date: '2026-12-01' }                       
      ]                                                                                                          
    });                                                                                                          
  });                                                                                                            
                                                                                                                 
  app.post('/api/hotels/search', (req, res) => {                                                                 
    res.json({                                                                                                   
      hotels: [                                                                                                  
        { id: 1, name: 'Luxury Plaza', price: 189, location: 'Downtown', stars: 5 },                             
        { id: 2, name: 'Modern Suites', price: 149, location: 'Midtown', stars: 4 },                             
        { id: 3, name: 'Budget Inn', price: 89, location: 'Airport', stars: 3 }                                  
      ]                                                                                                          
    });                                                                                                          
  });                                                                                                            
                                                                                                                 
  app.use((err, req, res, next) => {                                                                             
    console.error(err.stack);                                                                                    
    res.status(500).json({ error: 'Something went wrong' });                                                     
  });                                                                                                            
                                                                                                                 
  const PORT = process.env.PORT || 5000;                                                                         
  app.listen(PORT, () => {                                                                                       
    console.log(`TCG Backend running on port ${PORT}`);                                                          
  });                                                                        
  app.listen(PORT, () => {                                                                                       
    console.log(`TCG Backend running on port ${PORT}`);                                                          
  });                                                                                                            
  EOF
