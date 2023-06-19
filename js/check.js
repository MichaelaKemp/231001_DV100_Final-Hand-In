displayCheck = () =>{

    let data = JSON.parse(localStorage.getItem('order'))
    let items = document.getElementById('outOrder')
    let totalArea = document.getElementById('orderTotal')

    let checkOutTotal = 0

        for(let i = 0; i < data.length; i++){
            let names = data[i].sName
            let bread = data[i].bOption
            let ingredients = data[i].sIngredients
            let ingredients2 = data[i].sIngredients2
            let ingredients3 = data[i].sIngredients3
            let ingredients4 = data[i].sIngredients4
            let ingredients5 = data[i].sIngredients5
            let sauces = data[i].sSauces
            let price = data[i].subPrice
    
            checkOutTotal += price
    
    
        items.innerHTML += `
    
        <div class="col-3">
            <div class="card" style="width: 100%">
                <div class="card-body">
                    <h5 class="card-title">${names}</h5>
                    <p>Bread: ${bread}</p>
                    <p>Ingredients: ${ingredients} | ${ingredients2} | ${ingredients3} | ${ingredients4} | ${ingredients5}</p>
                    <p>Sauce: ${sauces}</p>
                    <p>Price: ${price}</p>
                </div>
            </div>
        </div>
        `

        totalArea.innerHTML = "R" + checkOutTotal + ".00"
        }
}

discount = () => {

    let data = JSON.parse(localStorage.getItem('order'))
    let totalArea = document.getElementById('orderTotal')
    let coupon = document.getElementById("couponCode").value

    let checkOutTotal = 0

    for(let i = 0; i < data.length; i++){
        let price = data[i].subPrice

        checkOutTotal += price

        if(coupon === "0209"){
            checkOutTotal = checkOutTotal - 5
            totalArea.innerHTML = "R" + checkOutTotal + ".00"
        }else{
        alert("THIS CODE IS INCORRECT!")
    }
    

}
}

resetReturn = () => {

    localStorage.removeItem('order')
    window.location.href = '../index.html'
}