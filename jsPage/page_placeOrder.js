function cancel(){
    window.location.href="../index.html"
}
function pay() {
    let cardno = document.getElementById("cardno").value
    let carddate = document.getElementById("carddate").value
    let cardcvv = document.getElementById("cardcvv").value
    if (cardno.length == 4 && cardcvv.length == 3) {
        alert("card details verified")
        showmsg()
    } else {
        alert("type valid card details")
    }
}

function showmsg() {
    const msg = ["payment successful", "order confirmed", "order is packed",
     "order is waiting for carrier pickup","order is arrived near hub",
      "order is out for delivery", "order is delivered"]
    let j = 0;
    var timer = setInterval(function () {
        var parent = document.getElementById("msg")
        // parent.innerHTML = null
        var ele = document.createElement("h1")
        if (j == msg.length - 1) {
            // j = 0
        }
        ele.append(msg[j] + " ")
        parent.append(ele)
        j++
    }, 2000)
    setTimeout(function () {
        clearInterval(timer)
    }, 14000)
}
// showmsg()

let addressArr = JSON.parse(localStorage.getItem("addressArr")) || []
function submit() {
    let name = document.getElementById("name").value
    let mobile = document.getElementById("mobile").value
    let pin = document.getElementById("pin").value
    let location = document.getElementById("location").value
    let textarea = document.getElementById("textarea").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let landmark = document.getElementById("landmark").value
    let altno = document.getElementById("altno").value
    let home = document.getElementById("home").value
    let work = document.getElementById("work").value
    let address = {
        Name: name,
        Mobile: mobile,
        Pin: pin,
        Location: location,
        Textarea: textarea,
        City: city,
        State: state,
        Landmark: landmark,
        Altno: altno,
        Home: home,
        Work: work
    }
    addressArr.push(address)
    localStorage.setItem("addressArr", JSON.stringify(addressArr))
    console.log(addressArr)
}

function showAddress(data) {
    let showaddress = document.getElementById("showAddress")
    data.map((el) => {
        let addressParent = document.createElement("div")
        addressParent.setAttribute("class", "addressParent")

        let radio_sec = document.createElement("div")
        radio_sec.setAttribute("class", "radio_sec")

        let address_text_sec = document.createElement("div")
        address_text_sec.setAttribute("class", "address_text_sec")

        let Name = document.createElement("p")
        Name.innerHTML = `${el.Name}`
        let Mobile = document.createElement("p")
        Mobile.innerHTML = `${el.Mobile}`
        let Pin = document.createElement("p")
        Pin.innerHTML = `${el.Pin}`
        let Location = document.createElement("p")
        Location.innerHTML = `${el.Location}`
        let Textarea = document.createElement("p")
        Textarea.innerHTML = `${el.Textarea}`
        let City = document.createElement("p")
        City.innerHTML = `${el.City}`
        let State = document.createElement("p")
        State.innerHTML = `${el.State}`
        let Landmark = document.createElement("p")
        Landmark.innerHTML = `${el.Landmark}`
        let Altno = document.createElement("p")
        Altno.innerHTML = `${el.Altno}`
        let Home = document.createElement("p")
        Home.innerHTML = `${el.Home}`
        let Work = document.createElement("p")
        Work.innerHTML = `${el.Work}`
        let input = document.createElement("p")
        input.innerHTML = ` <input type="radio" id="work" value="work">`
        radio_sec.append(input, Name, Home, Work, Mobile,)
        address_text_sec.append(Location, Textarea, City, State, Landmark, Pin, Altno)
        addressParent.append(radio_sec, address_text_sec)
        showaddress.append(addressParent)
    })
}
showAddress(addressArr)
let cart = JSON.parse(localStorage.getItem("cart"))

function showprice(product) {
    let price_sec = document.getElementById("show_price")
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
showprice(cart)