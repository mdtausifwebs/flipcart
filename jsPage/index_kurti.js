var product_female = document.getElementById("product_female")

async function GetData() {
    var data = await fetch("./jsonpage/kurti.json")
    var res = await data.json()
    var Data = res.slice(3,7)
    showFemale(Data)
    // console.log(Data)
}
GetData()


function showFemale(product) {
    
    product.forEach((el, i, arr) => {
        var productbox = document.createElement("div")
        productbox.setAttribute("class", "productbox")

        productbox.addEventListener("click", () => {
            window.location.href = "./htmlPage/page_kurti.html"
            // console.log("tausif")
        })

        var Product_img = document.createElement("div")
        Product_img.setAttribute("class", "product_img")

        var Product_text = document.createElement("div")
        Product_text.setAttribute("class", "product_text")

        var title = document.createElement("h5")
        title.innerHTML = el.productName

        var description = document.createElement("p")
        description.innerHTML = el.description

        var mrp = document.createElement("p")
        mrp.innerHTML = `MRP : ${el.price_1}`

        // var sellingPrice = document.createElement("p")
        // sellingPrice.innerHTML = el.sellingPrice

        var img = document.createElement("img")
        img.setAttribute("class", "imgs")
        img.src = el.img_1

        Product_img.append(img)
        Product_text.append(title, mrp)

        productbox.append(Product_img, Product_text)

        product_female.append(productbox)
    })
}

