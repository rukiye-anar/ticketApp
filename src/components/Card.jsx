
function Card(props) {
  return (
    <div className="card-component">
      <div className="card">
         <img src={props.img}/>
        <p>{props.header}</p>
        <p>{props.date}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
export default Card;
