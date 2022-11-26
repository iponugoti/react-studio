import "./BakeryItem.css";

// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return(
    <div className="itemCard">
        <div className="image-container">
            <img src={props.image} />
        </div>
        <div className="desc-container">
            <div className="name">{props.name}</div>
            <div className="desc">{props.desc}</div>
            <div className="price">${props.price}</div>
            <button onClick={props.addToCart} className="addToCart">
            Add to Cart
            </button>
        </div>
    </div>
    )
}