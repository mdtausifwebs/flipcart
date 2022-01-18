let cart = JSON.parse(localStorage.getItem("cart"))

let view = document.getElementById("view")

function showproduct(product) {
    let i = 0;
    product.forEach((el) => {
        // console.log(el)
        var ProductBox = document.createElement("div")
        ProductBox.setAttribute("class", "productbox")

        var Product_img = document.createElement("div")
        Product_img.setAttribute("class", "product_img")

        var Product_text = document.createElement("div")
        Product_text.setAttribute("class", "product_text")

        var product_price = document.createElement("div")
        product_price.setAttribute("class", "product_price")

        var img = el.imageUrlStr.split(';')[0]
        // url.map((img) => {
        //     let imgs = document.createElement("img")
        //     imgs.src = img
        //     Product_img.append(imgs)
        // })
        let imgs = document.createElement("img")
        imgs.src = img
        Product_img.append(imgs)

        var title = document.createElement("h5")
        title.innerHTML = el.title.slice(1, 30)


        var description = document.createElement("p")
        description.innerHTML = el.description.slice(1, 60)

        var mrp = document.createElement("p")
        mrp.innerHTML = `MRP:  ${el.mrp}`

        let btn = document.createElement("div")
        btn.setAttribute("class", "btn_sec")
        var btn1 = document.createElement("button")
        var btn2 = document.createElement("button")
        var showitem = document.createElement("p")

        btn1.innerHTML = `+`
        btn1.style.display = "block"
        btn1.onclick = function () {
            priceIncrease(el, i)
            console.log(i++)

        }
        btn2.innerHTML = `-`
        btn2.style.display = "block"
        btn2.onclick = function () {
            priceDecrese(el, i)
            console.log(i--)

        }
        showitem.innerHTML = `${i}`
        // btn.append(btn1, showitem, btn2)

        Product_text.append(title, description)
        product_price.append(mrp,)
        ProductBox.append(Product_img, Product_text, btn, product_price)
        view.append(ProductBox)
    })
}

showproduct(cart)
function priceIncrease(el, i) {
    i++
    return i
}
function priceDecrese(el, i) {
    i--
    return i

}
function TotalPrice(product) {
    let price_sec = document.getElementById("totalprice")

    let total_price = 0
    let price = document.createElement("p")

    product.forEach((el, i, arr) => {
        total_price += el.mrp

    })
    price.innerHTML = `Total Price of cart : ${total_price}`
    let des = document.createElement("p")
    des.innerHTML = `
            LOUIS PHILIPPE LPMSMRGPB25170 Cloth Mask With Melt Blown Fabric Layer  (Black, L, Pack of 2)
        41,411 Ratings & 143 Reviews
        ₹355₹49928% off

        Available offers

        Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More

        Bank Offer20% Instant discount of up to ₹200 on First time Dhani One Freedom Card Txn, TnC ApplicableT&C

        Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
    `
    price_sec.append(price,des)

}
TotalPrice(cart)