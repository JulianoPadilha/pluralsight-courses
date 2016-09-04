function addDnDHandlers() {

    var coffeeimages = document.getElementsByClassName("productarticlewide");
    var shoppingCartDropzone = document.getElementById("shoppingcart");
    //initialize the cart
    var shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];

    var Cart = (function () {
        this.coffees = new Array();
    });

    var Coffee = (function (id, price) {
        this.coffeeId = id;
        this.price = price;
    });

    var currentCart = null;
    //if (Modernizr.localstorage) {//TODO
    currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        createEmptyCart();
    }

    UpdateShoppingCartUI();
    currentCart.addCoffee = function (coffee) {
        currentCart.coffees.push(coffee);

        // insert the new cart into the storage as string
        localStorage.setItem('cart', JSON.stringify(currentCart));

    }
    //}

   

    for (var i = 0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    shoppingCartDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false;
    }, false);

    shoppingCartDropzone.addEventListener("drop", function (ev) {
        if (ev.stopPropagation)
            ev.stopPropagation();

        var coffeeId = ev.dataTransfer.getData("Text");
        var element = document.getElementById(coffeeId);

        addCoffeeToShoppingCart(element, coffeeId);

        
        ev.stopPropagation();

        return false; 
    }, false);

    function addCoffeeToShoppingCart(item, id) {
        var price = item.getAttribute("data-price");

        var coffee = new Coffee(id, price);
        currentCart.addCoffee(coffee);

        UpdateShoppingCartUI();
    };

    function createEmptyCart() {
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(new Cart()));
        currentCart = JSON.parse(localStorage.getItem("cart"));
    }

    function UpdateShoppingCartUI() {

        shoppingcart.innerHTML = "";
        for(var i = 0; i < currentCart.coffees.length; i++)
        {
            var liElement = document.createElement('li');
            liElement.innerHTML = currentCart.coffees[i].coffeeId + " " + currentCart.coffees[i].price;
            shoppingcart.appendChild(liElement);
        }
    };
}