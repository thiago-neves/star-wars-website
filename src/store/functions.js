module.exports = {
    getFilms(object) {
        object.forEach((film, i) => {
            this.$store.state.films.forEach(arr => {
                arr.filter(e => {
                    if (film == e.url) object[i] = e.title
                })
            })
        })
    },
    getPeople(object) {
        object.forEach((person, i) => {
            this.$store.state.people.forEach(arr => {
                arr.filter(e => {
                    if (person == e.url) object[i] = e.name
                })
            })
        })
    },
    getPlanets(object) {
        object.forEach((planet, i) => {
            this.$store.state.planets.forEach(arr => {
                arr.filter(e => {
                    if (planet == e.url) object[i] = e.name
                })
            })
        })
    },
    getSpecies(object) {
        object.forEach((specie, i) => {
            this.$store.state.species.forEach(arr => {
                arr.filter(e => {
                    if (specie == e.url) object[i] = e.name
                })
            })
        })
    },
}