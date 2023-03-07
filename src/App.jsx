import React from "react";
import Heading from "./Components/Heading.jsx";
import TouristInfoCards from "./Components/TouristInfoCards.jsx";
import Footer from "./Components/Footer.jsx";
import cities from "./Components/City.jsx";
import Bookings from "./Components/Bookings.jsx";
import "./App.css";
import Restaurant from "./Components/Restaurant";

//footer

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => {
  return(

  <div className="App">
    <Heading />
    {/* <SearchResults /> */}
    <TouristInfoCards cities={cities} />
    <Bookings />
    <Restaurant />
    <Footer footer={footer} />
  </div>
  );
}
  

export default App;
