/* 
    Problem
    Order system
    Create a restaurant CLI
    Here are some details you should ask the user for
    delivery / pick up
    address (if delivery)
    phone no
    order ( get creative with what you want to order )
    quantity ( for the item, or each item )
    add prices
    inform the user with the final bill and gst
    print it on the terminal
    bonus
    feel free to explore and make the cli even better
    be creative here, and think of how you want to use it, and check out the documentation accordingly
*/

const inquirer = require('inquirer');

console.clear();
console.log("***********************");
console.log("Order System");
console.log("***********************");

inquirer
    .prompt([
        {
            type: "list",
            name: "orderType",
            choices: [
                "delivery",
                "pick up"
            ]
        }
    ])
    .then( ( response ) => {
        if(response.orderType == "delivery"){
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "address",
                        message: "Enter your address: "
                    },
                    {
                        type: "input",
                        name: "number",
                        message: "Enter your phone number: ",
                        validate(input){
                            if(isNaN(input)){
                                return "Please enter your phone number.";
                            }else{
                                if(input.length == 10){
                                    return true;
                                }else{
                                    return "Please enter 10 digit mobile number.";
                                }
                            }
                        }
                    },
                    {
                        type: "list",
                        name: "orderItem",
                        message: "Select what you want to order: ",
                        choices: [
                            "Pizza",
                            "Burger",
                            "Chinese",
                            "Pani-Puri",
                            "Vada-Pav"
                        ]
                    },
                    {
                        type: "list",
                        name: "qty",
                        message: "Select quantity: ",
                        choices: [
                            "1",
                            "2",
                            "3"
                        ]
                    }
                ])
                .then( ( response ) => {
                    // console.log(response);
                    console.log("\n***********************");
                    if(response.orderItem.toLowerCase() == "pizza"){
                        console.log("Pizza : ",110);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(110*0.18));
                        console.log("Total Amount : ",Math.round(110+(110*0.18))*response.qty);
                    }else if(response.orderItem.toLowerCase() == "burger"){
                        console.log("Burger : ",140);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(140*0.18));
                        console.log("Total Amount : ",Math.round(140+(140*0.18))*response.qty);
                    }else if(response.orderItem.toLowerCase() == "chinese"){
                        console.log("Chinese : ",90);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(90*0.18));
                        console.log("Total Amount : ",Math.round(90+(90*0.18))*response.qty);
                    }else if(response.orderItem.toLowerCase() == "pani-puri"){
                        console.log("Pani Puri : ",30);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(30*0.18));
                        console.log("Total Amount : ",Math.round(30+(30*0.18))*response.qty);
                    }else if(response.orderItem.toLowerCase() == "vada-pav"){
                        console.log("Vada Pav : ",25);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(25*0.18));
                        console.log("Total Amount : ",Math.round(25+(25*0.18))*response.qty);
                    }
                    console.log("***********************");
                })
        }else{
            inquirer
                .prompt([                    
                    {
                        type: "input",
                        name: "number",
                        message: "Enter your phone number: ",
                        validate(input){
                            if(isNaN(input)){
                                return "Please enter your phone number.";
                            }else{
                                if(input.length == 10){
                                    return true;
                                }else{
                                    return "Please enter 10 digit mobile number.";
                                }
                            }
                        }
                    },
                    {
                        type: "list",
                        name: "orderItem",
                        message: "Select what you want to order: ",
                        choices: [
                            "Pizza",
                            "Burger",
                            "Chinese",
                            "Pani-Puri",
                            "Vada-Pav"
                        ]
                    },
                    {
                        type: "list",
                        name: "qty",
                        message: "Select quantity: ",
                        choices: [
                            "1",
                            "2",
                            "3"
                        ]
                    }
                ])
                .then( ( response ) => {
                    // console.log(response);
                    console.log("\n***********************");
                    if(response.orderItem.toLowerCase() == "pizza"){
                        console.log("Pizza : ",110);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(110*0.18));
                        console.log("Total Amount : ",Math.round(110+(110*0.18))*response.qty);
                    }else if(response.orderItem.toLowerCase() == "burger"){
                        console.log("Burger : ",140);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(140*0.18));
                        console.log("Total Amount : ",Math.round(140+(140*0.18))*response.qty);
                    }else if(response.orderItem.toLowerCase() == "chinese"){
                        console.log("Chinese : ",90);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(90*0.18));
                        console.log("Total Amount : ",Math.round(90+(90*0.18))*response.qty);
                    }else if(response.orderItem.toLowerCase() == "pani-puri"){
                        console.log("Pani Puri : ",30);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(30*0.18));
                        console.log("Total Amount : ",Math.round(30+(30*0.18))*response.qty);
                    }else if(response.orderItem.toLowerCase() == "vada-pav"){
                        console.log("Vada Pav : ",25);
                        console.log("Order Quantity : ",response.qty);
                        console.log("18% GST : ",Math.round(25*0.18));
                        console.log("Total Amount : ",Math.round(25+(25*0.18))*response.qty);
                    }
                    console.log("***********************");
                })
        }
    })
    .catch((error) => {
        console.log(error);
    })