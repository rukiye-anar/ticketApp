
function Card(props) {
  return (
    <div className="card-component">
      <div className="card">
         <img src={props.img}/>
        <h2>{props.header}</h2>
        <p>{props.date}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
export default Card;
