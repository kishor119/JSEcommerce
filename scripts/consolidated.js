let cardsContainer=document.getElementById("containerRow");
let SearchInp= document.getElementById("searchElem")
let wishListCount=document.getElementById("wishListCounter");
let favBtnColor=document.getElementById("wishlistIcon");



let items =[
    {
      id:1,
      title: "Macbook",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
      description:
        "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..",
      price: 600,
    },
    {
      id:2,
      title: "Iphone",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
      description:
        "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..",
      price: 123,
    },
    {
      id:3,
      title: "Apple cinema",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg",
      description:
        "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..",
      price: 110,
    },
    {
      id:4,
      title: "Epson",
      image:
        "https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
      description:
        "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..",
      price: 98,
    },
    {
      id:5,
        title: "Laptop",
        image:
          "https://www.notebookcheck.net/uploads/tx_nbc2/HPPavilion13-b__1__01.jpg",
        description:
          "12th Generation Intel® Core™ i5 processorWindows 11 Home39.6 cm (15.6) diagonal, FHD (1920 x 1080)Intel® Iris® Xᵉ Graphics8 GB DDR4-3200 MHz RAM (2 x 4 GB)1.74 kg Backlit KBD, Alexa built-in",
        price: 98,
      },
      
      
  ]

 

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
   let selectedFavListArray=[]

function getFavoriteItem(){
  let cardsContainer=document.getElementById("containerRow");

  let favItem=cardsContainer.querySelectorAll(".favorite-item");

  favItem.forEach(function(favIcon){

    favIcon.addEventListener("click",function(event){

      let target=event.target;
      let favBtn=target.closest(".favorite-item")

      const selectedFavItemId= favBtn.getAttribute("btn-id");
  
      let selectedItemIndex=selectedFavListArray.indexOf(selectedFavItemId)
      let toggle=favIcon.querySelector(".material-icons-outlined")
  
        if(selectedItemIndex != -1){
          // item already in list should remove filled color
          
          selectedFavListArray.splice(selectedItemIndex,1);
        toggle.innerText="favorite_border";
        toggle.classList.add("text-dark");
        

        }
        else{
          // ietm not in list you should add item to array and color filled
          selectedFavListArray.push(selectedFavItemId);
          toggle.innerText="favorite";
          toggle.classList.add("text-danger");
          toggle.classList.remove("text-dark")
          
        }
  
          console.log(selectedFavListArray)
        wishListCount.textContent=selectedFavListArray.length;
  
  
  })
    
  });

}
function renderTotalCards(products){
    let totalCards="";
      for(let i=0;i<products.length;i++){
  
          totalCards=totalCards+renderSingleCrad(products[i])
  
      }
  
      cardsContainer.innerHTML=totalCards;
      getFavoriteItem();
  
  }
   
  
  
  function renderSingleCrad(item){
      return ` <div class="col-12 col-md-6 col-lg-3">
      <div class="card mb-3 p-1">
        <img
          src="${item.image}"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">"${item.title}"</h5>
          <p class="card-text">
         ${item.description}
          </p>
  
  
          <strong> <span class="material-icons-outlined fs-6 mt-3">
          currency_rupee
          </span>${item.price.toFixed(2)}</strong>
  
  
          <div class="btn-group mt-2 bg-light w-100">
            <a href="#" class="btn " aria-current="page"
              ><span class="material-icons-outlined mt-1">
                shopping_cart
              </span></a
            >
            <a href="#" class="btn  favorite-item" id="wishlistIcon" btn-id="${item.id}"
              ><span class="material-icons-outlined mt-1"  >
                favorite_border
              </span></a
            >
            <a href="#" class="btn"
              ><span class="material-icons-outlined mt-1">
                compare_arrows
              </span></a
            >
          </div>
        </div>
      </div>
    </div>`
  }
  
  renderTotalCards(items)
  