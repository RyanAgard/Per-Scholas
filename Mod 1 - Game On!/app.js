const grid = document.querySelector(".grid")
const blockwidth = 100
const blockheight = 20


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

console.log(blocks[0])

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