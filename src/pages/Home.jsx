import { tickets } from "/src/tickets";
import Card from "/src/components/Card";
import "/src/App.css";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

function Home(){
  return (
    <div>
    
      <div className="sorting-component">
        <Link to={"/"}>
          <p>
            Sıralama <FaArrowDown />
          </p>
        </Link>
        <div className="sorting">
          <Link>Öne çıkanlar</Link>
          <Link>En Yeniler</Link>
          <Link>Yakında</Link>
        </div>
      </div>
      <div className="card-components">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            img={ticket.img}
            header={ticket.header}
            date={ticket.date}
            price={ticket.price}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
