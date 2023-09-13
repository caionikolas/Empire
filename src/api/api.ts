export default async function getData(){
    const res = await fetch("https://api.brchallenges.com/api/empire-burger/menu")

    if(!res.ok){
        throw new Error("Falha ao carregar API")
    }

    const data = await res.json()
    return data
}