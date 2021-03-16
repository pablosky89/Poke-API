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
        pintarCard(data)
    }
    catch (error) {
        console.log(error);
    }
}

const pintarCard = (pokemon) => {
    const flex = document.querySelector('.flex')
    const template = document.getElementById('template-card').content
    const fragment = document.createDocumentFragment()



}

