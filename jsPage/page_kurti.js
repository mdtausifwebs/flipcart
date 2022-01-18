var parentdiv = document.getElementById("showdata")
async function GetData() {
    var data = await fetch("../jsonpage/kurti.json")
    var res = await data.json()
    var Data = res.slice(0, 200)
    // console.log(Data)
    kurtiproduct(Data)
}
GetData()

function kurtiproduct(product) {
    product.forEach((el, i, arr) => {
        // console.log(product)
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
        img.src = el.img_1
        console.log(img)
        var title = document.createElement("h5")
        title.innerHTML = el.productName.slice(0, 20)

        var description = document.createElement("p")
        description.innerHTML = el.description

        var color = document.createElement("p")
        color.innerHTML = el.color

        var discount = document.createElement("p")
        discount.innerHTML = el.discount
        var mrp = document.createElement("p")
        mrp.innerHTML = `MRP:  ${el.price_2}`

        Product_img.append(img)
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
    window.location.href = "../htmlPage/page_cart.html"
}

