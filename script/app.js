

// Create parent ship with attack method to represent both friendly and enemy attacks.

class Spaceship {
    constructor(){
    }
    // Create attack method to initiate accuracy upon attack.
    attack(attE, attR){
        if (Math.random() < attR.accuracy){
            attE.hull = attE.hull - attR.firepower;
        }
        return attE.hull;
    }
};

// Create 'USS Assembly'
// Create range properties

class USSAssembly {
    constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7;
    }
};

// Create 'Alien Spaceship'.
// Create Random range properties
class AlienSpaceship {
    constructor(name) {
        this.name = name;
        this.hull = this.life();
        this.firepower = this.strength();
        this.accuracy = this.acc();
    }

    life() {
        const min = 3;
        const max = 7;
       let num = Math.floor(Math.random() * (max - min) + min);
       return num;
     }

    strength() {
        const min = 2;
        const max = 4;
       let num = Math.floor(Math.random() * (max - min) + min);
       return num;
     }

    acc() {
        const min = .6;
        const max = .8;
       let num = Math.random() * (max - min) + min;
       return num;
     }
    }



// Create 'Game' class object
    class Game {
        constructor(mother, friendly, alienFleet) {
            this.mother = mother;
            this.friendly = friendly;
            this.alienFleet = alienFleet;
            this.gamePlay = this.battle();
        }

        battle() {
        
        
            for (let i = 0; i < alienFleet.length; i++) {
                console.log("The USS Assembly Attacks the Alien Ship!");

                while (alienFleet[i].hull > 0 && this.friendly.hull > 0) {
                    // Create battle sequence of uss attacking alien ship
                    this.mother.attack(alienFleet[i], uss);
                    // Create battle sequence of alien attacking  USS Assembly
                    this.mother.attack(uss, alienFleet[i]);
                    // Log Alien and USS Assembly remaining hull value 
                    console.log('USS Assembly ',this.friendly.hull, 'Alien Ship: ', alienFleet[i].hull);
                    }
                        
                        const gameTime = prompt(`You Have Defeated ${alienFleet[i].name}`, "To continue press OK, To quit press Cancel")
                        if (gameTime === null || gameTime === '' || gameTime === undefined) {
                            break;
                        }
                        if (alienFleet[i].hull > 0 && this.friendly.hull <= 0) {
                            console.log("You Have Been Defeated By The Alien Fleet!");
                        } else {
                            if (alienFleet[i].hull <= 0 && this.friendly.hull > 0) {
                            console.log('You Have Emerged Victorious!')
                            }
                        }
            }

        }

    }


const uss = new USSAssembly();

const alienFleet = [];

for (let i = 1; i <= 6; i++) {
    const alienShip = new AlienSpaceship(`ship ${i}`)
    alienFleet.push((alienShip));
}
const motherShip = new Spaceship();

const battleTime = new Game(motherShip, uss, alienFleet);




