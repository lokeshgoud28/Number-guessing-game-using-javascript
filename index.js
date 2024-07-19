const min=1;
const max=100;
const ans=Math.floor(Math.random() * (max - min+1))+min;
 

let attempts=0;
let guess;
let run=true;
while(run){
    guess=window.prompt(`Guess a number ${min}-${max}`);
    guess=Number(guess);
    console.log(typeof guess , guess);
    if(isNaN(guess)){
        window.alert("please Enter a number")
    }
    else if(guess < min || guess > max){
       window.alert("please Enter a valid number")
    }
    else{
        attempts++;
        if(guess<ans){
            window.alert("Too Low! Enter again👎")
            
        }
        else if(guess > ans){
            window.alert("Too High! Enter again👎")
            
        }
        else{
            
        window.alert(`Correct! 👍 your answer is ${ans}. It tooks you ${attempts} attempts`);
        run=false;
        }
    }
}