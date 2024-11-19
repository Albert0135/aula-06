let x = 100;

function testScope() {
  let x = 50;
  console.log("Valor de x dentro da função:", x);

  if (true) {
    let x = 30;
    console.log("Valor de x dentro do bloco if:", x);
  }
}

testScope();
console.log("Valor de x no escopo global:", x);