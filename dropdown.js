function check(query,bool){ 
  query.classList.toggle('hidden');
    if(bool){
     document.querySelector('.convert').style.transform="translateX(282px)"

    }
  } 

  document.addEventListener("DOMContentLoaded",function(){
    
    const select1 = document.querySelector('.text-1');
    const options1 = document.querySelector('.options-1');
    const select2 = document.querySelector('.text-2');
    const options2 = document.querySelector('.options-2');
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
