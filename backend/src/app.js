const express = require('express');
const cors = require('cors');
const app =                        
express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ status:  
'OK' }));
app.post('/api/flights/search', (req, res) => res.json({ flights: [{ airline: 'Delta', price: 299 }]  
}));
app.post('/api/hotels/search', (req, res) => res.json({ hotels: [{ name: 'Luxury', price: 189 }]           
}));
const PORT = 8000;
app.listen(PORT, () => console.log('Backend running on port ' + PORT));