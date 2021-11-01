console.log("This is tutorial 49");

// Character classes
let regex = /\war/;     //word character - _ or alphabet or numbers
regex = /\w+d1r/;       // \w+ means one or more word characters
regex = /\Wbhai/;       // Non word character
regex = /\W+bhai/;      // \W+ means more than one Non word character
regex = /number \d999/; // \d means digit
regex = /number \d+/;   // \d+ means more than one digit
regex = /\D999/;        // \D means non digit
regex = /\D+999/;       // \D+ means more than one non digit
regex = /\ska number/;  // Match whitespace character ( tab , space , null )
regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
regex = /\Ska number/;  // Match non whitespace character
regex = /\S+ka number/; // Match one or more than one non whitespace character
regex = /4r5r\b/;  // word boundary

// Assertions  
regex = /h(?=y)/;  // agr 'h' k bad 'y' to match ho jaye ga
regex = /h(?!y)/;  // agr 'h' k bad 'y' na ho to match ho jaye ga
str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";



let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}



/*
these matches match the string insde a string and tell its index.

/\war/     match with     aar , bar , har  , nar , ...
/\w+d1r/   match with    harh7rd1r , 7rd1r
/\Wbhai/   match with    " bhai" , "%bhai" , "$bhai" , "@bhai" , ...
/\W+bhai/  match with    " bhai" , "%bhai" , "$bhai" , "@bhai" , " %%bhai" , "%$$$bhai" , "$%% ^$bhai" , %%$@bhai , ...

/\d999/              match with    " 0999" , "1999" , "3999" , "4999" , ...
/number \d+/         match with    number 899999
/number \d+ \d+/     match with    "number 899999 12342455" , ...

/\D999/    match with    "y999" ,   "^999" , "A999" ,..
/\D+999/    match with    "yafaf999" ,   "^ada^999" , "ab$999" ,..

/\ska number/    match with    " ka number" ,"\0ka number"  , "\tka number" 
/\s+ka number/    match with    " ka number" , "  ka number"  , "\tka number" , "\t\t\tka number"  , ...



/\Ska number/    match with    "aka number" ,"bka number"  , "$ka number"  , ...
/\S+ka number/    match with    "abska number" , "a^ska number"  , "555ka number" ,  ...

/4r5r\b/    match with    "agsggsgsg4r5r hello"  

*/