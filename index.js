//const names = ["Guadalupe","Ollie","Aki"];
function writeCards(names,event){
 // const names = ["Guadalupe","Ollie","Aki"];
  const message = [];
  for (let i = 0; i < names.length ; i++){
    const messages = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    message.push(messages);
    //console.log(message);

  }
  return message;
}
  //writeCards(["Guadaulupe","Ollie","Aki"],"surprise");
  console.log(writeCards(["Guadaulupe","Ollie","Aki"],"surprise"));
  function countDown(){
    let count = 0;
    while (count < 11){
      console.log(count++);
    }
  }
    