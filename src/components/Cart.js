const formatItems = (items) => {
  const formattedItems = {}
  for (const {title} of items) {
    formattedItems[title] = formattedItems[title] + 1 || 1
  }
  return formattedItems
}

  export const Cart = ({items}) => {
  const formmatedItems = formatItems(items)
    
  return <div className="cart">
    <h3>Your Cart</h3>
    <p>Items in cart: {items.length}</p>
    {Object.keys(formmatedItems).map(title => (<div>
          {`${title}: x${formmatedItems[title]}`}
        </div>))}
    <p>Total price: ${items.reduce((prevValue, currValue) => {
      return prevValue + currValue.price
    }, 0)}</p>
    <div className="buttons">
      <button
        className="btn"
        onClick={() => {
          this.setState({items: []})
        }}>
        Clear
      </button>
      <button
        className="btn"
        onClick={() => alert('Not there yet')}
      >
        Checkout
      </button>
    </div>
  </div>
}