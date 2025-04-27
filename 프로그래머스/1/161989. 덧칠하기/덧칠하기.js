function solution(n, m, section) {
    let count =0; let position=0; 
    for(let i=0; i<section.length; i++){
        if(section[i]>position){
            count++;
            position=section[i]+m-1;
        }
    }
    return count;
    
}