import React, { useState } from "react";

export default function MultiOpen(props) {
  const { item, index } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div key={`item-${index}`} onClick={() => setIsActive(!isActive)}>
      <div>{item.title}</div>
      {isActive && <div>{item.content}</div>}
    </div>
  );
}
