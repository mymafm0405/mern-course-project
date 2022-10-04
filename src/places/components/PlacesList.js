import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import "./PlacesList.css";

export default function PlacesList({ items }) {
  if (items.length === 0) {
    return (
      <Card>
        <h2>No places found</h2>
        <button>Share place</button>
      </Card>
    );
  }
  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
}
