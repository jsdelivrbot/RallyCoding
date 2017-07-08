function initialGame() {
  this.elements= {
    l1:'',
    l2:'',
    l3:'',
    l4:'',
    l5:'',
    l6:'',
    l7:'',
    l8:'',
    l9:''
  }
}
class gameFlow extends initialGame {
  constructor() {
    super();
  }
}
function elementSelected() {
  console.log(this.id);
}

function addClickEventToElements(...spaceElements) {
  return spaceElements.map((element)=>{
    return element.addEventListener('click', elementSelected);
  });
}

let elements = new gameFlow().elements;
//console.log(elements);

const spaceElements = document.querySelectorAll('.space') || [];

const elementsAdded =addClickEventToElements(...spaceElements);
