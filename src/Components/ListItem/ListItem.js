import React from "react";

const ListItem = ({ name, description, createdDate }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{createdDate}</p>
    </div>
  );
};

export default ListItem;
