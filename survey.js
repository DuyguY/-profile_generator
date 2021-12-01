const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        rl.question("Which sport is your absolute favourite?", (sports) => {
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
            console.log(`${name}'s favorite activity is ${activity} and likes listen to the ${music} while doing that.Also ${name}'s favorite meal is {meal} and prefers ${sports} over after all, and is wonderfull at ${answer}.`);
            rl.close();
          });
        });
      });
    });  
  });
});  

