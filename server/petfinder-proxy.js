const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // allow all domains
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use(express.json());

let token = '';
let tokenExpiry = 0;


async function getToken() {
    if (!token || Date.now() >= tokenExpiry) {
        const res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.PETFINDER_CLIENT_ID,
                client_secret: process.env.PETFINDER_CLIENT_SECRET,
            }),
        });

        const data = await res.json();
        token = data.access_token;
        tokenExpiry = Date.now() + data.expires_in * 1000;

    }
    return token;
}

app.get('/api/animals', async (req, res) => {
    console.log("🐶 /api/animals route HIT", req.query); // Add this
    try {
        console.log('🌐 Proxying request to Petfinder API with query:', req.query);
        const accessToken = await getToken();
        const query = new URLSearchParams(req.query).toString();
        const apiRes = await fetch(`https://api.petfinder.com/v2/animals?${query}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        const json = await apiRes.json();
        res.json(json);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch from Petfinder', details: err.message });
    }
});


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
});

