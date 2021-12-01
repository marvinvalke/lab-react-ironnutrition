import {useState} from 'react'


function FoodBox(props) {

  const [quantity, setQuantity] = useState(0)
  const {food, addToList} = props
  
  function handleQty(event){
    setQuantity(event.target.value)
  }


  return <div>
      <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.food.image} alt=""/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.food.name}</strong> <br />
          <small>{props.food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input onChange={handleQty} className="input" type="number" value={quantity} />
        </div>
        <div className="control">
          <button onClick={()=>{addToList(food, quantity)}}  className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>

  </div>;
}

export default FoodBox;
