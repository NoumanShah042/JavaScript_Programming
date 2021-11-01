console.log('This is tutorial 47');
//  https://regexr.com/    very helpful
// https://www.youtube.com/watch?v=rhzKDrUiJVk    (one video)

// A regular expression is a sequence of characters that forms a search pattern.

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// A regular expression can be a single character, or a more complicated pattern.

// Regular expressions can be used to perform all types of text search and text replace operations.
 

// Meta Characters are only aplicable on single  character or  group() just before it ***

let regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; // matches any one character
regex = /h*rry/; // matches any 0 or more characters
regex = /ha?rryi?t/; // ? after character means that character is optional
regex = /h\*rry/    // we want to find h*rry with * in between ( tell that its not a meta char)

let str = "h*rry means codewith"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string (${str}) matches the expression (${regex.source})`);
}
else {
    console.log(`The string (${str}) does not match the expression (${regex.source})`);
}

// re 1   -- Functions to match expressions
// re 2   --  meta characters(^ , $ , . , * , ? , \*)
// re 3   --  meta characters( [] , {} , () )

// re 4   --  Character classes(\w , \W , ..) , 
//            Assertions (?=y)(?!y)

/*

Meta Characters: 
[] A set of characters ( accept only one character in brackets )
\ Signals a special sequence (can also be used to escape special characters)
. Any character (except newline character)
^ Starts with
$ Ends with
* Zero or more occurrences  ( same as   ?+  )
+ One or more occurrences
? zero or one occurrences(optional)
{} Exactly the specified number of occurrences 
| Either or
() Capture and group
-   denote a range  For example, REGEXP '[a-e]' matches a, b, c, d, and e.




Special Sequences:
\A Returns a match if the specified characters are at the beginning of the string
\b Returns a match where the specified characters are at the beginning or at the end of a word r"ain\b"
\B Returns a match where the specified characters are present, but NOT at the beginning (or at the end) of a word

\d Returns a match where the string contains digits (numbers from 0-9)
\D Returns a match where the string DOES NOT contain digits
\s Returns a match where the string contains a white space character
\S Returns a match where the string DOES NOT contain a white space character
\w Returns a match where the string contains any word characters (characters from a to Z, digits from 0-9, and the underscore _ character)
\W Returns a match where the string DOES NOT contain any word characters
\Z Returns a match if the specified characters are at the end of the string

exercise:

// Meta Characters are  aplicable on single_character or Special_Seq or  group()  just before it ***

/\w{4}/g   matches any word of length 4
/\w{4,}/g   matches any word of length 4 or more
/\w{4,5}/g  matches any word of length between 4 and 5
/[fc]at/g  matches cat or fat
/[a-zA-Z]at/g   matches aat,Aat, bat,Bat,  cat,Cat and so on
/[a-c]at/g   matches aat,bat,cat  only
/(t|T)he/g   matches the or The 
/[tT]he/g    matches the or The   
/(re){2,3}/g   matches re that comes 2 or 3 times ( rere or rerere  ) 
/\.$/g         matches . at the end of string
/([a-zA-Z]){2,7}/   matches string of albhabets of length between 2-7
/^[a-z]{4}/  Match string that has starting 4 alphabets i.e "abcd" , "absggs", "gdgdggdgdgsgsgsgs"
/^[a-z]{4}$/  Match string that has exactly 4 alphabets i.e "abcd" , "absg", "noum"


from test file:

/^[a-z]{4}/  Match string that has starting 4 alphabets i.e "abcd" , "absggs", "gdgdggdgdgsgsgsgs"

/^[a-z]{4}$/  Match string that has exactly 4 alphabets i.e "abcd" , "absg", "noum"
/^([0-9]){10}$/  Match string that has exactly 10 digits.
/^[a-z]([0-9]){10}$/   Match string with exactly one char and futher 10 digits (a1234567890)
/[a-z][0-9]{10}$/      Match string end with one char and futher 10 digits (a1234567890)

/^[a-zA-Z]{2,7}$/ or  /^([a-zA-Z]){2,7}$/   Match with alphabets of length 2 - 7 exactly
/([a-zA-Z]){2,7}$/       Match with alphabets end with  2 - 7  alphabets
/\.([a-zA-Z]){2,7}$/     Match with alphabets end with  '.' followed by 2 - 7  alphabets
/^\.([a-zA-Z]){2,7}$/    Match with alphabets  with  '.' followed by 2 - 7  alphabets exactly




*/

/*

// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

Brackets:
Brackets are used to find a range of characters:

Expression	Description
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
(x|y)	Find any of the alternatives specified


*******************************************
Metacharacters:
Metacharacters are characters with a special meaning:

Metacharacter	Description
.	Find a single character, except newline or line terminator
\w	Find a word character
\W	Find a non-word character
\d	Find a digit
\D	Find a non-digit character
\s	Find a whitespace character
\S	Find a non-whitespace character
\b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	Find a match, but not at the beginning/end of a word
\0	Find a NULL character
\n	Find a new line character
\f	Find a form feed character
\r	Find a carriage return character
\t	Find a tab character
\v	Find a vertical tab character
\xxx	Find the character specified by an octal number xxx
\xdd	Find the character specified by a hexadecimal number dd
\udddd	Find the Unicode character specified by a hexadecimal number dddd

Quantifiers:
Quantifier	Description

n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n (optional)
n{X}	Matches any string that contains a sequence of X n's
n{X,Y}	Matches any string that contains a sequence of X to Y n's
n{X,}	Matches any string that contains a sequence of at least X n's
n$	Matches any string with n at the end of it
^n	Matches any string with n at the beginning of it
?=n	Matches any string that is followed by a specific string n
?!n	Matches any string that is not followed by a specific string n

//  "A is followed by B" means B follows A, that means A comes first, B comes next.

*/

/*

cheetsheet  *****

Character classes:
.	any character except newline
\w\d\s	word, digit, whitespace
\W\D\S	not word, digit, whitespace
[abc]	any of a, b, or c
[^abc]	not a, b, or c
[a-g]	character between a & g

Anchors:
^abc$	start/end to  fetch complete string which fulfill given  rules  
\b\B	word, not-word boundary

Escaped characters:
\.\*\\	escaped special characters
\t\n\r	tab, linefeed, carriage return

Groups & Lookaround:
(abc)	capture group
\1	backreference to group #1
(?:abc)	non-capturing group
(?=abc)	positive lookahead
(?!abc)	negative lookahead

Quantifiers & Alternation:
a*a+a?	0 or more, 1 or more, 0 or 1
a{5}a{2,}	exactly five, two or more
a{1,3}	between one & three
a+?a{2,}?	match as few as possible
ab|cd	match ab or cd

*/
