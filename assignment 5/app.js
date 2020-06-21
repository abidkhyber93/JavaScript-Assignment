// ALERTS
// Assignment # 1

// 1. Write a script to greet your website visitor using JS alert box.

// var greet = "Welcom to our page"
// alert(greet)

// 2. Write a script to display following message on your web page:

// var error = "Error! Please enter a valid password."
// alert(error)

// 3. Write a script to display following message on your web page: (Hint : Use line break)

// var a= ("Welcome to JS Land..." + "\n" + "Happy Coding!")
// alert(a)

// 4. Write a script to display following messages in sequence:

// var a = "Welcom to JS Land..."
// var b = "Happy Coding!" + "\n" + "Prevent this page form creating additional dialogs"
// alert(a)
// alert(b)

// 5. Generate the following message through browser’s developer console:

// var a = "Hello... I can run JS through my web browser's console"
// console.log(a)


// VARIABLES FOR STRINGS
// Assignment # 2


// 1. Declare a variable called username.

// var username = ""

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

// var  myName = "Muhammad Abid"

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// var message = "Hello World"
// alert(message)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// var name = "Jhone Doe"
// var age = "15 years old"
// var course = "Certified Mobile Application Development"
// alert(name)
// alert(age)
// alert(course)

// 5. Write a script to display the following alert using one JS variable:
// var x= "PIZZA"
// for(var i =4; i < 5; i--){
//     for(var j =0; j < i; j--){
//         document.write(x[i])
//     }
//         document.write("<br>")
// }

// var x= "PIZZA"
// for(var i =0; i < 5; i++){
//     document.write(x[0,i])
// }

// 6. Declare a variable called email and assign to it a string that represents your Email Address
// (e.g. example@example.com). Show the blow mentioned message in an alert box.
// (Hint: use string concatenation).

// var email= "abidkhyer93@gmail.com"
// alert("My email address is" + " " + email)

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
// Display the following message in an alert box:

// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the book" + " " + book )

// 8. Write a script to display this in browser through JS

// var a = "Yah! I can write HTML content through JavaScript"
// document.write(a)

// 9. Store following string in a variable and show in alert and browser through JS 
// “▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”
// var a = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
// alert(a)


// VARIABLES FOR NUMBERS
// Assignment # 3

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
// var age = 24
// alert("I am" + " " + age + " " + "years old")

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
// Show his/her number of visits on your web page. For example:
// “You have visited this site N times”.

// var n;
// for(n= 1; n =>1; n++){
//     alert("You have visited this site" + " " + n + " " +"times" )
// }

// 3. Declare a variable called birthYear & assign to it your birth year.
// Show the following message in your browser:

// var birthYear = 1995
// document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declaired variable is number")

// 4. A visitor visits an online clothing store www.xyzClothing.com .
// Write a script to store in variables the following information: a. Visitor’s name b. Product title 
// c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser:
//  “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var x = "XYZ Clothing store"
// var Name = prompt("Enter your name:")
// var Product= prompt("Enter product:")
// var Quantity= prompt("Enter Quantity:")
// document.write(Name+" " + "ordered" + " "+ Quantity+" "+ Product+" "+ "on" + " "+ x)

// VARIABLE NAMES: LEGAL & ILLEGAL
// Assignment # 4

// 1. Declare 3 variables in one statement.

// var x= 1
// var x1= 1
// var x2= 1

// 2. Declare 5 legal & 5 illegal variable names.
 
// Legal variable:
// 1.my name  2.my-name  3.userAlert  4.myVar  5. 123 

// Illegal varible:
// 1.myname  2.my_name  3.xyz  4.$on  5.x123

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// var a= "<b>Rules for naming JS variables </b><br><br><br>"
// var b = "Variable names can only contain numbers, $, and _. For example $my_1stVariable<br>"
// var c= "Variables must begin with a letter, $ or _. For example $name, _name or name<br>"
// var d = "Variable names are case sensitive<br>"
// var e = "Variable names should not be JS keywords"

// document.write(a+b+c+d+e)

// MATH EXPRESSIONS
// Assignment # 5

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var a = +prompt("Enter first Number")
// var b = +prompt("Enter second Number")
// var c = a+b
// document.write("Sum of" +" " + a +" " + "and" + " " + b + " " + "is" + " "+ c)

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// var a = +prompt("Enter first Number")
// var b = +prompt("Enter second Number")
// var c = a-b
// document.write("Subtraction of" +" " + a +" " + "and" + " " + b + " " + "is" + " "+ c)

// var a = +prompt("Enter first Number")
// var b = +prompt("Enter second Number")
// var c = a*b
// document.write("Multiplication of" +" " + a +" " + "and" + " " + b + " " + "is" + " "+ c)

// var a = +prompt("Enter first Number")
// var b = +prompt("Enter second Number")
// var c = a/b
// document.write("Division of" +" " + a +" " + "and" + " " + b + " " + "is" + " "+ c)

// var a = +prompt("Enter first Number")
// var b = +prompt("Enter second Number")
// var c = a/b
// if (a%b == 0)
// document.write("Modulus of" +" " + a +" " + "and" + " " + b + " " + "is" + " "+ 0)
// else
// document.write("Modulus of" +" " + a +" " + "and" + " " + b + " " + "is" + " "+ 1)

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// 4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
//  Example output:

// var movie_ticket= 600
// var ticket_required = prompt("How many ticket required")
// var total_price= movie_ticket*ticket_required
// document.write("Total cost to buy"+" "+ticket_required +" "+"tickets to a movies is"+" "+total_price+"PKR")

// 5. Write a script to display multiplication table of any number in your browser. E.g

// document.write("Table of 4"+"<br>")
// for (var i=1; i<=10; i++){
//     document.write("4"+ "x" + i + "=" + 4*i +"<br>")
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var C= +prompt("Enter Celsius temperature")
// var b =(C*9/5) + 32
// document.write(C+ "\u2103 is" + " " + b +"\u2109 <br>")
// var F= +prompt("Enter Fahrenheit temperature")
// var a =(F-32) * 5/9
// document.write(F + "\u2109 is" + " "+ a + "\u2103" )

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// document.write("<b>Shopping Cart </b><br><br>")
// var p1= 650
// var p2= 100
// var s= 100
// var o1= prompt("Enter item 1 quantity:")
// var o2= prompt("Enter item 2 quantity:")
// document.write("Price of item 1 is" + " "+ p1 +"<br>")
// document.write("Quantity of item 1 is" + " "+ o1+ "<br>")
// document.write("Price of item 2 is" + " "+ p2+ "<br>")
// document.write("Quantity of item 2 is" + " "+ o2+ "<br>")
// document.write("Shipment charges" + " "+ s+ "<br><br>")
// document.write("Total cost of your order is" + " " + (p1*o1+p2*o2+s))

// 8. Store total marks & marks obtained by a student in 2 variables.
//  Compute the percentage & show the result in your browser

// document.write("<b>Marks Sheet</b><br><br>")
// var total_marks= +prompt("Enter total marks")
// var obtain_marks= +prompt("Enter obtain marks")
// var x= obtain_marks/total_marks*100
// document.write("Total marks:"+ " " + total_marks +"<br>")
// document.write("Marks obtained:"+ " " + obtain_marks+"<br>")
// document.write("Percentage:"+ " "+ x)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// document.write("<b>Currency in PKR</b><br><br>")
// var dollar = 104.80
// var Riyal= 28
// document.write("Total Currency in PKR:  "+ (10*dollar + 25*Riyal))

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression.

// var a= 3
// b= ((a+5)*10)/2
// document.write(b)

// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

// document.write("<b> Age Calculator</b><br><br>")
// var current_year= 2020
// var birth_year= prompt("Enter Your birth year")
// var age = current_year-birth_year
// var age2= age-1
// document.write("Current Year:" + " " + current_year + "<br>")
// document.write("Birth Year:" + " " + birth_year + "<br>")
// document.write("Your age is :" + " " + age2 + " " + "or" + " "+ age)

// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”.
//  (Hint : Area of a circle = π r2, π = 3.142)

// document.write("<b>The Geometrizer</b><br><br>")
// var π = 3.14159265359
// var r= prompt("Enter Radius")
// var Circumference= 2*π*r
// document.write("Radius of a circle:"+ " "+ r + "<br>")
// document.write("The Circumference is:"+ " "+ Circumference + "<br>")
// document.write("The area is:"+ " " + (π*r*r))

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//  a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable.
//  d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// document.write("<b>The Lifetime Supply Calculator</b><br><br>")
// var snack= "Lays"
// var age = 24
// var maximum_age= 80
// var amount_p_d= 2
// var remaining_life= maximum_age-age
// var required_more= remaining_life*365*2
// document.write("Favourite Snack:"+ " "+ snack + "<br>")
// document.write("Current age:"+ " "+ age + "<br>")
// document.write("Estimated maximum age:"+ " "+ maximum_age + "<br>")
// document.write("Amount of snacks per day:"+ " "+ amount_p_d + "<br>")
// document.write("You will need"+ " "+ required_more + " "+ snack +" "+ "to last you until the ripe old age of" + " "+ maximum_age)


// MATH EXPRESSIONS
// Assignment # 6-9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a= 10
// var b= a+1
// var c= b+1
// var d= c-1
// var e= d-1
// document.write("Result:" + " <br>")
// document.write("The value of a is:" + " " + a + "<br><br>")
// document.write("The value of ++a is :" + " " +b+ " <br>")
// document.write("Now the value of a is :" + " " +b+ " <br><br>")
// document.write("The value of a++ is :" + " " +b+ " <br>")
// document.write("Now the value of a is :" + " " +c+ " <br><br>")
// document.write("The value of --a is :" + " " +d+ " <br>")
// document.write("Now the value of a is :" + " " +d+ " <br><br>")
// document.write("The value of a-- is :" + " " +d+ " <br>")
// document.write("Now the value of a is :" + " " +e+ " <br><br>")

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// var result= --a - --b + ++b + b--

// Explaination
// --a;= -1+2
// --a - --b; -1+2- -1+1
// --a - --b + ++b; -1+2- -1+1 + +1+1 
// --a - --b + ++b + b--; -1+2- (-1+1) + +1+1 +1(-1)= 1+1-1+2+1-1= 3

// document.write("a is"+ " " + 2+ "<br>")
// document.write("b is"+ " " + 1+ "<br>")
// document.write("result is " + " "+ result)

// 3. Write a program that takes input a name from user &
// greet the user.

// var name= prompt("Enter your name")
// document.write("Welcome" + " " + name)

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var num= +prompt("Enter number")
// for (var i=1; i<=10; i++){
//     document.write(num+ "x" + i + "=" + num*i +"<br>")
// }

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)


// USER INPUT & CONDITIONAL STATEMENT
// Assignment # 9-11

// 1. Write a program to take “city” name as input from user. 
// If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city= prompt("Enter city:")
// if (city=="Karachi"){
//     document.write("Welcome to city of lights")
// }

// 2. Write a program to take “gender” as input from user. 
// If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender")
// if(gender=="male"){
//     document.write("Good Morning Sir")
// }
// else if (gender=="female"){
//     document.write("Good Morning Ma’am.")
// }

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var color= prompt("Enter color name:")
// if (color=="Red"){
//     document.write("Must Stop")
// } else if (color=="Yellow"){
//         document.write("Ready to move")
// }else if (color=="Green"){
//     document.write("Move now")
// }

// 4. Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var fuel = +prompt("Enter your current fuel")
// if (fuel<0.25){
//     document.write("Please refill the fuel in your car")
// }

// 5. Run this script, & check whether alert message would be displayed or not. 
// Record the outputs. a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }
// Alert displayed "given condition for variable a is true"
// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }
// Alert not displayed

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// if (c === 13){ 
//     alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// if(c === 14){ 
//     alert("condition 4 is true"); 
// }
//Two Alerts displayed ie "condition 2 is true" and "condition 4 is true"

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }
// Alert displayed "The cost equals"

// if (true){ 
//     alert("True"); 
// } 
// if (false){
//     alert("False");
// }
// Alert displayed "True"

// if("car" < "cat"){
//      alert("car is smaller than cat"); 
// }
// Alert displayed "car is smaller than cat"

// 6. Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:

// document.write("<b>Mark Sheet</b> <br><br><br>")
// var a = +prompt("Enter subject 1 marks out of 100:")
// var b = +prompt("Enter subject 2 marks out of 100:")
// var c = +prompt("Enter subject 3 marks out of 100:")
// var obtain_marks= a+b+c
// var total_marks= 300
// var percentage= obtain_marks/total_marks*100
// document.write("Total marks:"+ " "+total_marks +"<br>")
// document.write("Marks obtained:"+ " "+obtain_marks +"<br>")
// document.write("Percentage:"+ " "+ percentage +"<br>")

// if (percentage>=80 && percentage<100){
//     document.write("Grade: A-one <br>") 
//     document.write("Remarks: Excellent <br>") 
// }
// else if (percentage >=70 && percentage<80  ){ 
//     document.write("Grade: A <br>") 
//     document.write("Remarks: Good <br>") 
// }
// else if (percentage >=60 && percentage<70  ){ 
//     document.write("Grade: B <br>") 
//     document.write("Remarks: You need to improve <br>") 
// }
// else if (percentage <60){ 
//     document.write("Grade: Fail <br>") 
//     document.write("Remarks: Sorry <br>") 
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var a = 5
// var b= +prompt("Guess the secret number:")
// if ( b==a){
//     document.write("Bingo! Correct answer")
// }
// else if (b== a-1){
//     document.write("Close enough to the correct answer")
// }

// 8. Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3.

// var a = +prompt("Enter number to check")
// if (a%3==0){
//     document.write(a + " "+"is divisible by 3")
// }

// 9. Write a program that checks whether the given input is an even number or an odd number.

// var a = +prompt("Enter number to check")
// if (a%2==0){
//     document.write(a + " "+"is even number")
// }
// else if (a%2==1){
//     document.write(a + " "+"is odd number")
// }

// 10. Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var T = +prompt("Enter temperature:")
// if (T>40){
//     document.write("It is too hot outside")
// }
// else if (T>30){
//     document.write("The Weather today is Normal")
// }
// else if (T>20){
//     document.write("Today’s Weather is cool")
// }
// else if (T>10){
//     document.write("OMG! Today’s weather is so Cool")
// }

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. 
// Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

// var num1=prompt("Enter your first number")
// var sign=prompt("Enter your operator")
// var num2=prompt("Enter your second number")

// if (sign === "+"){
//     alert((+num1)+(+num2))
// } else if (sign=== "-"){
//     alert(num1-num2)
// }else if (sign=== "*"){
//     alert(num1*num2)
// }else if (sign=== "/"){
//     alert(num1/num2)
// }else if (sign=== "%"){
//     alert(num1/num2*100 + "%")
// }



// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// Assignment # 12-13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var a = +prompt("Enter first interger:")
// var b = +prompt("Enter second nterger:")

// if(a==b){
//     document.write("Both intergers are equal")
// }
// else if(a>b){
//     document.write(a + " " + "is larger")
// }
// else if(b>a){
//     document.write(b + " " + "is larger")
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var a = +prompt("Enter the number:")

// if(a<=-1){
//     document.write("Number is negative")
// }
// else if(a>=1){
//     document.write("Number is positive")
// }
// else if(a==0){
//     document.write("Number is zero")
// }

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel,
//  false otherwise

var a = prompt("Enter the string:")

if(a===a){
    document.write("True")
}   else if (a===e){
    document.write("True")
}   else if (a===i){
    document.write("True")
}   else if (a===o){
    document.write("True")
}   else if (a===u){
    document.write("True")
}   else{document.write("False")}