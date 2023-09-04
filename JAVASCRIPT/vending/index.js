import ColaGenerator from "./js/colaGenerator.js";

const colaGenerator = new ColaGenerator();

console.log(await colaGenerator.loadData());

colaGenerator.setup();
