// Elements
const BASE_URL = "https://pokeapi.co/api/v2";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const statusEl = document.getElementById("status");
const cardEl = document.getElementById("pokemon-card");
const teamEl = document.getElementById("team");

const error = document.getElementById("error")

const pikachu = (user) => {
    document.getElementById("img").src = user.sprites.versions["generation-ii"].crystal.front_default;
    document.getElementById("pId").textContent = "Pokedex Number: " + user.id;
    document.getElementById("pokeName").textContent = user.name.toUpperCase();
    document.getElementById("height").textContent = "Height: " + user.height / 10 + " m";
    document.getElementById("weight").textContent = "Weight: " + user.weight / 10 + " kg";
    document.getElementById("types").textContent = "Type: " + user.types[0].type.name + " / " + user.types[1].type.name;
    document.getElementById("abilities").textContent = "Abilities: " + user.abilities[0].ability.name + " (Normal Ability) and " + user.abilities[1].ability.name + " (Hidden Ability)";
    document.getElementById("baseHP").textContent = "HP: " + user.stats[0].base_stat;
    document.getElementById("baseATK").textContent = "ATK: " + user.stats[1].base_stat;
    document.getElementById("baseDEF").textContent = "DEF: " + user.stats[2].base_stat;
    document.getElementById("baseSPATK").textContent = "SP ATK: " + user.stats[3].base_stat;
    document.getElementById("baseSPDEF").textContent = "SP DEF: " + user.stats[4].base_stat;
    document.getElementById("baseSpeed").textContent = "Speed: " + user.stats[5].base_stat;
    
}

// Functions
async function getPokemon(event){

    event.preventDefault();

    const pName = input.value.trim().toLowerCase();
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}`)

    const user = await response.json();

    if(user.id >= 1 && user.id <= 152 || user.name)
    {
        console.log(user)
        pikachu(user)
        cardEl.classList.remove("hide");
        error.classList.add("hide2");
    }
    else
    {
        console.log("There seems to be a problem here...")
        cardEl.classList.add("hide");
        error.classList.remove("hide2");   
    }

}

// Listeners
form.addEventListener("submit", getPokemon);
//On Page Load

