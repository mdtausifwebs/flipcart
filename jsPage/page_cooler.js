var parentdiv = document.getElementById("showdata")

    async function GetData() {
        var data = await fetch("../jsonpage/cooler.json")
        var res = await data.json()
        var Data = res.slice(0, 20)
        showproduct(Data)
        // console.log(res)
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

            var btn = document.createElement("button")
            btn.innerHTML = `Add to cart`
            btn.style.display = "block"
            btn.onclick = function () {
                AddToCart(el, i, arr)
            }

            var productId = document.createElement("p")
            productId.innerHTML = el.productId.slice(0, 20)

            var title = document.createElement("h5")
            title.innerHTML = el.title.slice(0, 20)

            var description = document.createElement("p")
            description.innerHTML = el.description.slice(0, 20)

            var mrp = document.createElement("p")
            mrp.innerHTML =`MRP : ${el.mrp}`

            var sellingPrice = document.createElement("p")
            sellingPrice.innerHTML = el.sellingPrice

            var specialPrice = document.createElement("p")
            specialPrice.innerHTML = el.specialPrice
            Product_text.append(title, mrp,btn)

            var img = document.createElement("img")
            img.setAttribute("class", "imgs")
            img.src = url
            Product_img.append(img)


            ProductBox.append(Product_img, Product_text)
            parentdiv.append(ProductBox)
        })
    }
    function AddToCart(Product, i, arr) {
        // console.log(Product, i, arr)
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