import express from "express";
const router = express.Router();

const giftCards = [
  { id: "1", value: 500 },
  { id: "2", value: 1000 },
  { id: "3", value: 1500 },
];

router.get("/", (req, res) => {
  return res.send(giftCards);
});

export default router;
