function decide(option){
    let options = ['paper', 'scissor', 'rock'];
    let comp = options[Math.floor(Math.random() * 10 /3.4)]

    document.getElementById('right').src = `media/${option}Right.jpg`;
    document.getElementById('left').src = `media/${comp}Left.jpg`;
    
    let result = document.getElementById('result');
    let li = document.createElement('li');
    result.prepend(li);
    if (option == 'paper' && comp == 'rock'){
      li.textContent = ` you won!! you chose ${option} and the computer chose ${comp}`;
      
    } else if(option == 'rock' && comp == 'paper'){
      li.textContent = `You lose!! you chose ${option} and the computer chose ${comp}`;
      
    } else {
       li.textContent = options.indexOf(option) == options.indexOf(comp)?
       'it\'s a draw': options.indexOf(option) > options.indexOf(comp)?
       ` you win!! you chose ${option} and the computer chose ${comp}`: 
       ` you lose!! you chose ${option} and the computer chose ${comp}`;
     } 
  }
  function clearIt(){
    let list = document.getElementsByTagName('li');
    while (list[0]){
      list[0].remove();
    };
  }