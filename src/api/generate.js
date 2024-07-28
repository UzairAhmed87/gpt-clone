const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Store this in your Vercel environment variables
});

const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
    });
    res.status(200).json(response.data.choices[0].text.trim());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
