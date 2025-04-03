let varA = `A` //B
let varB = `B` //C
let varC = `C` //A

const temp = varA //B
varA = varB //C
varB = varC //A
varC = temp //B


console.log(varA, varB, varC)