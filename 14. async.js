
const callMe = async () => {
    try {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        let data = res.json()
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}