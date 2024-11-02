function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){ //reselve olumlu,reject olumsuz 
            resolve("Olumlu SOnuç");
        },5000)
    })
}

//Eğer 5 saniyeden önce yapıya tıklarsak pending durumunda olur

//console.log(getData("Merhaba"));

getData("Merhaba").then(function(response){
    console.log(response);
});

//---------------

function getData2(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){ //reselve olumlu,reject olumsuz 
            reject("Olumsuz SOnuç");
        },5000)
    })
}

getData2("Selam").catch(function(err){
    console.log(err);
})
// olumsuz catch ile olumlu then ile

// Gerçek Promise yapısı------------------------------

function getData3(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){ 
           if(typeof data === "string"){//olumlu
                resolve(data);
           }
           else{
                reject("Lütfen string bir değer girin");
           }
        },5000)
    })
}


getData3("Merhaba").then(function(response){
    console.log("Gelen değer" + response);
}).catch(function(err){
    console.log(err);
});

//bir tane catch birden çok then kullanılabilir