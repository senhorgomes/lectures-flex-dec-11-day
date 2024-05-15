import "./App.css";
import { StockCard } from "./components/StockCard";
import { StockStats } from "./components/StockStats";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
function App() {

  // "id": "1",
  // "name": "Super Nintendo",
  // "price": "100",
  // "image": "https://upload.wikimedia.org/wikipedia/commons/3/31/SNES-Mod1-Console-Set.jpg",
  // "user_id": 1,
  // "count": 2
  // Fetch this information and save it in our state
  const [inventory, setInventory] = useState([]);

  useEffect(()=> {
    fetch("/api/products")
    .then((response)=> response.json())
    .then((dataObject)=> setInventory(dataObject.data))
  }, [])

  
  // const [stockState, setStockState] = useState(0);

  return (
    <>
      <main>
        <section>
          <h2>Stock Items</h2>
          <div className="row">
            {/* We can send itemsData down via props to each stock card */}
            {/* // id, singularItem, pluralItem, image, count */}
            {/* Why dont we have our app render as many StockCards as there are elements in the array */}
            {
              inventory.map((item, index) =>
                <StockCard
                  id={item.id}
                  index={index}
                  name={item.name}
                  image={item.image}
                  count={item.count}
                  user_id={item.user_id}
                  // setInventory={setInventory}

                />
              )
            }
          </div>
        </section>
        <section>
          {/* <StockStats count={inventory}/> */}
        </section>
      </main>
    </>
  );
}

export default App;