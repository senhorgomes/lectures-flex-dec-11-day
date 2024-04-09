function GroceryListItem(props) {
    // We are expecting and relying on the object to have the same keys
    return (
        <>
            <p>
                {props.name}
            </p>
            <p>
                Amount: ${props.price}
            </p>
        </>
    );
}

export default GroceryListItem;