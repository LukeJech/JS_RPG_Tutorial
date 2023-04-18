let xp = 0; 
let health = 100;
let gold = 500; 
let current_weapon = 0;
let fighting;
let monster_health;
let inventory= ["stick"]; 

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
        name: "stick",
        damage: 10,
    },
    {
        name: "mace",
        damage: 30,
    },
    {
        name: "katana",
        damage: 50,
    },
    {
        name: "Sword of Jalapeno",
        damage: 100,
    },
];

const locations = [
    {
        name: "town square", 
        "button text": ["Go to store", "Go to cave", "Fight Dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town squre. You see a sign that says\"store.\""
    }, 
    {
        name: "store", 
        "button text": ["Buy 10 health (10 gold)", "Buy Weapon (30 gold)", "Leave to Town"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You are in the store. Would you like to buy something?"
    },
    {
        name: "cave", 
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
]

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update (location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0])
}

function goStore() {
    update(locations[1])
}

function goCave() {
    update(locations[2])
}

function fightDragon() {
    console.log("Going to fight the Drag");
}

function buyHealth() {
   if (gold >= 10) {
        gold -= 10
        health += 10
        healthText.innerText = health
        goldText.innerText = gold
   } else {
        text.innerText = "You are too poor to buy a health potion!"
   }
}

function buyWeapon() {
    if (current_weapon < weapons.length-1) {
        if (gold >= 30) {
            gold -= 30
            current_weapon++
            goldText.innerText = gold
            let newWeapon = weapons[current_weapon].name
            text.innerText = "You now have a " + newWeapon + "."
            inventory.push(newWeapon)
            text.innerText += " In your inventory you have: " + inventory
        } else {
            text.innerText = "You wish you could buy a weapon like this!"
        }
    } else {
        text.innerText = "You already have the best weapon!"
    }
}

function fightSlime() {

}

function fightBeast() {
    
}
