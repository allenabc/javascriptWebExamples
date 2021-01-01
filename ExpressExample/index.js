const express = require('express')
const app = express();

// allow server to access to other domains, scheme or port 
const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => { res.send('Hello World!'); });

const PORT=process.env.PORT
if (PORT===undefined) { console.log('PORT not set in env') }
app.listen(PORT, () => console.log('Example app listening on port ', PORT));
