import React from "react";
import ListItem from "../ListItem/ListItem";

//dummy data
let items = [];
for (let i = 0; i < 3; i++) {
  items.push({
    name: `Item Number ${i}`,
    description: `This is the description this is the desc this is ${i}`,
    createdDate: new Date().toLocaleDateString(),
  });
}

const List = () => {
  return (
    <div>
      {items.map((item) => (
        <ListItem
          key={item.name}
          name={item.name}
          description={item.description}
          createdDate={item.createdDate}
        />
      ))}
    </div>
  );
};

export default List;
