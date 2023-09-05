document.addEventListener('DOMContentLoaded',()=>{

   
    
   
   
    let convert=document.querySelector('.convert')
   convert.addEventListener('click',async ()=>{
    let from=document.querySelector('.text-1').textContent.slice(0,3);
    let to=document.querySelector('.text-2').textContent.slice(0,3);
    let amount= document.querySelector('.amount').value;
    
     let response=await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    let data=await response.json();
    let {date,info:{rate},result}=data;
    console.log(date,result,rate)
    })
})
