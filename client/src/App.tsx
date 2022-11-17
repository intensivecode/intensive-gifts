import axios from "axios";
import { useEffect, useState } from "react";

interface GiftCard {
  id: string;
  value: number;
}

function App() {
  const [giftCards, setGiftCards] = useState<GiftCard[]>([]);

  useEffect(() => {
    async function loadGiftCards() {
      const { data } = await axios.get<GiftCard[]>(
        "http://localhost:8000/api/giftcards"
      );
      setGiftCards(data);
    }

    loadGiftCards();
  }, []);

  return (
    <ul>
      {giftCards.map((gc) => (
        <li key={gc.id}>
          Giftcard number {gc.id}: {gc.value}
        </li>
      ))}
    </ul>
  );
}

export default App;
