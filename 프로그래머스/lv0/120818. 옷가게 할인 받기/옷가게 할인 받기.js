function solution(price) {
    var result = 0;
    if(price < 100000){
        result=price;
    }
    else if((price >= 100000) && (price<300000)){
        result=Math.floor(price-(price*0.05));
    }
    else if((price >=300000) && (price<500000)){
        result=Math.floor(price-(price*0.1));
    }
    else{
        result = Math.floor(price-(price*0.2));
    }
    return result;
}