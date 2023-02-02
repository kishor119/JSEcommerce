let selectedFavListArray=[]

function getFavoriteItem(){
  let cardsContainer=document.getElementById("containerRow");

  let favItem=cardsContainer.querySelectorAll(".favorite-item");

  favItem.forEach(function(eachFavIcon){

    eachFavIcon.addEventListener("click",function(event){

      let target=event.target;
      let favBtn=target.closest(".favorite-item")

      const selectedFavItemId= favBtn.getAttribute("btn-id");
  
      let selectedItemIndex=selectedFavListArray.indexOf(selectedFavItemId)
      let toggle=eachFavIcon.querySelector(".material-icons-outlined")
      let iconColor=eachFavIcon.querySelector(".favorite-item")
  
        if(selectedItemIndex != -1){
          // item already in list should remove filled color
          
          selectedFavListArray.splice(selectedItemIndex,1);
        //  toggle.innerText="favorite_border"
        toggle.innerText="favorite_border"
         toggle.classList.add("text-dark")

        }
        else{
          // ietm not in list you should add item to array and color filled
          selectedFavListArray.push(selectedFavItemId);
          toggle.innerText="favorite";
          toggle.classList.remove("text-dark")
          toggle.classList.add("text-danger");
          
          
        }
  
          console.log(selectedFavListArray)
        wishListCount.textContent=selectedFavListArray.length;
  
  
  })
    
  });

}
