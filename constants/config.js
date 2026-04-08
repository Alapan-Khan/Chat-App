const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  credentials: true,
};

const CHATAPP_TOKEN = "chatApp-token";

export { corsOptions, CHATAPP_TOKEN };
