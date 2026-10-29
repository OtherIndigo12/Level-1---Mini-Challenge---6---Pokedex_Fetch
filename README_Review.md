if (input.value === "pikachu" || input.value === "25")
    {
        const p = await getPokemon("pikachu");
        console.log(p.sprites, p.id, p.name, p.height, p.weight, p.types, p.abilities, p.stats)   
        pikachu(p); 

        cardEl.classList.remove("hide");
        error.classList.add("hide2");
    }
    else
    {
        console.log("There seems to be a problem here...")
        cardEl.classList.add("hide");
        error.classList.remove("hide2");
    }