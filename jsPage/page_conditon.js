var parentdiv = document.getElementById("showdata")
async function GetData() {
    var data = await fetch("../jsonpage/condition.json")
    var res = await data.json()
    var Data = res.slice(1, 33)
    // return Data
    showproduct(Data)
}
GetData()
function showproduct(product) {
    product.forEach((el, i, arr) => {
        var url = el.imageUrlStr.split(';')[0]
        var ProductBox = document.createElement("div")
        ProductBox.setAttribute("class", "productbox")

        var Product_img = document.createElement("div")
        Product_img.setAttribute("class", "product_img")

        var Product_text = document.createElement("div")
        Product_text.setAttribute("class", "product_text")

        var product_price = document.createElement("div")
        product_price.setAttribute("class", "product_price")

        var btn = document.createElement("button")
        btn.innerHTML = `Add to cart`
        btn.style.display = "block"
        btn.onclick = function () {
            AddToCart(el, i, arr)
        }
        var img = document.createElement("img")
        img.setAttribute("class", "imgs")
        img.src = url

        Product_img.append(img)

        var title = document.createElement("h5")
        title.innerHTML = el.title.slice(1, 20)

        var description = document.createElement("p")
        description.innerHTML = el.description.slice(1, 20)

        var categories = document.createElement("p")
        categories.innerHTML = el.categories.slice(1, 20)

        var productBrand = document.createElement("p")
        productBrand.innerHTML = el.productBrand

        var productFamily = document.createElement("p")
        productFamily.innerHTML = el.productFamily.slice(1, 20)

        var inStock = document.createElement("p")
        inStock.innerHTML = el.inStock

        var codAvailable = document.createElement("p")
        codAvailable.innerHTML = el.codAvailable

        var deliveryTime = document.createElement("p")
        deliveryTime.innerHTML = el.deliveryTime

        var color = document.createElement("p")
        color.innerHTML = el.color

        var keySpecsStr = document.createElement("p")
        keySpecsStr.innerHTML = el.keySpecsStr

        var detailedSpecsStr = document.createElement("p")
        detailedSpecsStr.innerHTML = el.detailedSpecsStr

        var sellerName = document.createElement("p")
        sellerName.innerHTML = el.sellerName

        var sellerAverageRating = document.createElement("p")
        sellerAverageRating.innerHTML = el.sellerAverageRating

        var sellerNoOfRatings = document.createElement("p")
        sellerNoOfRatings.innerHTML = el.sellerNoOfRatings

        var sellerNoOfReviews = document.createElement("p")
        sellerNoOfReviews.innerHTML = el.sellerNoOfReviews

        
        var discount = document.createElement("p")
        discount.innerHTML = el.discount
        var mrp = document.createElement("p")
        mrp.innerHTML = `MRP:  ${el.mrp}`

        var sellingPrice = document.createElement("p")
        sellingPrice.innerHTML = `selling price ${el.sellingPrice}`

        var specialPrice = document.createElement("p")
        specialPrice.innerHTML = `special price ${el.specialPrice}`

        Product_text.append(title, mrp, btn)

        ProductBox.append(Product_img, Product_text)

        parentdiv.append(ProductBox)
    })
}

function AddToCart(Product, i, arr) {
    var cart = localStorage.getItem("cart")
    if (cart == null) {
        cart = []
        cart.push(Product)
        localStorage.setItem("cart", JSON.stringify(cart))
    } else if (cart.length > 0) {
        cart = JSON.parse(cart)
        var res = true
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].productId == Product.productId) {
                alert("already in a cart")
                res = false
                break;
            }
        }
        if (res == true) {
            cart.push(Product)
            localStorage.setItem("cart", JSON.stringify(cart))
        }

    }
    window.location.href="../htmlPage/page_cart.html"
}

