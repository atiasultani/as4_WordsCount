import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: " Type Your sentences or paraghrap for words count : ",
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
//print word lenth
console.log(`words count number is:${words.length}`);
