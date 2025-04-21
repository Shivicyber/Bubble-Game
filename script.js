var timer = 60;
var score = 0;
var hitrn = 0;
// let restartbtn = document.createElement('button');// restartbtn.innerText = "Restart";// let pbottom = document.getElementById("#pbottom");

function increaseScore(){
  score += 10;
  document.querySelector('#scoreVal').textContent=score;
}
function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
  document.querySelector('#hitVal').textContent = hitrn;
}

function makeBubble(){
  var clutter = "";
  for(var i=1; i<=102; i++){
    rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
  }
  
  document.querySelector('#pbottom').innerHTML = clutter;
}

function runTimer(){
  var timeInt = setInterval(function (){
    if(timer>0){
      timer--;
      document.querySelector('#timeVal').textContent = timer;
    }else{
      document.querySelector('#pbottom').innerHTML=`<h1>Game Over</h1>`;
      // let restartbtn = document.createElement('button');
      
      // let pbottom = document.getElementById("#pbottom");
      // pbottom.append('restartbtn');

      clearInterval('timerInt')
    }
    
  },1000)
}


document.querySelector('#pbottom').addEventListener('click',function(dets){
  var clickedNum = Number(dets.target.textContent);
  if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
  }
})

// function restart(){
//   getNewHit();
//   runTimer();
//   makeBubble();
// }
// restartbtn.addEventListener('click',restart);

// increaseScore();
// increaseScore();
getNewHit();
runTimer();
makeBubble();
