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
    getValue(this)
    return(
      <li key={element} className="list-group-item">
        <input key={element} type="number" onChange={()=>setActionto(element)}/>
        {element}
      </li>
    );
  });
}
getValue(inputElement){
  console.log(inputElement);
    return 10;
  }
export default Denomination;
