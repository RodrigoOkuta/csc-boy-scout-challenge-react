export const ProductList = ({products, setItems}) => {
    
    return <div>
    <h1>Product List</h1>
    <div className="product-list">
      {
        products.map((x) => {
          <Product x={x} setItems={setItems} />
          // return (
          //   <div className="product">
          //     <p>{x.title}</p>
          //     <p>${x.price}</p>
          //     <div>
          //       <img className="product-image" src={x.imageUrl} alt={x.title}/>
          //     </div>
          //     <button
          //       className="btn"
          //       onClick={() => {
          //         console.log('add', x);
          //         let pr = {
          //           title: x.title,
          //           price: x.price
          //         }
          //         setItems((prevItems) => [...prevItems, pr])
          //       }}
          //     >
          //       Add to Cart
          //     </button>
          //   </div>
          // )
        })
      }
    </div>
    </div>
}