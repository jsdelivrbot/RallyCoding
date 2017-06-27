import React,{Component} from 'react';


function Denomination(props){

    return(
    <ul className="list-group">
      {createListElements(props.elements,props.setActionto)}
    </ul>
  )
}
function createListElements(elements=[],setActionto){

  return elements.map((element)=>{

    return(
      <li key={element} className="list-group-item">
        <input key={element} type="number" onChange={(event)=>setActionto(element,event.target.value)}/>
        {element}
      </li>
    );
  });
}
export default Denomination;
