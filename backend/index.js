const express = require('express');
const bodyParser = require('body-parser');
const {PredictionServiceClient} = require('@google-cloud/aiplatform').v1;
const app = express();
app.use(bodyParser.json());

const client = new PredictionServiceClient();
const endpoint = 'projects/PROYECTO/locations/us-central1/endpoints/ENDPOINT_ID';

app.post('/api/chat', async (req, res) => {
  const [response] = await client.predict({
    endpoint,
    instances: [{ content: req.body.text }],
    parameters: { temperature: 0.3, maxOutputTokens: 150 }
  });
  const reply = response.predictions[0].generated_text || 'Lo siento, no entendí.';
  res.json({ reply });
});

const PORT = process.env.PORT||3000;
app.listen(PORT, ()=> console.log(`API corriendo en puerto ${PORT}`));
