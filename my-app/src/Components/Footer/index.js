import React from 'react'

export default function Footer(props) {
    const {color, size} = props;
  return (
    <>
      <div style={{color: color, fontSize: size}}>Footer{color}{size}</div>
    </>
  );
}