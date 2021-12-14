const name1 = "Sam";
const name2 = "Charlene";
const name3 = "Samuella";

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} is the longest name`);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} is the longest name`);
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(`${name3} is the longest name`);
} else if (name1.length === name2.length && name1.length > name3.length) {
    console.log(`${name1} and ${name3} are tied for the longest name`); 
} else if (name1.length === name3 && name1.length > name2.length) {
    console.log(`${name1} and ${name3} are tied for longest name`);
} else if (name2.length === name3.length && name2.length > name1.length) {
    console.log(`${name2} and ${name3} are tied for longest name`);
} else if (name1.length === name2.length && name2.length === name3.length) {
    console.log("All three names are the same length.");
}