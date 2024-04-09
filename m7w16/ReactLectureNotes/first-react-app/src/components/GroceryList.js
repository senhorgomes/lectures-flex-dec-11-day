import GroceryListItem from "./GroceryListItem";

function GroceryList(props) {
    // console.log("inside groceryList:", props.list)
    // We are to receive an array of elements
    // Map through each element, and return an li
    return (
        <>
            <h1>Grocery List for the week!</h1>
            <ul>
                {props.list.map((element) =>
                {
                    console.log(element)
                    return(
                    <li>
                        <GroceryListItem 
                        // list={element}
                        name={element.name} 
                        price={element.price}/>
                    </li>
                    )
                }
                )}
            </ul>
        </>
    );
}

export default GroceryList;