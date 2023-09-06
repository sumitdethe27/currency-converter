const options1 = document.querySelector('.options-1');
const options2 = document.querySelector('.options-2');

function check(query,bool){ 
  query.classList.toggle('hidden');
    if(bool){

     document.querySelector('.convert').classList.toggle('move')
    }
    let amount=document.querySelector('.amount');
    let convert=document.querySelector('.convert');
    if(options1.classList.contains('hidden')||options2.classList.contains('hidden')){
      if(window.innerWidth<=600){

        amount.style.transform="translateY(70px)"
        convert.style.transform="translateY(80px)"
      }
      else{

        amount.style.transform="translateY(150px)"
        convert.style.transform="translateY(160px)"
      }

    }else{
      amount.style.transform="translateY(0px)"
      convert.style.transform="translateY(0px)"

    }
    
  } 

  document.addEventListener("DOMContentLoaded",function(){
    
    const select1 = document.querySelector('.text-1');
    const select2 = document.querySelector('.text-2');
    select1.addEventListener('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();

      check(options1)
    })
    select2.addEventListener('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();
      
     check(options2,true);

    })  
    
  })