const form=document.querySelector('#quizform');
const correct={
    q1:"JavaScript",
    q2:"Anchor",
    q3:"background-color",
    q4:"document.getElementById()",
    q5:"Node.js"
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data= new FormData(form) ;
   
    let result=0;
    for (const [key,value] of data.entries()) {
        if(correct[key]==value){
            result++;

        }
         document.getElementById('result').textContent= `You Score ${result} / 5 `
         
        
         form.reset();

       
        
    }
        
    })


