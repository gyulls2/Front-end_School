import React from 'react';

function ListRender() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

const unvisited = {border:"1px solid black"}
const visited = {border:"1px solid black", background:"blue", color:"white"}


  return (
    <div>
      {list.map(item=>(
        <div key={item.no} style={item.visited ? visited : unvisited}>{item.area}</div>
      ))}
    </div>
  );
}

export default ListRender;