// function checkaddress(address){
//     setTimeout(() => {
//         if(address){
//             return true;
//         }
//         else{
//             return false;
//         }
//     },2000)
// }

// console.log(checkaddress("street 103"));


function checkaddress(address,callback){
    setTimeout(() => {
        if(address){
            console.log("Your order is placed");
            callback(true);
        }
        else{
            console.log("Sorry please enter you address to place your order");
            callback(false);
        }
    },2000)
}

function checkpayment(addressres,paymentDetail,callback){
    setTimeout(() => {
        if(paymentDetail && addressres){
            console.log("Payment Done");
            callback(true);
        }
        else{
            console.log("Payment failed");
            callback(false);
        }
    }, 2000);
}

function orderEmail(paymentres,orderdetails,callback){
    setTimeout(() => {
        if(paymentres && orderdetails){
            console.log("Email sent");
            callback(true);

        }
        else{
            console.log("Email not sent");
            callback(false);
        }
    }, 2000);
}

let show = (result) => {
    console.log(result)
}

// console.log(checkaddress("street 103",show));
// checkaddress("",show);

checkaddress(true, (addressres)=>{
    console.log("addressres: ",addressres);
    checkpayment(addressres,true,(paymentres)=>{
        console.log("paymentres:", paymentres);
        orderEmail(paymentres,true,(Emailres)=>{
            console.log("Emailres:",Emailres);
        })
    })
})