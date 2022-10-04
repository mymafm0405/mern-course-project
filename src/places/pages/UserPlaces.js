import React from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../components/PlacesList";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg",
    title: "Pyramids Of Giza",
    discription: "It is one of the seven wonders!",
    address: "In Giza somewhere in Egypt",
    location: {
      long: "000",
      lat: "000",
    },
    creator: "u1",
  },
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1200px-Pyramids_of_the_Giza_Necropolis.jpg",
    title: "Pyramids Of Giza",
    discription: "It is one of the seven wonders!",
    address: "In Giza somewhere in Egypt",
    location: {
      long: "000",
      lat: "000",
    },
    creator: "u1",
  },
];
export default function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((pl) => pl.creator === userId);
  return <PlacesList items={loadedPlaces} />;
}
