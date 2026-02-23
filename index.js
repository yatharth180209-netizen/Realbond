// Entry point for RealBond application

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the RealBond application!');
});

app.listen(port, () => {
    console.log(`RealBond app listening at http://localhost:${port}`);
});
