


const express = require('express');
const path = require('path');

const app = express();
 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 20797;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// Pa repaste