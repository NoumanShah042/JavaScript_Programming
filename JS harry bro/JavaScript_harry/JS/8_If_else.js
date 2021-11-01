console.log('This is tutorial 8');

/*
Conditions    Meaning
a == b      a is equal to b
a  != b     a is not equal to b
a < b       a is less than b 
a> b        a is greater than b 
a <= b      a is less than or equal to b  
a >= b      a is greater than or equal to b
a===b       a has the same value and same type as b   */


// note 
// 65 == '65'    -> true
// 65 === '65'   -> false
// 65 === 65     -> true
// 65 != '65'    -> false
// 65 !== '65'   -> true
// 65 !== 65     -> false

const age = 128;
const doesDrive = false;
const vari = 34;

if (age!=19){
    console.log('Age is not 19')
}

if(age !== 65){
    console.log('Age is not 65')
}
else{
    console.log('Age is not 19')
}

if (typeof vari !== 'undefined'){
    console.log('Vari is defined');
}

else{
    console.log('Vari is not defined');
}

if (doesDrive || age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

console.log(age==45? 'Age is 45': 'Age is not 45');
