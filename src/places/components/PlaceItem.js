import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";

import "./PlaceItems.css";

export default function PlaceItem({ place }) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div placeholder="place-item__image">
          <img src={place.imageUrl} alt={place.title} />
        </div>
        <div className="place-item__info">
          <h2>{place.title}</h2>
          <h3>{place.address}</h3>
          <p>{place.discription}</p>
        </div>
        <div className="place-item__actions">
          <Button variant="outline-danger">View on map</Button>
          <Button variant="outline-secondary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card>
    </li>
  );
}
