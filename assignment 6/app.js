// Assignment # 21-25


// 1. Write a program that takes two user inputs
// for first and last name using prompt and merge them in a new variable titled fullName. 
// Greet the user using his full name.

// var first_name = prompt("Enter your first name:")
// var last_name = prompt("Enter your last name:")
// var full_name = first_name + " " + last_name
// document.write("Welcome" + " "+ full_name)

//2. Write a program to take a user input about his favorite mobile phone model.
//  Find and display the length of user input in your browser

// var a = prompt("Enter your favorite mobile phone model")
// var b = "My favorite phone is: " + " "+ a + "<br>"
// document.write(b)
// var str = b.length;
// document.write("Lenght of string:"+ " "+ str)

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and 
// display the result in your browser .

// var str = "Pakistan"
// var b= str.indexOf("n")
// document.write("String:" + " "+ str +"<br>"+ "Index of 'n':" + " " + b)

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and 
// display the result in your browser.

// var str= "Hello World"
// var b = str.lastIndexOf("l")
// document.write("String:"+ " "+ str+ "<br>"+ "Last index of 'l':"+" "+ b) 

// 5. Write a program to find the character at 3rd index in the word “Pakistani” 
// and display the result in your browser.

// var str= "Pakistani"
// var b = str.charAt(3)
// document.write("String:"+ " "+ str+ "<br>"+ "Character at index 3:"+" "+ b)

// 6. Repeat Q1 using string concat() method.

// var first_name = prompt("Enter your first name:") + " "
// var last_name = prompt("Enter your last name:")
// var full_name = first_name.concat(last_name);
// document.write("Welcome" + " "+ full_name)

// 7. Write a program to replace the “Hyder” to “Islam”
//  in the word “Hyderabad” and display the result in your browser.

// var City = "Hyderabad"
// var City2= City.replace("Hyder", "Islam");
// document.write(City2)

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display
//  the result in your browser. 

//  var message = "Ali and Sami are best friends. They play cricket and football together.";
//  var message2= message.replace(/and/g, "&");
// document.write(message2)

// 9. Write a program that converts a string “472” to a number 472.
//  Display the values & types in your browser.

// var a = "472"
// var b = parseInt(a)
// document.write("Value:"+ " " + a +"<br>"+ "Type:"+ " "+ "String" + "<br>" + "Value:"+ " " + b +"<br>"+ "Type:"+ " "+ "Number" )

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var a = prompt("Enter Your Input:")
// document.write(a.toUpperCase())

// 11. Write a program that takes user input. Convert and show the input in title case.

// var a = prompt("Enter your input:")
// var firstchar= a.slice(0,1);
// firstchar= firstchar.toUpperCase()
// var otherchar= a.slice(1);
// otherchar= otherchar.toLowerCase()
// var b= firstchar + otherchar;
// document.write(b)

// 12. Write a program that converts the variable num to string.
//  var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num= 35.36
// var str= num.toString()
// var a = str.split('.').join("");
// document.write("Number:" + " "+ str +"<br>" + "Result:" + " " + a)

// 13. Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. 
// Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// var A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]


// 15. Write a program to take password as an input from user.
// The password must qualify these requirements:
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements, 
//   prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// // 16. Write a program to convert the following string to an array using string split method.
// //  var university = “University of Karachi”; Display the elements of array in your browser.

// var university = "University of Karachi";
// var arr= university.split();
// document.write(arr)


// 17. Write a program to display the last character of a user input.

// var a = prompt("Entery your input");
// var b = a.charAt(a.length-1);
// document.write("User input:" + " " + a + "<br>" + "Last character of input:" + " " + b)


// 18. You have a string “The quick brown fox jumps over the lazy dog”.
//  Write a program to count number of occurrences of word “the” in given string.

// var a = "the quick brown fox jumps over the lazy dog";
// var count = 0;
// var pos = a.indexOf("the");
// while(pos > -1){
//     ++count;
//     pos = a.indexOf("the", ++pos);
// }
// document.write("Text:" + " " + "The quick brown fox jumps over the lazy dog <br> There are" + " " + count +" " + "occurrence(s)"+ "of word 'the'");

