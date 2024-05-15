// Modify buttons to increase or decrease stock

// useState is one of the many React hooks
// Manage the state of a React app

// import { useState } from "react";
// id, singularItem, pluralItem, image, count
export const StockCard = (props) => {

  // Two functions -> Getter, Setter

  // Default state to useState -> 0

  // const keyboardStockState = useState(0)
  // const [keyboardStockState, setKeyboardStockState] = useState(0)
  // const [stockState, setStockState] = useState(0)

  // useState returns an array

  const increaseStock = () => {
    props.setInventory(prev => {
      // access the previous state
      const inventoryCopy = [...prev];
      // Creating a clone of the item we wish to modify
      const singleItemClone = {...inventoryCopy[props.index]}
      singleItemClone.count ++;
      inventoryCopy[props.index] = singleItemClone
      return inventoryCopy;
    })
  } 
  const decreaseStock = () => {
    props.setInventory(prev => {
      // access the previous state
      const inventoryCopy = [...prev];
      // Creating a clone of the item we wish to modify
      const singleItemClone = {...inventoryCopy[props.index]}
      singleItemClone.count --;
      inventoryCopy[props.index] = singleItemClone
      return inventoryCopy;
    })
  } 


  return (
    <article className="card flow">
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.id} height="160px" />
      <div>
        <p>Current Stock: {props.count}</p>
        <div className="row row-item-grow">
          {/* <button onClick={() => increaseStock()}>↑ Add {props.pluralItem}</button> */}
          {/* <button onClick={() => decreaseStock() }>↓ Remove {props.pluralItem}</button> */}
        </div>
      </div>
    </article>
  );
};
