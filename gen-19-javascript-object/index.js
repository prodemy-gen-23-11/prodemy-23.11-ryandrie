const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const person = new Object();
readline.question("What is your name? ", (ans) => {
    person.name = ans;
    readline.question("Where are you from? ", (ans) => {
        person.address = ans;
        readline.question(
            'What programming languages have you ever studied? (Use comma "," if you learn than one) ',
            (ans) => {
                person.pLanguage = ans.split(",");
                console.log(person);
                readline.close();
            }
        );
    });
});
