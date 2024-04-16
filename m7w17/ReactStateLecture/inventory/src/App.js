import "./App.css";
import { StockCard } from "./components/StockCard";
import { StockStats } from "./components/StockStats";
import { useState } from "react";
function App() {

  const itemsData = [{
    id: "keyboard",
    singularItem: "Keyboard",
    pluralItem: "Keyboards",
    image: "keyboard.svg",
    count: 0
  },
  {
    id: "mouse",
    singularItem: "Mouse",
    pluralItem: "Mice",
    image: "mouse.svg",
    count: 0
  },
  {
    id: "camera",
    singularItem: "Camera",
    pluralItem: "Cameras",
    image: "web-cam.svg",
    count: 0
  }
]


  
  // const [stockState, setStockState] = useState(0);
  const [inventory, setInventory] = useState(itemsData);

  return (
    <>
      <header>
        <h1>Better Buy Inventory Tracker</h1>
      </header>
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
                  singularItem={item.singularItem}
                  pluralItem={item.pluralItem}
                  image={item.image}
                  count={item.count}
                  setInventory={setInventory}
                  // stockState={stockState}
                  // setStockState={setStockState}
                />
              )
            }
            {/* <StockCard
              id={itemsData[0].id}
              singularItem={itemsData[0].singularItem}
              pluralItem={itemsData[0].pluralItem}
              image={itemsData[0].image}
              count={itemsData[0].count}
            />
            <StockCard
              id={itemsData[1].id}
              singularItem={itemsData[1].singularItem}
              pluralItem={itemsData[1].pluralItem}
              image={itemsData[1].image}
              count={itemsData[1].count}
            />
            <StockCard
              id={itemsData[2].id}
              singularItem={itemsData[2].singularItem}
              pluralItem={itemsData[2].pluralItem}
              image={itemsData[2].image}
              count={itemsData[2].count}
            /> */}
          </div>
        </section>
        <section>
          <StockStats count={inventory}/>
        </section>
      </main>
    </>
  );
}

export default App;