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
            <a href="#" class="btn  favorite-item " btn-id="${item.id}"
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
  