function rollDice(){

      const numOfDice = document.getElementById("numOfDice").value;
      const diceResult = document.getElementById("diceResult");
      const diceImages = document.getElementById("diceImages");
      const values=[]
      const images=[]


      if (numOfDice > 6) {
    diceResult.textContent = "mehh";
    diceImages.innerHTML = "";
    return;
  }

      for (let i=0; i< numOfDice; i++){
            const value =Math.floor(Math.random()* 6) +1;
            values.push(value);
            images.push(`<img src="images/${value}.png" alt="dice${value}">`);
      }

      
      diceResult.textContent = `dice: ${values.join(', ')}`;
      diceImages.innerHTML = images.join('');
} 