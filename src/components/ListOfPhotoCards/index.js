import React from 'react';
import {PhotoCard} from "../PhotoCard";
import {photos} from "../../../api/db.json";

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        photos.map(photo => <li key={photo.id} id={photo.id}><PhotoCard {...photo} /></li>)
      }
    </ul>
  );
}
