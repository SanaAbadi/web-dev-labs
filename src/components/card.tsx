interface CardProps {
  pic: string;
  country: string;
  location: string;
  rating: number;
  price: number;
}

function Cardfn({ pic, country, location, rating, price }: CardProps) {
   return (
    <div className="card">
      <img src={pic} alt={location} className="card-img" />

      <div className="card-body">
        <h3 className="card-country">{country}</h3>
        <p className="card-location">{location}</p>
        <p
          className="card-rating"
          style={{ color: rating > 4.0 ? "green" : "red" }}
        >
          {rating.toFixed(1)}★
        </p>
        <p className="card-price">${price}/night</p>
      </div>
    </div>
  );
}
export default Cardfn;