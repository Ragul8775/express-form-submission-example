const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), function(err) {
    if (err) {
      console.log(err);
     
    }
  });
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const responseHTML = `<p>Submitted Name: ${name}</p><p>Submitted Age: ${age}</p>`;
  res.send(responseHTML);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
