const sentence = "hello there from lighthouse labs";
const textPosition = 0;
let speed = 1000;

for (const char of sentence) {
  
  if (textPosition < sentence.length) {
    setTimeout(() =>process.stdout.write(char), speed += 50); //the type writing animation, speed runs each letter after +50ms
  }
}

setTimeout(() => { //This portion creates a new line
  console.log('');
}, speed);