import React, { useState } from "react";

const SearchResults = (item) => {
  const [isSelected, setIsSelected] = useState(true);
  const colorHold = () => {
    setIsSelected(!isSelected);
  };
  return (
    <tbody>
      <tr
        style={
          isSelected ? { backgroundColor: "red" } : { backgroundColor: "green" }
        }
        onClick={colorHold}
      >
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.firstName}</td>
        <td>{item.surName}</td>
        <td>{item.email}</td>
        <td>{item.roomId}</td>
        <td>{item.checkInDate}</td>
        <td>{item.checkOutDate}</td>
        <td>{item.nights}</td>
      </tr>
    </tbody>
  );
};
export default SearchResults;
