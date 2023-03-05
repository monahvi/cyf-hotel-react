import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults.jsx";
import data from "../data/fakeBookings.json";
import moment from "moment";

const Bookings = () => {
  const [bookings, setBookings] = useState(data);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div className="tbl-container">
          <table className="tbl">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>First name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Room id</th>
                <th>Check in date</th>
                <th>Check out date</th>
                <th>Nights</th>
              </tr>
            </thead>

            {data.map((item) => (
              <SearchResults
                key={item.id}
                id={item.id}
                title={item.title}
                firstName={item.firstName}
                surName={item.surName}
                email={item.email}
                roomId={item.roomId}
                checkInDate={item.checkInDate}
                checkOutDate={item.checkOutDate}
                nights={moment(item.checkOutDate).diff(
                  moment(item.checkInDate),
                  "days"
                )}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
