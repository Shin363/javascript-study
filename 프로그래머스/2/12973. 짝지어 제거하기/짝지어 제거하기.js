function solution(s)
{
   const stacks = [];

    for(const c of s){
        if(stacks.length>0&&stacks[stacks.length-1]===c){
            stacks.pop();
        }else{
            stacks.push(c);
        }
    }
    
    return stacks.length===0?1:0;
}