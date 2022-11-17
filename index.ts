import cors from "cors";
import express from "express";
import giftCards from "./routes/giftCards";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/giftcards", giftCards);

if (process.env.NODE_ENV === "production") {
  console.log("PRODUCTION MODE");
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
