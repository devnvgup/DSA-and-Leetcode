//determine: muc dich
//accomplish:hoan thanh
//figure out: tim ra
//Time Complexcity : thoi gian thuc hien
//space Complexcity: ton bao nhieu bo nho
//Big O drop constatns
//Big 0 n2
//Drop Non Dominants
//simplyfy: don gian hoa




function test(){
    for(let i = 0;i<3;i++){
        console.log(i)
    }
}
//test:0(n)

function test1(){
    for(let i = 0;i<3;i++){
        console.log(i)
    }
    
    for(let i = 0;i<3;i++){
        console.log(i)
    }
}

//test1:0(n+n)=>0(n) drop constatns 


function test2(){
    for(let i = 0;i<3;i++){
        for(let i = 0;i<3;i++){
            console.log(i)
        }
    }
}

//test2: 0(n2)

function test3(){
    for(let i = 0;i<3;i++){
        for(let i = 0;i<3;i++){
            console.log(i)
        }
    }
    
    for(let i = 0;i<3;i++){
        console.log(i)
    }
}

//test3:0(n2+n)=>0(n2) Drop Non Dominants

//Big 0(1)

function additem(n){
    return n+n+n
}//0(1)

//0(log n)
//terms: dieu kien
//different terms for input

function test4(a,b){
    for(let i = 0;i<a;i++){
        console.log(i)
    }
    for(let i = 0;i<b;i++){
        console.log(i)
    }
}

//test4 :0(a+b)

function test5(a,b){
    for(let i = 0;i<a;i++){
        for(let i = 0;i<b;i++){
            console.log(i)
        }
    }
}

//test5:0(a*b)

//Big O Arrays
//push,pop() => 0(1)
//shift,unshift => 0(n)
//add in middle =>0(ns)
//remove =>0(n)
//Big O wrap up