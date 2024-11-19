let CatFurl = "https://meowfacts.herokuapp.com/"



let input = prompt("I'm an IA that shows you cats and a fact about them wht type of could would you like to see? ")
async function Catfunction(){
const response = await fetch(CatFurl);
const data = await response.json();
console.log(data.data[0])
}

Catfunction() 

const prompt = require(‘prompt-sync’)()



let GBTurl = "https://api.openai.com/v1/images/generations"

async function createPlaylist(playlistData) {
  
    const options = {
  method:"POST",
  headers:{
        Authorization:"Bearer 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",
    "Content-Type": "application/json",
  },
  body:JSON.stringify(playlistData)
}

  const response = await fetch(GBTurl,options);  
  const data = await response.json();
  console.log(data)
  return data; 
  }

  createPlaylist({
    prompt: "cat"  })
 

