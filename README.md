# Children Of the Akan
Website that takes your birthday and turns it into an Akan first name

deployed on: [Go Ghana Website ]( https://gear5km.github.io/go-ghana/)

URL: https://gear5km.github.io/go-ghana/

Author: Kimani Mbatia

Description: This Website gives the user an Akan name based on their day of birth. 

Project Setup : Webpage made with HTML and Bootstrap. BackEnd code
written in JavaScript.

BirthDay() function is executed when the user clicks the "Try" button in the html page and stores the initial userinput.

The CheckDay() and CheckMonth() functions look to ensure valid user input. The CheckGender() function is for Development purposes as well as to assign a value to users gender (Male=1 and Female=2). 

The Main() function converts user date of birth input into a JavaScript Date, returning a daynumber (0-6 for Sunday to Saturday). the DayName() function checks if the gender value is 0 or 1 in an if statement and then runs the following code for males (1) or females (2) by taking the "daynumber" return value and assigning a name based on the value e.g 0=Sunday=Kwasi.

The DayName() function returns an AkanName to the initial BirthDay() function which in turn prints out the name to the "NameOutput" element in the HTML file.

Licence: MIT
