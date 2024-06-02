const express = require('express');
const axios = require('axios');
const app = express();

const API_KEY = '25540812-faf2b76d586c1787d2dd02736';

app.get('/photos', async (req, res) => {
    const { category, page = 1 } = req.query;
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${category}&page=${page}&per_page=9`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/photos/sort', async (req, res) => {
    const { category, sortBy, page = 1 } = req.query;
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${category}&order=${sortBy}&page=${page}&per_page=9`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/photos/paginate', async (req, res) => {
    const { category, page = 1 } = req.query;
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${category}&page=${page}&per_page=9`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});