let headers=new Headers();
headers.append("apikey","kp9geyvwW0NAjk07esHUEAmr0oQzikw3")
const requestOptions={
method:"GET",
redirect:"follow",
headers

}
let currencyList={};
document.addEventListener('DOMContentLoaded',async function(){

  
   
       async function getCurrencyList (){ 
          
        let response=await fetch("https://api.apilayer.com/exchangerates_data/symbols",requestOptions);
        let data =await response.json();
        let option1=document.querySelector('.options-1');
        let option2= document.querySelector('.options-2');
        let curr=data.symbols;
        currencyList=curr
        let fromEntries=Object.entries(curr);
        console.log(currencyList);
        fromEntries.forEach(([key,value])=>{
         if(window.innerWidth<=600){

            option1.innerHTML+=`<div class="option-1"> <span id="symbol">${key}</span></div>`
            option2.innerHTML+=`<div class="option-2"> <span id="symbol">${key}</span></div>`
         }else{
            option1.innerHTML+=`<div class="option-2"> <span id="symbol">${key}</span>
            <span id="symbol-name">${value}</span>  </div>`
            option2.innerHTML+=`<div class="option-2"> <span id="symbol">${key}</span>
            <span id="symbol-name">${value}</span>  </div>`
         }
            
        })

         

      }
      await getCurrencyList();
      const option1=document.querySelectorAll('.option-1');
      const option2=document.querySelectorAll('.option-2');
      const input1=document.querySelector('.text-1');
      const input2=document.querySelector('.text-2');

      
      const options1 = document.querySelector('.options-1');
      const options2 = document.querySelector('.options-2');
      
      option1.forEach((item)=>{
      item.addEventListener("click",()=>{
        check(options1);
            let symbol=item.querySelector('#symbol');

            input1.textContent=`${symbol.textContent}`; 
           if(window.innerWidth>=600){

              let symbolName=item.querySelector('#symbol-name');
              input1.textContent=`  ( ${symbolName.textContent})`; 
  
            }
           

         })
         
      })
      option2.forEach((item)=>{
         
         item.addEventListener("click",()=>{
            
            check(options2);
            let symbol=item.querySelector('#symbol');

            input2.textContent=`${symbol.textContent}`; 
           if(window.innerWidth>=600){

              let symbolName=item.querySelector('#symbol-name');
              input2.textContent=`  ( ${symbolName.textContent})`; 
  
            }
           // document.querySelector('.convert').classList.toggle('move')

         })
      })
     
     

})