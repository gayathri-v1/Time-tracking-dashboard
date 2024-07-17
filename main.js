const dbutton= document.getElementById('daily');
const wbutton= document.getElementById('weekly');
const mbutton= document.getElementById('monthly');

const hours =document.querySelectorAll('.hours');
const previous =document.querySelectorAll('.previous');



dbutton.addEventListener('click', () => {
  dbutton.style.color= "white";

   daily()
})

wbutton.addEventListener('click', () => {
  wbutton.style.color= "white";
 
  weekly()
})

mbutton.addEventListener('click', () => {
  mbutton.style.color= "white";
  mbutton.classList.add('active')
  monthly()
})


function daily(){
  fetch('./data.json').then((request) => {  
    if(!request.ok) {
      console.log('Oops! Something went wrong.');
      return null;
    }
    
    return request.json();
  })
  .then((data) => {
    hours.forEach((e,i) => {
      hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
      previous[i].innerHTML = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs';
      
  })
  });

}


function weekly(){
  fetch('./data.json').then((request) => {  
    if(!request.ok) {
      console.log('Oops! Something went wrong.');
      return null;
    }
    
    return request.json();
  })
  .then((data) => {
    hours.forEach((e,i) => {
      hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
      previous[i].innerHTML = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
  })
  });
}



function monthly(){
  fetch('./data.json').then((request) => {  
    if(!request.ok) {
      console.log('Oops! Something went wrong.');
      return null;
    }
    
    return request.json();
  })
  .then((data) => {
    hours.forEach((e,i) => {
      hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
      previous[i].innerHTML = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs'
  })
  });

}

