const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Food to Go - DevOps Project</h1><p>Pipeline is working!</p>');
});

app.listen(PORT, () => {
  console.log(`Food to Go app running on port ${PORT}`);
});
