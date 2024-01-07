let element = document.getElementById('ptag')

async function fetchData(){
    // below statement returns discord-status as online,
    // if you were to change it to offline after the execution, it wont matter as i have no way of knowing the changes you have made, unless i call
    // this fetch request again
    const data = await fetch('https://api.lanyard.rest/v1/users/724642274994290688')
    const discord = await data.json()


    const discordId = discord.data.discord_status
    discordId === 'online' ? element.src = 'https://lanyard.cnrad.dev/api/724642274994290688?borderRadius=5px&idleMessage=Channel%20Website&bg=a&animated=true' : '' 


}
fetchData()
