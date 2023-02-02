const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector('#score')

const blockwidth = 100
const blockheight = 20
const boardWidth = 1100
const boardHeight =500
const ballDiameter = 20
let timerId 
let xDirection = -2
let yDirection = 2
let score = 0


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

const blocks = [new Block (10,470),
                new Block (120,470),
                new Block (230,470),
                new Block (340,470),
                new Block (450,470),
                new Block (10,440),
                new Block (120,440),
                new Block (230,440),
                new Block (340,440),
                new Block (450,440),
                new Block (10,410),
                new Block (120,410),
                new Block (230,410),
                new Block (340,410),
                new Block (450,410),
                new Block (560,470),
                new Block (560,440),
                new Block (560,410),
                new Block (670,470),
                new Block (670,440),
                new Block (670,410),
                new Block (780,470),
                new Block (780,440),
                new Block (780,410),
                new Block (890,470),
                new Block (890,440),
                new Block (890,410),
                new Block (1000,470),
                new Block (1000,440),
                new Block (1000,410),
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
 //userCreated
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
  ball.style.left=ballCurrentPosition[0]+'px'
  ball.style.bottom=ballCurrentPosition[1]+'px'
  
}

//player1Movement
function moveMent(e){
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
document.addEventListener('keydown',moveMent)

//createdBall
const ball = document.createElement('div')
 ball.classList.add('ball')
 ball.style.left = ballCurrentPosition[0]+'px'
 ball.style.bottom = ballCurrentPosition[1]+'px'
grid.appendChild(ball)
 

//ballMovement
function moveBall(){
ballCurrentPosition[0] +=xDirection
ballCurrentPosition[1] +=yDirection
 Ballrelocate()
 checkForWall()
}
timerId=setInterval(moveBall,20)

function checkForWall(){
  // check for block collisions
   for(let i= 0; i< blocks.length; i++){
    if(
      (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
      ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topleft[1])
    ){
    const allBlocks = Array.from(document.querySelectorAll('.block'))
    allBlocks[i].classList.remove('block')
    blocks.splice(i, 1)
    changeDirection()
    score++
    scoreDisplay.innerHTML= score
    }
 //check for win
    if (blocks.length===0){
      scoreDisplay.innerHTML='YOU WIN'
      clearInterval(timerId)
      document.removeEventListener('keydown',moveMent) 
      }  
   }
  //  check for wall collisions
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
      ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
      ballCurrentPosition[0] <= 0
      ){  
        changeDirection()
      }
 //check for player collisions
    if(
      (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0]< currentPosition[0] + blockwidth) && 
      (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1]< currentPosition[1] + blockheight))
     {
      changeDirection()
    }
  
  //check for game over 
  if(ballCurrentPosition[1] <= 0){
    clearInterval(timerId)
    scoreDisplay.innerHTML= 'You Lose'
    document.removeEventListener('keydown',moveMent)
  }  
}

//check for walls
 function changeDirection(){
     if (xDirection === 2 && yDirection === 2){
         yDirection =-2
         return
     }
     if(xDirection === 2 && yDirection === -2){
        xDirection =-2
        return
     }
     if (xDirection === -2 && yDirection === -2){
        yDirection = 2
        return
     }
     if(xDirection === -2 && yDirection === 2){
       xDirection = 2
      return
  }
 }
function startButton(){
 const start = document.querySelector('.startButton')
 start.addEventListener('click',function(){

 });
}
startButton()