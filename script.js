
//Seleziono i bottoni con cui farò apparre i modali
let modal=document.getElementById("ModalBody")//modale
let button=document.getElementsByClassName("ModalClass")//bottoni per far vedere il modale

//Array con tutte le informazioni per popolare il modale 
const TextProgetto=[
    {
       id:1,
        title:"Medium clone",
        img:"/Img/Medium.com.png",
        description:"Clone della piattaforma Medium attraverso CSS e Flexbox",
        github:"https://github.com/EricaDianaa/Clone-Medium",
        skils:"HTML, CSS",
        video:""
    }, {
       id:2,
        title:"Netflix clone",
        img:"/Img/Netflix.png",
        description:"Clone della piattaforma Netflix con CSS e Bootstrap",
        github:"https://github.com/EricaDianaa/Netflix-clone",
        skils:"HTML,CSS,BOOTSTRAP",
        video:""
    }, {
       id:3,
        title:"Spotify clone",
        img:"/Img/Spotify clone.png",
        description:"Clone di Spotify attraverso CSS, Bootstrap e Javascript usando un API-REST.Creato con funzionalità Javascript come riproduzione della musica per ogni artista, ricerca artisti o musica specifica, possibilità di cercare un album e di visualizzarne i dettagli.",
        github:"https://github.com/giov-scar/U2-W8-BW2-FS0323-TEAM5",
        skils:"HTML, CSS, Javascript, SCSS,BOOTSTRAP",
        video:""
    }, {
       id:4,
        title:"Pizzeria",
        img:"/Img/Pizzeria.png",
        description:"Creazione di un sito per una pizzeria attraverso .NET ASP.NET MVC e Entity-Framework e l'utilizzo di AJAX, Jquery, CSS e BOOTSTRAP. Il sito prevede la pagina menu con tutte le pizze, pagina dettaglio per ogni pizza, la possibilità di acquistare delle pizze aggiungendole al carrello. La parte admin invece ha la possibilità di vedere tutti gli ordini, i clienti e il resoconto delle giornate con relativo incasso.",
        github:"https://github.com/EricaDianaa/w16-1",
        skils:"HTML, CSS, C#, ASP.NET MVC, AJAX, JQUERY,BOOTSTRAP",
        video:""
    }, {
       id:5,
        title:"Clinica veterinaria",
        img:"/Img/Clinica.png",
        description:"Creazione di un sito per una clinica veterinaria attraverso .NET, ASP.NET MVC e Entity-Framework e l'utilizzo di AJAX, Jquery, CSS e BOOTSTRAP.Il sito prevede la possibilità di ricercare un animale smarrito attraverso il microchip, prenotazione di un animale, possibilità di vedere le visite effettuate. La Clinica ha un area riservata anche alle farmacie.",
        github:"https://github.com/EricaDianaa/ClinicaVeterinaria",
        skils:"HTML, CSS, C#, ASP.NET MVC, AJAX,Entity-framework, JQUERY,BOOTSTRAP",
        video:""
    }, {
       id:6,
        title:"TourSardigna",
        img:"/Img/TourSardigna.png",
        description:"TourSardigna è un sito per eventi in tutta la Sardegna come musei, feste, spiagge e tanto altro. L’obiettivo è offrire agli utenti un modo semplice e veloce per organizzare giornate uniche, senza stress eccessivo. Allo stesso tempo, mira a fornire alle aziende uno strumento efficace per promuovere i propri eventi, raggiungendo il più ampio pubblico possibile. Il progetto è creato tramite l'utilizzo dei seguenti linguaggi: .NET, C#, ASP.NET MVC, Entity-Framework, AJAX, Jquery, CSS, Bootstrap, SQL,LINQ.Funzionalità:1. Registrazione utenti e aziende e login ;   2. Homepage con eventi creati dall'amministratore o da un azienda; 3. Pagina di dettaglio per ogni evento con relative recensioni;4. Possibilità di acquistare un biglietto per un evento;5. Possibilità di salvare un evento in una lista di preferiti;6. Possibilità di lasciare una recensione agli eventi; 7. Gestione degli eventi per Amministratore e Aziende con Create, Edit e Delete;8. Pagina di resoconto dei guadagni con l'aggiunta di grafici.",
        github:"https://github.com/EricaDianaa/Capstone",
        skils:"HTML, CSS, C#, ASP.NET MVC,,Entity-framework AJAX, JQUERY,BOOTSTRAP",
        video:""
    }, {
        id:7,
        title:"TheJobSearch",
        img:"/Img/TheJobSearch.png",
        description:"",
        github:"https://github.com/EricaDianaa/TheJobSearch",
        skils:"HTML, CSS, C#, ASP.NET MVC,,Entity-framework AJAX, JQUERY,BOOTSTRAP",
        video:""
    }
]

   
//Selezione div dei progetti
let Progetti=document.getElementById("rowProgetti")
TextProgetto.forEach(text => {
   
//inserisco nella row html tutti i miei progetti
let element=document.createElement("div")
element.classList.add("col-12","col-sm-6","col-md-4", "col-lg-3","mt-2", "border", "border-4","border-black")

element.innerHTML=`
<h4 class="text-center">${text.title}</h4>
<img
  class="w-100 border border-2 border-success"
  src="${text.img}"
  alt=""
/>
<svg
  xmlns="http://www.w3.org/2000/svg"
  height="16"
  width="15.5"
  viewBox="0 0 496 512"
>
  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
  <path
    fill="#0006ad"
    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
  />
</svg>
<a href="${text.github}">GitHub</a>
<button
  id="${text.id}"
  type="button"
  class="btn btn-primary ModalClass"
  data-bs-toggle="modal"
  data-bs-target="#ModalDescription"
>
  Progetto
</button>

`
Progetti.appendChild(element)
})


//Trasformo button in un array per uttilizzare metodi ecc
let buttonarray=Array.from(button);
buttonarray.forEach(e=>{
          e.addEventListener("click",function(){
      TextProgetto.forEach(text => {
        //Inserisco nel modale tutte le informazioni dell'array con l'id uguale a uno dei bottoni appena clickati
        if(text.id==e.id){
              modal.innerHTML=`<h3 class='text-dark'>${text.title}</h3>
              <img
              class="w-100 border border-2 border-success"
              src="${text.img}"
              alt=""
            />
            <p class='text-dark'>${text.description}</p>
            <p class='text-dark'>${text.skils}</p>
            <a href="${text.github}">GitHub</a>
              `    
        }

     
      });
    }) 
   

})
