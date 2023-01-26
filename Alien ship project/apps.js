// class Myships{
//   constructor(){
//   this.hull = 20
//   this.Firepower = 5
//   this.accuracy =.7
//   }
//  method(){

 


//   }
// }

// class AliensShip {
//   constructor(hull,firepower,accuracy){
//          this.hull = Math.floor(Math.random()*4 +3)
//          this.firepower = Math.floor(Math.random()*3 +2)
//          this.accuracy =  (Math.random()*(0.2)+0.6).toFixed(1)
//   }
// }
// const hullArr = [3,4,5,6];
// const firepowerArr = [2,3,4];
// const accuracyArr = [0.6,0.7,0.8]

// const alien = []
// for(let i = 0; i< 6;i++){


// }



// for(let i = 0; i < alien.length; i++){
//  if(Math.random()< alien[i].accuracy){
//     console.log('You have been hit!')
//  else if   
//  }
// }




// You attack the first alien ship  --->  function attack()
// loop   check  if ship ---> alive()  and attack()
// function attack or retreat
// if retreat() ---- > return   or end the game
// if all alienShips  === destroy   ----> you win
// if all myships   ===  destroy    ===> i loose




class Spaceship {
    constructor() {
        this.hull = 20
        this.firepower = 5
        this.accuracy = 0.7
    }
    attackAlien(index) {
        console.log('Spaceship is attacking aliens')

        console.log(alien[index].hull)
        if (Math.random() <= this.accuracy) {
            console.log('Attack aliens')
            alien[index].hull -= this.firepower
        } else {
            console.log("Spaceship attack has failed")
        }
    }
}


// const hullArr = [3, 4, 5, 6];   alien hull values
// const firepowrArr = [2, 3, 4]   alien fire power values
// const accuracyArr = [0.6, 0.7, 0.8]  alien accuracy values
// const randNum = Math.random()
// console.log(randNum)


class Alienship {
    constructor() {
        this.hull = Math.floor(Math.random() * 4 + 3)
        this.firepower = Math.floor(Math.random() * 3 + 2)
        this.accuracy = (Math.random() * (0.2) + 0.6).toFixed(1)
    }
     attackSpaceship() {
       console.log('Aliens are attacking spaceship')

         if (Math.random() <= this.accuracy) {
            console.log('Attack spaceship')
            spaceShip.hull -= this.firepower
        } else {
             console.log("Alien's attack has failed")
        }
     }
}


const alien = []
for (let i = 0; i < 6; i++) {
    const newAlienship = new Alienship()
    alien.push(newAlienship)
}

const spaceShip = new Spaceship()

console.log(alien);
console.log(spaceShip)


function battle() {
    let currentAlien = 0;
    while (spaceShip.hull > 0) {
        if (alien[currentAlien].hull <= 0) {
            console.log(`Alien ship ${currentAlien} is destroyed!`);
            currentAlien++;
            if (currentAlien === alien.length) {
                console.log("You win! All alien ships are destroyed!");
                return;
            }
            let retreat = confirm(`Do you want to attack alien ship ${currentAlien} or retreat?`);
            if (!retreat) {
                console.log("You retreat and the game is over.");
                return;
            }
        }
        spaceShip.attackAlien(currentAlien);
        if (alien[currentAlien].hull <= 0) {
            continue;
        }
        alien[currentAlien].attackSpaceship();
        if (spaceShip.hull <= 0) {
            console.log("You lose! Your spaceship is destroyed.");
            return;
        }
    }
}

battle();