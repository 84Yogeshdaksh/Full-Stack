function checkaddress(address){
    let checkaddresspromies = new Promise(function(resolve, reject){
        setTimeout(() => {
            if(address){
                resolve("You can place order");
            }
            else{
                reject("You can't place order");
            }
        }, 2000);
    });
    return checkaddresspromies;
}

function checkpayment(addressres){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(addressres){
                resolve("Your payment is done");
            }
            else{
                reject("Your payment is not done");
            }
        }, 2000);
    });
}

function orderEmail(paymentres){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(paymentres){
                resolve("Detalis sent to you email");
            }
            else{
                reject("Details not sent");
            }
        }, 2000);
    });
}
// console.log(checkaddress(true));

checkaddress(false)
.then(function(res){
    console.log("Result:", res);
    return checkpayment(res)
})
.then(function(res){
    console.log("Result:",res);
    return orderEmail(res);
})
.then(function(res){
    console.log("Result:",res)
})
.catch(function(err){
    console.log("Error:",err);
});