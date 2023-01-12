const express = require('express')
const axios = require('axios');
const { error } = require('console');
const cors = require('cors')




const app = express();
// app.use(cors ({
// origin: "https://api.cloudinary.com/v1_1/jeffreymc/resources/image/tags/brand",
// }))

const corsOptions = {
  origin: (origin, callback) => {
      callback(null, true)
  },
}
app.options('*', cors(corsOptions))

app.get(':endpoint([\\/\\w\\.-]*)' , (req, res) => {
    let endpoint = 'https://api.cloudinary.com/v1_1' + req.params.endpoint
      
    axios.get(endpoint, 
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        auth: {
          username: '538951581278876',
          password: 'AoqEi0qCLLfh7L2Mp9Ad7KDNsxo',
        },
      }
      
      )
    
    .then(response => {
      res.json(response.data.resources)
    }).catch(error => {
      res.json(error)
    })
})

app.listen(3100)

