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
                resolve("Details sent to you email");
            }
            else{
                reject("Details not sent");
            }
        }, 2000);
    });
}

async function orderProcess() {
    const addressres = await checkaddress(true);
    console.log("Address Result:",addressres);
    const paymentres = await checkpayment(addressres);
    console.log("Payment Result:",paymentres);
    const emailres = await orderEmail(paymentres);
    console.log("Order Email:",emailres)
}

orderProcess();