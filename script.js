console.log("working")

const API="https://65ede37908706c584d9ad0d7.mockapi.io/naruto"
const ClassName=document.querySelector("#naruto-data")
//reading all data
function getNarutoQuotes(){
      fetch(API,{
        method:"GET",
      })
      .then((res) =>res.json())
      .then((quotes)=>renderAllData(quotes))
      .catch((err)=>console.log("error",err))
} 
getNarutoQuotes();

//render the data  
function aniWatch(naruto){
    const animeDiv= document.createElement("div");
    animeDiv.ClassName="card1";
    animeDiv.innerHTML +=`
 <div class=" row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
    <div class="card-header">${naruto.id}</div>
      <div class="card-body">
       <h6 class="card-text">${naruto.quote}</h6>
        <h2 class="card-title">${naruto.character}</h2>
      </div
      </div>
    </div>
  </div>
    `;
    ClassName.append(animeDiv);
}     

function renderAllData(quote){
    quote.forEach
        ((render)=> {
        aniWatch(render)
    });
}