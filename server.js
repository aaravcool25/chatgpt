const express = require('express');
const fetch = require('node-fetch');
const app = express();
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

app.use(express.json());

app.post('/chat', async (req, res) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
