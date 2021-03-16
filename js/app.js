document.addEventListener('DOMContentLoaded', () => {
    const random = getRamdomInt(1, 151)
    fetchData(random)
})
const getRamdomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data);

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            name: data.name,
            hp: data.stats[0].base_stat,
            xp: data.base_experience,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            special_attack: data.stats[3].base_stat,
        }
        pintarCard(pokemon)
    }
    catch (error) {
        console.log(error);
    }
}

const pintarCard = (pokemon) => {
    const flex = document.querySelector('.flex')
    const template = document.getElementById('template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.name} <span> ${pokemon.hp} HP</span>`
    clone.querySelector('.card-body-text').textContent = `${pokemon.xp} EXP`

    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.attack
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.special_attack
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defense

    fragment.appendChild(clone)
    flex.appendChild(fragment)


}

