const grid = document.querySelector(".grid")
const blockwidth = 100
const blockheight = 20
const boardWidth = 560



const userStart = [230,10]
let currentPosition = userStart

const ballStart = [270,40]
let ballCurrentPosition = ballStart
//block maker 
class Block {
 constructor(xAis,yAxis){

    this.bottomLeft = [xAis, yAxis]
    this.bottomRight = [xAis + blockwidth, yAxis]
    this.topleft=[xAis,yAxis+blockheight]
    this.topRight=[xAis + blockwidth, yAxis + blockheight]
   }
 }

const blocks = [new Block (10,270),
                new Block (120,270),
                new Block (230,270),
                new Block (340,270),
                new Block (450,270),
                new Block (10,240),
                new Block (120,240),
                new Block (230,240),
                new Block (340,240),
                new Block (450,240),
                new Block (10,210),
                new Block (120,210),
                new Block (230,210),
                new Block (340,210),
                new Block (450,210),
]

//console.log(blocks[0])

function moreBlocks(){
  for(let i = 0; i < blocks.length; i++){
   const block = document.createElement("div")
    block.classList.add('block')
    grid.appendChild(block)
    block.style.left= blocks[i].bottomLeft[0] +'px'
    block.style.bottom= blocks[i].bottomLeft[1] +'px'
    grid.appendChild(block)
  }
}
 moreBlocks()
 //User
 const user = document.createElement('div')
 user.classList.add('user')
 relocate()
 grid.appendChild(user)
//console.log(user)


//relocate
function relocate(){
 user.style.left = currentPosition[0]+'px'
 user.style.bottom = currentPosition[1]+'px'
}
function Ballrelocate(){
  ballCurrentPosition[1]+'px'
  ballCurrentPosition[0]+'px'
}

//movement
function movement(e){
   switch(e.key){
  case'ArrowLeft':
    if(currentPosition[0] >0){
    currentPosition[0] -= 10
    relocate()
   } 
    break;
  case'ArrowRight':
   if (currentPosition[0] < boardWidth-blockwidth){
    currentPosition[0] +=10
    relocate()
   }
   break;
   }
}
document.addEventListener('keydown',movement)

//ball
const ball = document.createElement('div')
ball.classList.add('ball')
ball.style.left = ballCurrentPosition[0]+'px'
ball.style.bottom = ballCurrentPosition[1]+'px'
grid.appendChild(ball)
 


//ball Movement
function moveBall(){
ballCurrentPosition[0] +=2
ballCurrentPosition[1] +=2
Ballrelocate()

}