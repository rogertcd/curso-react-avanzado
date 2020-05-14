import React from 'react';
import {ListofCategories} from "./components/ListOfCategories";
import {GlobalStyle} from "./styles/GlobalStyles";
import {ListOfPhotoCard} from "./components/ListOfPhotoCards";
import {Logo} from "./components/Logo";

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListofCategories />
    <ListOfPhotoCard />
  </div>
);
