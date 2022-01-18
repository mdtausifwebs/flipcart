

// let cart = JSON.parse(localStorage.getItem("cart"))
let cart = JSON.parse(localStorage.getItem("cart")) ||[]
// console.log(cart)

let view = document.getElementById("view")
let mycart=document.getElementById("mycart")
let item=0
cart.map((ele)=>{
    item++
    mycart.innerHTML=`MY CART (${item})`

})

function showproduct(product) {

    product.forEach((el, i) => {
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
        var sellingPrice = document.createElement("p")
        sellingPrice.innerHTML = ` selling Price:  ${el.sellingPrice}`

        var sellerName = document.createElement("p")
        sellerName.innerHTML = ` seller Name:  ${el.sellerName}`


        let btndiv = document.createElement("div")
        btndiv.setAttribute("class", "btn_div")
        var removebtn = document.createElement("button")
        var addbtn = document.createElement("button")
        // var showitem = document.createElement("p")

        removebtn.innerHTML = `REMOVE`
        removebtn.style.display = "block"
        removebtn.onclick = function () {
            Removeel(el, i)


        }
        addbtn.innerHTML = `SAVE FOR LATER `
        addbtn.style.display = "block"
        addbtn.onclick = function () {
            Saveforlater(el, i)
        }
        btndiv.append(addbtn, removebtn)
        Product_text.append(title, sellerName, description, btndiv,)
        product_price.append(mrp, sellingPrice)
        ProductBox.append(Product_img, Product_text, product_price)
        view.append(ProductBox)
    })
}
showproduct(cart)

function Removeel(el, i) {
    cart.splice(i, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
}
let savelater = JSON.parse(localStorage.getItem("savelater")) || []
function Saveforlater(el, i) {
    cart.splice(i, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    savelater.push(el)
    localStorage.setItem("savelater", JSON.stringify(savelater))
}
function whichlist() {
    let later = JSON.parse(localStorage.getItem("savelater"))
    // console.log(later)
    let whichparent = document.getElementById("whichlistproduct")
    later.forEach((el, i) => {
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
        let imgs = document.createElement("img")
        imgs.src = img
        Product_img.append(imgs)

        var title = document.createElement("h5")
        title.innerHTML = el.title.slice(1, 30)


        var description = document.createElement("p")
        description.innerHTML = el.description.slice(1, 60)

        var mrp = document.createElement("p")
        mrp.innerHTML = `MRP:  ${el.mrp}`
        var sellingPrice = document.createElement("p")
        sellingPrice.innerHTML = ` selling Price:  ${el.sellingPrice}`

        var sellerName = document.createElement("p")
        sellerName.innerHTML = ` seller Name:  ${el.sellerName}`


        let btndiv = document.createElement("div")
        btndiv.setAttribute("class", "btn_div")
        var removebtn = document.createElement("button")
        var addbtn = document.createElement("button")
        var showitem = document.createElement("p")

        removebtn.innerHTML = `REMOVE`
        removebtn.style.display = "block"
        removebtn.onclick = function () {
            Removelater(el, i)
        }
        addbtn.innerHTML = `MOVE TO CART`
        addbtn.style.display = "block"
        addbtn.onclick = function () {
            MoveToCart(el, i)
        }
        btndiv.append(addbtn, removebtn)
        Product_text.append(title, sellerName, description, btndiv,)
        product_price.append(mrp, sellingPrice)
        ProductBox.append(Product_img, Product_text, product_price)
        whichparent.append(ProductBox)
    })
}
let whichlistcout=document.getElementById("whichlist")
let whichitem=0
savelater.map((ele)=>{
whichitem++
whichlistcout.innerHTML=`Save For Later (${whichitem})`
})
function Removelater(el, i) {
    // console.log(savelater)
    savelater.splice(i, 1)
    localStorage.setItem("savelater", JSON.stringify(savelater))
}
function MoveToCart(el, i) {
    savelater.splice(i, 1)
    localStorage.setItem("savelater", JSON.stringify(savelater))
    cart.push(el)
    localStorage.setItem("cart", JSON.stringify(cart))
}
whichlist()

function TotalPrice(product) {
    let price_sec = document.getElementById("totalprice")
    let cout = 0
    let total_price = 0
    let priceparent = document.createElement("div")
    priceparent.setAttribute("class", "priceparent")
    let pricedetail = document.createElement("div")
    let priceitems = document.createElement("div")
    let discount = document.createElement("div")
    let delivery = document.createElement("div")
    let totalamout = document.createElement("div")
    let saveprice = document.createElement("div")
    product.forEach((el, i, arr) => {
        cout++
        total_price += el.mrp
    })
    pricedetail.innerHTML = `<p>PRICE DETAILS </p>`
    priceitems.innerHTML = `  <p>Price( ${cout} items) :</p> <p>₹ ${total_price} </p>`
    discount.innerHTML = `<p> discount :</p><p> ₹${total_price} </p>`
    delivery.innerHTML = ` <p>Delivery Charges </p><p>₹ ${total_price} </p>`
    totalamout.innerHTML = `   <p>Total Price of cart :</p><p> ₹ ${total_price}</p>`
    saveprice.innerHTML = ` <span>You will save ₹ ${total_price} on this order </span>`

    priceparent.append(pricedetail, priceitems, discount, delivery, totalamout, saveprice)
    price_sec.append(priceparent)
}
TotalPrice(cart)
function OrderPlaced() {
    let orderplaced = document.getElementById("OrderPlaced")
    let placediv = document.createElement("div")
    let orderplacedbtn = document.createElement("button")
    orderplacedbtn.innerHTML = "place order"
    orderplacedbtn.style.display = "block"
    orderplacedbtn.addEventListener("click", () => {
        window.location.href="../htmlPage/page_placeOrder.html"
    })
    placediv.append(orderplacedbtn)
    orderplaced.append(placediv)
}
OrderPlaced()