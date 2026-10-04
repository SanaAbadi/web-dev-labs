import Card from "./card";
import listings from "../data/data";

function CardContainer() {
  return (
    <div className="card-container">
      {listings.map((listing) => (
        <Card
          key={listing.id}
          pic={listing.pic}
          country={listing.country}
          location={listing.location}
          rating={listing.rating}
          price={listing.price}
        />
      ))}
    </div>
  );
}

export default CardContainer;