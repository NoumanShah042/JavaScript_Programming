let regex = /^[a-z]{4}/;
let str = "abcd";


regex = /^[a-z]{4}$/;     //  match any char of length 4
str = "aabcd";

regex = /^[a-z][a-z]{4}$/;     //  start with an alphabet and end with 4 alphabets
str = "aabcd";


regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.[a-zA-Z]{2,7}$/;
str = "bcsf18m027@pucit.edu.p";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`       "${str}"     =   /${regex.source}/`);
}
else {
    console.log(`       "${str}"    !=   /${regex.source}/`);
}


/*

/^[a-z]{4}/  Match string that has starting 4 alphabets i.e "abcd" , "absggs", "gdgdggdgdgsgsgsgs"

/^[a-z]{4}$/  Match string that has exactly 4 alphabets i.e "abcd" , "absg", "noum"
/^([0-9]){10}$/  Match string that has exactly 10 digits.
/^[a-z]([0-9]){10}$/   Match string start with alphabet and further 10 digits
/[a-z][0-9]{10}$/        same as above

/^[a-zA-Z]{2,7}$/ or  /^([a-zA-Z]){2,7}$/   Match with alphabets of length 2 - 7 exactly
/([a-zA-Z]){2,7}$/       Match with alphabets end with  2 - 7  alphabets
/\.([a-zA-Z]){2,7}$/     Match with alphabets end with  '.' followed by 2 - 7  alphabets
/^\.([a-zA-Z]){2,7}$/    Match with alphabets  with  '.' followed by 2 - 7  alphabets exactly


/([no][yes]){4}$/   Match with only "nenenene"


 */