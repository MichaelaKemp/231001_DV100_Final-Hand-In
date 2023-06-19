displaySubs = () => {
 
    let subMonth = document.getElementById("subOut")
    
    for (let i = 0; i < subData.length; i++ ){

        let names = subData[i].sName;
        let bread = subData[i].bOption;
        let sauces = subData[i].subSauces;
        let ingredients = subData[i].sIngredients;
        let ingredients2 = subData[i].sIngredients2;
        let ingredients3 = subData[i].sIngredients3;
        let ingredients4 = subData[i].sIngredients4;
        let ingredients5 = subData[i].sIngredients5;
        let price = subData[i].subPrice; 

        subMonth.innerHTML += `
        <div class="col-3">
            <div class="card" style="width: 100%">
                <div class="card-body">
                    <h5 class="card-titles">${names}</h5>
                    <p>Bread: ${bread}</p>
                    <p>Ingredients: ${ingredients} | ${ingredients2} | ${ingredients3} | ${ingredients4} | ${ingredients5}</p>
                    <p>Sauce: ${sauces}</p>
                    <p>Price: ${price}</p>
                </div>
            </div>
        </div>
        `
    }


    let subMonth2 = document.getElementById("subOut2")
    
    for (let i = 0; i < subData2.length; i++ ){

        let name = subData2[i].sName;
        let breads = subData2[i].bOption;
        let sauce = subData2[i].subSauces;
        let ingredientss = subData2[i].sIngredients;
        let ingredientss2 = subData2[i].sIngredients2;
        let ingredientss3 = subData2[i].sIngredients3;
        let ingredientss4 = subData2[i].sIngredients4;
        let ingredientss5 = subData2[i].sIngredients5;
        let prices = subData2[i].subPrice; 

        subMonth2.innerHTML += `
        <div class="col-3">
            <div class="card" style="width: 100%">
                <div class="card-body">
                    <h5 class="card-titles">${name}</h5>
                    <p>Bread: ${breads}</p>
                    <p>Ingredients: ${ingredientss} | ${ingredientss2} | ${ingredientss3} | ${ingredientss4} | ${ingredientss5}</p>
                    <p>Sauce: ${sauce}</p>
                    <p>Price: ${prices}</p>
                </div>
            </div>
        </div>
        `
    }

}

let subOrder = []

makeSub = () => {
    
    let subTotal = 0;

    let subName = document.getElementById("subName").value

    let breadOption = document.getElementsByName("baseRadio");
    let breadValue; 
    for(let i = 0; i < breadOption.length; i++){
        if(breadOption[i].checked){
            breadValue = breadOption[i].value
            subTotal = subTotal + +breadOption[i].dataset.cost
        }
    }

    let subIngredients = document.getElementById("subIngredients").value
    if(subIngredients === "Cheddar Cheese"){
        subTotal = subTotal + 5;
    } else if(subIngredients === "Tomatoes"){
        subTotal = subTotal + 2;
    } else if(subIngredients === "Ham"){
        subTotal = subTotal + 8;
    }else if(subIngredients === "Lettuce"){
        subTotal = subTotal + 3;
    }else if(subIngredients === "Avocado"){
        subTotal = subTotal + 15;
    }else if(subIngredients === "Bacon"){
        subTotal = subTotal + 13;
    }else if(subIngredients === "Cucumber"){
        subTotal = subTotal + 3;
    }else if(subIngredients === "Feta"){
        subTotal = subTotal + 6;
    }else if(subIngredients === "Gherkins"){
        subTotal = subTotal + 2;
    }else if(subIngredients === "Chicken Breast"){
        subTotal = subTotal + 9;
    }else if(subIngredients === "Egg"){
        subTotal = subTotal + 3;
    }else if(subIngredients === "Bell Pepper"){
        subTotal = subTotal + 6;
    }else if(subIngredients === "Jalapenos"){
        subTotal = subTotal + 8;
    }else if(subIngredients === "Red Cabbage"){
        subTotal = subTotal + 3;
    }else if(subIngredients === "Sun Dried Tomatoes"){
        subTotal = subTotal + 6;
    }else if(subIngredients === "Sliced Turkey"){
        subTotal = subTotal + 11;
    }else if(subIngredients === "Mushrooms"){
        subTotal = subTotal + 3;
    }else if(subIngredients === "Basil"){
        subTotal = subTotal + 2;
    }

    let subIngredients2 = document.getElementById("subIngredients2").value
    if(subIngredients2 === "Cheddar Cheese"){
        subTotal = subTotal + 5;
    } else if(subIngredients2 === "Tomatoes"){
        subTotal = subTotal + 2;
    } else if(subIngredients2 === "Ham"){
        subTotal = subTotal + 8;
    }else if(subIngredients2 === "Lettuce"){
        subTotal = subTotal + 3;
    }else if(subIngredients2 === "Avocado"){
        subTotal = subTotal + 15;
    }else if(subIngredients2 === "Bacon"){
        subTotal = subTotal + 13;
    }else if(subIngredients2 === "Cucumber"){
        subTotal = subTotal + 3;
    }else if(subIngredients2 === "Feta"){
        subTotal = subTotal + 6;
    }else if(subIngredients2 === "Gherkins"){
        subTotal = subTotal + 2;
    }else if(subIngredients2 === "Chicken Breast"){
        subTotal = subTotal + 9;
    }else if(subIngredients2 === "Egg"){
        subTotal = subTotal + 3;
    }else if(subIngredients2 === "Bell Pepper"){
        subTotal = subTotal + 6;
    }else if(subIngredients2 === "Jalapenos"){
        subTotal = subTotal + 8;
    }else if(subIngredients2 === "Red Cabbage"){
        subTotal = subTotal + 3;
    }else if(subIngredients2 === "Sun Dried Tomatoes"){
        subTotal = subTotal + 6;
    }else if(subIngredients2 === "Sliced Turkey"){
        subTotal = subTotal + 11;
    }else if(subIngredients2 === "Mushrooms"){
        subTotal = subTotal + 3;
    }else if(subIngredients2 === "Basil"){
        subTotal = subTotal + 2;
    }

    let subIngredients3 = document.getElementById("subIngredients3").value
    if(subIngredients3 === "Cheddar Cheese"){
        subTotal = subTotal + 5;
    } else if(subIngredients3 === "Tomatoes"){
        subTotal = subTotal + 2;
    } else if(subIngredients3 === "Ham"){
        subTotal = subTotal + 8;
    }else if(subIngredients3 === "Lettuce"){
        subTotal = subTotal + 3;
    }else if(subIngredients3 === "Avocado"){
        subTotal = subTotal + 15;
    }else if(subIngredients3 === "Bacon"){
        subTotal = subTotal + 13;
    }else if(subIngredients3 === "Cucumber"){
        subTotal = subTotal + 3;
    }else if(subIngredients3 === "Feta"){
        subTotal = subTotal + 6;
    }else if(subIngredients3 === "Gherkins"){
        subTotal = subTotal + 2;
    }else if(subIngredients3 === "Chicken Breast"){
        subTotal = subTotal + 9;
    }else if(subIngredients3 === "Egg"){
        subTotal = subTotal + 3;
    }else if(subIngredients3 === "Bell Pepper"){
        subTotal = subTotal + 6;
    }else if(subIngredients3 === "Jalapenos"){
        subTotal = subTotal + 8;
    }else if(subIngredients3 === "Red Cabbage"){
        subTotal = subTotal + 3;
    }else if(subIngredients3 === "Sun Dried Tomatoes"){
        subTotal = subTotal + 6;
    }else if(subIngredients3 === "Sliced Turkey"){
        subTotal = subTotal + 11;
    }else if(subIngredients3 === "Mushrooms"){
        subTotal = subTotal + 3;
    }else if(subIngredients3 === "Basil"){
        subTotal = subTotal + 2;
    }

    let subIngredients4 = document.getElementById("subIngredients4").value
    if(subIngredients4 === "Cheddar Cheese"){
        subTotal = subTotal + 5;
    } else if(subIngredients4 === "Tomatoes"){
        subTotal = subTotal + 2;
    } else if(subIngredients4 === "Ham"){
        subTotal = subTotal + 8;
    }else if(subIngredients4 === "Lettuce"){
        subTotal = subTotal + 3;
    }else if(subIngredients4 === "Avocado"){
        subTotal = subTotal + 15;
    }else if(subIngredients4 === "Bacon"){
        subTotal = subTotal + 13;
    }else if(subIngredients4 === "Cucumber"){
        subTotal = subTotal + 3;
    }else if(subIngredients4 === "Feta"){
        subTotal = subTotal + 6;
    }else if(subIngredients4 === "Gherkins"){
        subTotal = subTotal + 2;
    }else if(subIngredients4 === "Chicken Breast"){
        subTotal = subTotal + 9;
    }else if(subIngredients4 === "Egg"){
        subTotal = subTotal + 3;
    }else if(subIngredients4 === "Bell Pepper"){
        subTotal = subTotal + 6;
    }else if(subIngredients4 === "Jalapenos"){
        subTotal = subTotal + 8;
    }else if(subIngredients4 === "Red Cabbage"){
        subTotal = subTotal + 3;
    }else if(subIngredients4 === "Sun Dried Tomatoes"){
        subTotal = subTotal + 6;
    }else if(subIngredients4=== "Sliced Turkey"){
        subTotal = subTotal + 11;
    }else if(subIngredients4 === "Mushrooms"){
        subTotal = subTotal + 3;
    }else if(subIngredients4 === "Basil"){
        subTotal = subTotal + 2;
    }

    let subIngredients5 = document.getElementById("subIngredients5").value
    if(subIngredients5 === "Cheddar Cheese"){
        subTotal = subTotal + 5;
    } else if(subIngredients5 === "Tomatoes"){
        subTotal = subTotal + 2;
    } else if(subIngredients5 === "Ham"){
        subTotal = subTotal + 8;
    }else if(subIngredients5 === "Lettuce"){
        subTotal = subTotal + 3;
    }else if(subIngredients5 === "Avocado"){
        subTotal = subTotal + 15;
    }else if(subIngredients5 === "Bacon"){
        subTotal = subTotal + 13;
    }else if(subIngredients5 === "Cucumber"){
        subTotal = subTotal + 3;
    }else if(subIngredients5 === "Feta"){
        subTotal = subTotal + 6;
    }else if(subIngredients5 === "Gherkins"){
        subTotal = subTotal + 2;
    }else if(subIngredients5 === "Chicken Breast"){
        subTotal = subTotal + 9;
    }else if(subIngredients5 === "Egg"){
        subTotal = subTotal + 3;
    }else if(subIngredients5 === "Bell Pepper"){
        subTotal = subTotal + 6;
    }else if(subIngredients5 === "Jalapenos"){
        subTotal = subTotal + 8;
    }else if(subIngredients5 === "Red Cabbage"){
        subTotal = subTotal + 3;
    }else if(subIngredients5 === "Sun Dried Tomatoes"){
        subTotal = subTotal + 6;
    }else if(subIngredients5 === "Sliced Turkey"){
        subTotal = subTotal + 11;
    }else if(subIngredients5 === "Mushrooms"){
        subTotal = subTotal + 3;
    }else if(subIngredients5 === "Basil"){
        subTotal = subTotal + 2;
    }


    let subSauces = document.getElementById("subSauces").value
    if(subSauces === "Mayonnaise"){
        subTotal = subTotal + 6;
    } else if(subSauces === "Sweet Chilli Sauce"){
        subTotal = subTotal + 8;
    } else if(subSauces === "Mustard"){
        subTotal = subTotal + 2;
    }else if(subSauces === "Sriracha"){
        subTotal = subTotal + 10;
    }else if(subSauces === "BBQ Sauce"){
        subTotal = subTotal + 4;
    }else if(subSauces === "Tomato Sauce"){
        subTotal = subTotal + 1;
    }

    subOrder.push({
        sName : subName,
        bOption: breadValue,
        sIngredients : subIngredients,
        sIngredients2 : subIngredients2,
        sIngredients3 : subIngredients3,
        sIngredients4 : subIngredients4,
        sIngredients5 : subIngredients5,
        sSauces : subSauces,
        subPrice : subTotal
    })

    document.getElementById("currentTotal").innerHTML = "R0.00"
    document.getElementById("subForm").reset()

}

currentTotal = () => {

    currentPrice = 0

    let breadOption = document.getElementsByName("baseRadio"); 
    for(let i = 0; i < breadOption.length; i++){
        if(breadOption[i].checked){
            currentPrice = currentPrice + +breadOption[i].dataset.cost
        }
    }


        let subIngredients = document.getElementById("subIngredients").value
        if(subIngredients === "Cheddar Cheese"){
            currentPrice = currentPrice + 5;
        } else if(subIngredients === "Tomatoes"){
            currentPrice = currentPrice + 2;
        } else if(subIngredients === "Ham"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients === "Lettuce"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients === "Avocado"){
            currentPrice = currentPrice + 15;
        }else if(subIngredients === "Bacon"){
            currentPrice = currentPrice + 13;
        }else if(subIngredients === "Cucumber"){
            currentPrice = currentPrice+ 3;
        }else if(subIngredients === "Feta"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients === "Gherkins"){
            currentPrice = currentPrice+ 2;
        }else if(subIngredients === "Chicken Breast"){
            currentPrice = currentPrice + 9;
        }else if(subIngredients === "Egg"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients === "Bell Pepper"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients === "Jalapenos"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients === "Red Cabbage"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients === "Sun Dried Tomatoes"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients === "Sliced Turkey"){
            currentPrice = currentPrice + 11;
        }else if(subIngredients === "Mushrooms"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients === "Basil"){
            currentPrice = currentPrice + 2;
        }

        let subIngredients2 = document.getElementById("subIngredients2").value
        if(subIngredients2 === "Cheddar Cheese"){
            currentPrice = currentPrice + 5;
        } else if(subIngredients2 === "Tomatoes"){
            currentPrice = currentPrice + 2;
        } else if(subIngredients2 === "Ham"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients2 === "Lettuce"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients2 === "Avocado"){
            currentPrice = currentPrice + 15;
        }else if(subIngredients2 === "Bacon"){
            currentPrice = currentPrice + 13;
        }else if(subIngredients2 === "Cucumber"){
            currentPrice = currentPrice+ 3;
        }else if(subIngredients2 === "Feta"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients2 === "Gherkins"){
            currentPrice = currentPrice+ 2;
        }else if(subIngredients2 === "Chicken Breast"){
            currentPrice = currentPrice + 9;
        }else if(subIngredients2 === "Egg"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients2 === "Bell Pepper"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients2 === "Jalapenos"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients2 === "Red Cabbage"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients2 === "Sun Dried Tomatoes"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients2 === "Sliced Turkey"){
            currentPrice = currentPrice + 11;
        }else if(subIngredients2 === "Mushrooms"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients2 === "Basil"){
            currentPrice = currentPrice + 2;
        }

        let subIngredients3 = document.getElementById("subIngredients3").value
        if(subIngredients3 === "Cheddar Cheese"){
            currentPrice = currentPrice + 5;
        } else if(subIngredients3 === "Tomatoes"){
            currentPrice = currentPrice + 2;
        } else if(subIngredients3=== "Ham"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients3 === "Lettuce"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients3 === "Avocado"){
            currentPrice = currentPrice + 15;
        }else if(subIngredients3 === "Bacon"){
            currentPrice = currentPrice + 13;
        }else if(subIngredients3 === "Cucumber"){
            currentPrice = currentPrice+ 3;
        }else if(subIngredients3 === "Feta"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients3 === "Gherkins"){
            currentPrice = currentPrice+ 2;
        }else if(subIngredients3 === "Chicken Breast"){
            currentPrice = currentPrice + 9;
        }else if(subIngredients3 === "Egg"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients3 === "Bell Pepper"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients3 === "Jalapenos"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients3 === "Red Cabbage"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients3 === "Sun Dried Tomatoes"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients3 === "Sliced Turkey"){
            currentPrice = currentPrice + 11;
        }else if(subIngredients3 === "Mushrooms"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients3 === "Basil"){
            currentPrice = currentPrice + 2;
        }

        let subIngredients4 = document.getElementById("subIngredients4").value
        if(subIngredients4 === "Cheddar Cheese"){
            currentPrice = currentPrice + 5;
        } else if(subIngredients4 === "Tomatoes"){
            currentPrice = currentPrice + 2;
        } else if(subIngredients4 === "Ham"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients4 === "Lettuce"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients4 === "Avocado"){
            currentPrice = currentPrice + 15;
        }else if(subIngredients4 === "Bacon"){
            currentPrice = currentPrice + 13;
        }else if(subIngredients4 === "Cucumber"){
            currentPrice = currentPrice+ 3;
        }else if(subIngredients4 === "Feta"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients4 === "Gherkins"){
            currentPrice = currentPrice+ 2;
        }else if(subIngredients4 === "Chicken Breast"){
            currentPrice = currentPrice + 9;
        }else if(subIngredients4 === "Egg"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients4 === "Bell Pepper"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients4 === "Jalapenos"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients4 === "Red Cabbage"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients4 === "Sun Dried Tomatoes"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients4 === "Sliced Turkey"){
            currentPrice = currentPrice + 11;
        }else if(subIngredients4 === "Mushrooms"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients4 === "Basil"){
            currentPrice = currentPrice + 2;
        }


        let subIngredients5 = document.getElementById("subIngredients5").value
        if(subIngredients5 === "Cheddar Cheese"){
            currentPrice = currentPrice + 5;
        } else if(subIngredients5 === "Tomatoes"){
            currentPrice = currentPrice + 2;
        } else if(subIngredients5 === "Ham"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients5 === "Lettuce"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients5 === "Avocado"){
            currentPrice = currentPrice + 15;
        }else if(subIngredients5 === "Bacon"){
            currentPrice = currentPrice + 13;
        }else if(subIngredients5 === "Cucumber"){
            currentPrice = currentPrice+ 3;
        }else if(subIngredients5 === "Feta"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients5 === "Gherkins"){
            currentPrice = currentPrice+ 2;
        }else if(subIngredients5 === "Chicken Breast"){
            currentPrice = currentPrice + 9;
        }else if(subIngredients5 === "Egg"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients5 === "Bell Pepper"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients5 === "Jalapenos"){
            currentPrice = currentPrice + 8;
        }else if(subIngredients5 === "Red Cabbage"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients5 === "Sun Dried Tomatoes"){
            currentPrice = currentPrice + 6;
        }else if(subIngredients5 === "Sliced Turkey"){
            currentPrice = currentPrice + 11;
        }else if(subIngredients5 === "Mushrooms"){
            currentPrice = currentPrice + 3;
        }else if(subIngredients5 === "Basil"){
            currentPrice = currentPrice + 2;
        }

        let subSauces = document.getElementById("subSauces").value
        if(subSauces === "Mayonnaise"){
            currentPrice = currentPrice + 6;
        } else if(subSauces === "Sweet Chilli Sauce"){
            currentPrice = currentPrice+ 8;
        } else if(subSauces === "Mustard"){
            currentPrice = currentPrice + 2;
        }else if(subSauces === "Sriracha"){
            currentPrice = currentPrice+ 10;
        }else if(subSauces === "BBQ Sauce"){
            currentPrice = currentPrice + 4;
        }else if(subSauces === "Tomato Sauce"){
            currentPrice = currentPrice + 1;
        }

        document.getElementById("currentTotal").innerHTML = "R" + currentPrice + ".00"
}



displaySub = () => {

    let area = document.getElementById("orders")
    let total = document.getElementById("subPricing")

    area.innerHTML = ""

    let finalTotal = 0

    for(let i = 0; i < subOrder.length; i++){
        let names = subOrder[i].sName
        let bread = subOrder[i].bOption
        let ingredients = subOrder[i].sIngredients
        let ingredients2 = subOrder[i].sIngredients2
        let ingredients3 = subOrder[i].sIngredients3
        let ingredients4 = subOrder[i].sIngredients4
        let ingredients5 = subOrder[i].sIngredients5
        let sauces = subOrder[i].sSauces
        let price = subOrder[i].subPrice

        finalTotal += price


    area.innerHTML += `

    <div class="col-4">
        <div class="card" style="width: 100%;">
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

    total.innerHTML = "R" + finalTotal + ".00"
    }
 }

 CheckOut = () =>{

    let data = JSON.stringify(subOrder)
    localStorage.setItem('order', data)
    window.location.href = '../pages/check.html'
 }