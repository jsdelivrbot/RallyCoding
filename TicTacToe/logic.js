class gameFlow {
  constructor() {
    this.elements= {
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
    6:'',
    7:'',
    8:'',
    9:''
  };
  this.whoPlays='X';
  }
  

  checkWhoIsTheWinner(){
    if (this.elements[1] === this.elements[2] && this.elements[1]=== this.elements[3] &&this.elements[1]!== '') {
      return true;
    }
    else if (this.elements[4] === this.elements[5] && this.elements[4]=== this.elements[6] &&this.elements[4]!== '') {
      return true;
    }
    return false;
  }
}


const newGame = new gameFlow()
let elements = newGame.elements;

function elementSelected () {
 this.innerText = this.newGame.whoPlays;
 this.newGame.elements[this.id]=this.newGame.whoPlays;
 this.newGame.whoPlays= this.newGame.whoPlays === 'X'? 'O' : 'X';
 console.log(this.newGame.checkWhoIsTheWinner());
}(0,this.newGame);

function addClickEventToElements(newGame,...spaceElements) {
  return spaceElements.map((element)=>{
    element.newGame= newGame;
    return element.addEventListener('click', elementSelected);
  });
}


const spaceElements = document.querySelectorAll('.space') || [];
const elementsAdded =addClickEventToElements(newGame,...spaceElements);

setInterval(function(){
  //console.log(newGame.checkWhoIsTheWinner())
  for (var i = 1; i <= 9; i++) {
    let element =document.getElementById(`${i}`);
    
    console.log(element.innerText +"  id "+ i);
  };
}, 200);
