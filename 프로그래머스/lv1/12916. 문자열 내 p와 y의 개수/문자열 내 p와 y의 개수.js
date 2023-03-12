function solution(s){
    var answer = true;
    var Str="pPyY";
    var numP=0; var numY=0; var num=0;
    for(var i=0; i<s.length; i++){
        if((s[i]==Str[0])||(s[i]==Str[1]))
            {numP++;}
        else if((s[i]==Str[2])||(s[i]==Str[3]))
            {numY++;}
        //else{ num++; }//p나 y가 아닌 다른 문자가 왔을 경우는 continue...
    }
    if((numP>0) || (numY>0)) {
        if(numP!=numY) {answer=false;}
        else{answer=true;}
    }
    //else if((numP==0)&&(numY==0)){answer=true;}
    else{answer=true;} 
    
    //return s.match(/p/ig).length == s.match(/y/ig).length
    return answer;
}