// console.log("tausif")
var product_washing = document.getElementById("product_washing")
async function GetData() {
    var data = await fetch("./jsonpage/washing.json")
    var res = await data.json()
    var Data = res.slice(16, 20)
    showwashing(Data)
    // console.log(Data)
}
GetData()


function showwashing(product) {
    product.forEach((el, i, arr) => {
        var url = el.imageUrlStr.split(';')[0]
        var ProductBox = document.createElement("div")
        ProductBox.setAttribute("class", "productbox")
        ProductBox.addEventListener("click", () => {
            window.location.href = "./htmlPage/page_washing.html"
            // console.log("tausif")
        })
        var Product_img = document.createElement("div")
        Product_img.setAttribute("class", "product_img")

        var Product_text = document.createElement("div")
        Product_text.setAttribute("class", "product_text")

        var title = document.createElement("h5")
        title.innerHTML = el.title.slice(0, 30)

        var description = document.createElement("p")
        description.innerHTML = el.description

        var mrp = document.createElement("p")
        mrp.innerHTML = `MRP : ${el.mrp}`

        var sellingPrice = document.createElement("p")
        sellingPrice.innerHTML = el.sellingPrice

        Product_text.append(title,  mrp)

        var img = document.createElement("img")
        img.setAttribute("class", "imgs")
        img.src = url
        Product_img.append(img)

        ProductBox.append(Product_img, Product_text)
        product_washing.append(ProductBox)
    })
}