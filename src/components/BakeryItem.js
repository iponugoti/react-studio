// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return(
    <div> 
      <h2>
          {props.name}
      </h2>        
      <img src={props.image} alt = {props.name} class="preview"></img>
    </div>
    )
}