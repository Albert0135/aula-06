let phrase = "JavaScript is fun!";
let counter = 0;

for (let i = 0; i < phrase.length; i++) {
  console.log(phrase[i]);

  if (phrase[i].toLowerCase() === 'a') {
    counter++;
  }
}

console.log("Ocorrências da letra 'a':", counter);

let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}