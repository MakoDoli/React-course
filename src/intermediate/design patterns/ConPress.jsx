import React from "react";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";
//extract Container component
export default function Container() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;
  return <Listings data={data} />;
}

// separate Presentational component
export function Listings({ data }) {
  return (
    <ListingsGrid>
      {data.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
