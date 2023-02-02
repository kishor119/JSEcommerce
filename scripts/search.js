SearchInp.addEventListener("keyup" , function(event){

    let EnteredSearchValue=SearchInp.value 
          // console.log(EnteredSearchValue);
  
    EnteredSearchValue=EnteredSearchValue.toLowerCase()
  
  
     let filteredCards=items.filter(function(card){
   
       return card.title.toLowerCase().includes(EnteredSearchValue)
     })
  
     console.log(filteredCards);
     renderTotalCards(filteredCards)
   })
   