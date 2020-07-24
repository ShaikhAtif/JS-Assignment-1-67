//chapter 1

//Question 1
alert("Hello Everyone!");


//Question 2
alert("Error! Please enter a valid password");

//Question 3
alert("Welcome to JS Land...\nHappy Coding!");

//Question 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

//Question 5
console.log("Hello... I can run JS thriugh web browser's console");

// chapter 2

//Question 1
var username;


//Question2
var myname = "Muhammad Atif";

//Question3
// (a)
var message;

// (b)
message = "Hello World";

// (c)
alert(message);

//Question 4
var name = "Jhone Doe";
alert(name);
var age = 15;
alert(age + " years old");
var skill = "Certified Mobile Application Developement";
alert(skill);

//Question5
var p = "PIZZA";
alert(p.slice(0,5) + "\n" + p.slice(0,4) + "\n" + p.slice(0,3) + "\n" + p.slice(0,2) + "\n" + p.slice(0,1));

//Question6
var email = "k181122@nu.edu.pk";
alert("My email address is "+ email);

//Question7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Question8
document.write("Yah! I can write HTML content through JavaScript");

//Question9
var s = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"; 
alert(s);


//chapter 3

//Question1
var age = 20;
alert("I am " + age + " years old");

//Question2
var N = 14;
alert("You have visited this site " + N + " times");

//Question3
var birthYear = 2000;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number");

//Question4
var n = "John Doe";
var title = "T-shirts";
var q = 5;
document.write("<br>" + "<br>" + n + " ordered " + q + "\n" + title + " on XYZ Clothing store");

//chapter 4

//Question1
var a, b, c;

//Question2
//legal
var atif, atif1, $atif, atif, Matif;
// alert(atif);

//illegal

// var 2m, ^atif, -atif, var, !import;

//Question3
// (a)
document.write("<b>" + "Rules for naming JS variables" + "</b>" + "<br>" + "<br>");
//(b)
document.write("Variable names can only contain letters, numbers, $, and _. For example $my_1stVariable");
//(c)
document.write("<br>" + "Variables must begin with a letter, $ or _. For example: $name, _name or name");
//(d)
document.write("<br>" + "Variable names are case sensitive");
//(e)
document.write("<br>" + "Variable names should not be JS keywords");


//chapter 5

//Question1
var a = +prompt("1st number: ");
var b = +prompt("2st number: ");

var c = a+b;

document.write("Sum of " + a + " and " +b+ " is " + c);

//2
var s = a-b;
document.write("<br>"+"<br>"+"Difference of " + a + " and " +b+ " is " + s);

var m = a * b;
document.write("<br>" + "Product of " + a + " and " +b+ " is " + m);

var d = b/a;
document.write("<br>" + "Quotiant of " + b + " and " +a+ " is " + d);

var mod = a%b;
document.write("<br>" + "Remainder of " + a + " and " +b+ " is " + mod);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//Question3
//(a)
var a;
//(b)
document.write("<br>"+"<br>"+"<br>"+"<br>"+"aalue after variable declaration is: " + a);
//(c)
a = 10;
//(d)
document.write("<br>"+"Initial value: " + a);
//(e)
++a;
//f
document.write("<br>"+"Value after increment: " + a);
a = a + 7;
//g
document.write("<br>"+ "Value after additoin is: " + a);
//i
--a;
//j
document.write("<br>"+ "Value after decrement: " + a);
//k
a = a % 3;
document.write("<br>"+ "The remainder is: " + a);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//Question4
var ticket = 600;
ticket = ticket * 5;
document.write("<br>"+"<br>"+"<br>"+"<br>"+"Total cost to buy 5 tickets to a movie is " + ticket + " PKR");

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//Question5
var num = +prompt("Enter number to have a table: ");
document.write("<br>"+"<br>"+"<br>"+"<br>");
for(var i=1; i<=10; i++)
{
    document.write(num + "x" + i + "=" + num*i);
    document.write("<br>");
}

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//Question6
//(a)
 var t1 = 35;
 //(b)
 var t2 = (t1 * 9/5) + 32;
 document.write("<br>" + t1 + "&#8451" + " is " + t2 + "&#8457");
//(c)
var t3 =76;
//(d)
var t4 = (t3 - 32) * 5/9;
document.write("<br>" + t3 + "&#8457" + " is " + t4 + "&#8451");

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//Question7
//(a)
var p1 = 650;
var p2 = 100;
var q1 = 3;
var q2 = 7;

document.write("<br>" + "<h1>" + "Shopping Cart" + "</h1>" + "<br>" + "<br>" + "<br>")

var ans = (p1 * q1) + (p2 * q2) + 100;

document.write("<br>" + "Price of item 1 is " + p1);
document.write("<br>" + "Quantity of item 1 is " + q1);
document.write("<br>" + "Price of item 2 is " + p2);
document.write("<br>" + "Quantity of item 2 is " + q1);
document.write("<br>" + "Shipping charges 100");

document.write("<br>" + "<br>" + "Total cost of your order is " + ans);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//Question8

document.write("<br>" + "<h1>" + "Marks Sheet" + "</h1>" + "<br>" + "<br>" + "<br>");

var total = 980;
var obtained = 804;
var perc = 804 / 980 * 100;

document.write("Total marks: " + total);
document.write("<br>" + "Marks obtained: " + obtained);
document.write("<br>" + perc);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//Question9
document.write("<br>" + "<h1>" + "Currency in PKR" + "</h1>" + "<br>" + "<br>" + "<br>");

var dlr = 10;
var ryl = 25;

var us = 104.80;
var saudi = 28;
curr = (us * dlr) + (saudi * ryl);
document.write("<br>" + "Total Currency in PKR; " + curr);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");




//Question10

var num2 = 20;
num2 = ((num2 +5) * 10) /2;


//Question11
//(a)
var y = 2020;
//(b)
var byear = 2000;
//(c)
ans = y - byear;
document.write("<br>" + "<h1>" + "Age calculator" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Current Year: " + y);
document.write("<br>" + "Birth Year: " + byear);
document.write("<br>" + "Your Age: " + ans);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");



//Question12
//(a)
var radius = 20;
var circum = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("<br>" + "<h1>" + "The Geometrizer" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Radius of a circle: " + radius);
document.write("<br>" + "The circumference is: " + circum);
document.write("<br>" + "The area is: " + area);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//Question13
//(a) 
var snack = "Lays";
//(b)
var age2 = 20;
//(c)
var m_age = 60;
//(d)
var amount = 3;
//(e)
ans = (60 - 20) * 3;
document.write("<br>" + "<h1>" + "The Lifetime Supply Calculator" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "Favourite Snack: " + snack);
document.write("<br>" + "Current Age: " + age2);
document.write("<br>" + "Estimated Maximum Age: " + m_age);
document.write("<br>" + "Amount of snacks per day: " + amount);
document.write("<br>" + "You will need " + ans + " " + snack + " to last you untill the ripe old age of " + m_age);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//chapter 6-9

//Question1
var n = +prompt("Enter number: ");
document.write("Result" + "<br>" + "The value of n is: "+ n);

document.write("<br>" + "<br>" + "'''''''''''''''''''''''''''''''''");

++n;
document.write("<br>" + "<br>" + "<br>" + "The value of ++n is: "+ n);

// n++;
document.write("<br>" + "<br>" + "<br>" + "The value of n++ is: "+ n++);
document.write("<br>" + "Now the value of n is: "+ n);

--n;
document.write("<br>" + "<br>" + "<br>" + "The value of --n is: "+ n);
document.write("<br>" + "Now the value of n is: "+ n);

// n--;
document.write("<br>" + "<br>" + "<br>" + "The value of n-- is: "+ n--);
document.write("<br>" + "The value of n is: "+ n);

document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");

//Question2
var n = 2, b = 1;
var result = --n - --b + ++b + b--;
document.write("<br>"+"<br>"+"<br>"+"<br>"+"n is " + n);
document.write("<br>"+"b is " + b);
document.write("<br>"+"result is " + result);


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");

//Question3
var name = prompt("Enter your name: ");
document.write("Hello " + name);


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");



//4 not in questions
//Question5
var num2 = 0;
num2 = +prompt("ENter number for table: ");

if(num2 === 0)
{
    num2 = 5;
}

for(var i=1; i<=10; i++)
{
    document.write(num2 + "x" + i + "=" + num2*i);
    document.write("<br>");
}


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");


//Question6
//(a)
var s1 = prompt("Enter subject1 name: ");
var s2 = prompt("Enter subject2 name: ");
var s3 = prompt("Enter subject3 name: ");
//(b)
var total = 100;
//(c)
var o1 = +prompt("Obtained marks for subject1: ");
//(d)
var o2 = +prompt("Obtained marks for subject2: ");
var o3 = +prompt("Obtained marks for subject3: ");


document.write("<br>" + "<br>" + "Subject\tTotal Marks\tObtained Marks\tPercentage" + "</b>");
document.write("<br>" + s1 + "\t" + "100" + "\t" + o1 + "    " + o1 + "%");
document.write("<br>" + s2 + "\t" + "100" + "\t" + o2 + "\t" + o2 + "%");
document.write("<br>" + s3 + "\t" + "100" + "\t" + o3 + "\t" + o3 + "%");

var ans1 = 01 + 02 + o3;
var ans2 = (ans1 / 300)*100;

document.write("<br>" + "<br>" + "\t" + "300" + "\t" + ans1 + "\t" +ans2+"%");

//chapter 9-11
//Question1

var city = prompt("Enter city name: ");
city = city.toLocaleLowerCase;
if(city === "karachi")
{
    alert("Welcome to city of lights");
}


//Question2

var gender = prompt("Enter your gender: ");
gender = gender.toLocaleLowerCase();

if(gender === "male")
{
    alert("Good Morning Sir");
}
else if(gender === "female")
{
    alert("Good Morning Ma'am");
}

//Question3
var signal = prompt("Enter color for signal:");
signal = signal.toLocaleLowerCase();

if(signal === "red")
{
    alert("Must Stop");
}
else if(signal === "yellow")
{
    alert("Ready to move");
}
else if(signal === "green")
{
    alert("Move now");
}
else{
    alert("Not a valid signel")
}

//Question4
var fuel = +prompt("Enter the fuel in litres: ");

if(fuel < 0.25)
{
    alert("Please refill the fuel in your car")
}

//Question5
//a
var a = 4;
if(++a === 5)
alert("given condition for variable a is true")
//message is displayed


//b
var b = 82;
if(b++ === 83)
alert("give condition for variable b is true");
//message will not be displayed


//c
var c = 12;
if(c++ === 13)
{
    alert("condition 1 is true")
}

if(c === 13)
{
    alert("condition 2 is true");
}

if(++c < 14)
{
    alert("condition 3 is true");
}

if(c === 14)
{
    alert("condition 4 is true");
}

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if(totalCost === laborCost+materialCost)
{
    alert("The cost equals");
}


//e
if(true)
{
    alert("true")

}

if(false)
{
    alert("false");
}

//f
if("car" < "cat")
{
    alert("car is smaller than cat")
}


document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")


//Question6

document.write("<h1>" + "Marks Sheet" + "</h1>" + "<br>" + "<br>" + "<br>")

var tot = +prompt("Enter total marks: ");
var obt = +prompt("Enter obtained marks: ");

var perc = obt/tot;
perc = perc*100;

if(perc >= 80)
{
    document.write("Total marks: " + tot + "<br>" + "Marks obtained: " + obt + "<br>" + "Percentage: " + perc + "%" + "<br>" + "Grade: A-one" + "<br>" + "Remarks: " + "Excellent"); 
}
else if(perc >= 70)
{
    document.write("Total marks: " + tot + "<br>" + "Marks obtained: " + obt + "<br>" + "Percentage: " + perc + "%" + "<br>" + "Grade: A" + "<br>" + "Remarks: " + "Good"); 
}
else if(perc >= 60)
{
    document.write("Total marks: " + tot + "<br>" + "Marks obtained: " + obt + "<br>" + "Percentage: " + perc + "%" + "<br>" + "Grade: B" + "<br>" + "Remarks: " + "You need to improve"); 
}
else{
    document.write("Total marks: " + tot + "<br>" + "Marks obtained: " + obt + "<br>" + "Percentage: " + perc + "%" + "<br>" + "Grade: Fail" + "<br>" + "Remarks: " + "Sorry"); 
}

document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")


//Question7

var num = Math.random() * 10;
num = Math.floor(num);

var num2 = +prompt("Guess the secret number:");
if(num2 === num)
{
    alert("Bingo! Correct answer");
}

else if(num2 + 1 === num)
{
    alert("Close enough to the correct answer");
}

//Question8

var num3 = +prompt("Enter the number to check if it is divisible by 3: ");
if(num3%3 === 0)
{
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}

//Question9

var num4 = +prompt("Enter number to check even or odd: ");
if(num4%2 === 0)
{
    alert("Number is even");
}
else{
    alert("Number is odd");
}

//Question10

var temp = +prompt("Enter temperature: ");

if(temp > 40)
{
    alert("It is too hot outside.");
}
else if(temp > 30)
{
    alert("The weather today is Normal.")
}
else if(temp > 20)
{
    alert("Today's Weather is cool.")
}
else if(temp > 10)
{
    alert("OMG! Today's weather is so Cool");
}

//Question11

var n1 = +prompt("Enter 1st number in calculator: ");
var n2 = +prompt("Enter 2nd number in calculator: ");
var opt = prompt("Enter the operator(+,-,*,/,%): ");

if(opt === "+")
{
    alert(n1+n2);
}
else if(opt === "-")
{
    alert(n1 - n2);
}
else if(opt === "*")
{
    alert(n1*n2);
}
else if(opt === "/")
{
    alert(n1/n2);
}
else if(opt === "%")
{
    alert(n1/n2*100 + "%");
}

//chapter 12-13
//Question1

var char = prompt("Enter number or letter: ");
if(char.charAt(0) >= 65 && char.charAt(0) <= 90)
{
    alert("Uppercase letter");
}
else if(char.charAt(0) >= 95 && char.charAt(0) <=122)
{
    alert("Lowercase letter");
}

//Question2
var n3 = +prompt("Enter 1st integer to check larger: ");
var n4 = +prompt("Enter 2nd integer to check larger: ");

if(n3 === n4)
{
    alert("Both numbers are equal");
}
else if(n3 > n4)
{
    alert("1st number " + n3 + " is larger");
}
else{
    alert("2nd number " + n4 + " is larger");
}

//Question3
var n5 = +prompt("Enter number to check positive or negative: ");
if(n5 > 0)
{
    alert("Number is positive");
}
else if(n5 < 0)
{
    alert("Number is negative");
}
else{
    alert("Number is zero");
}

//Question4
var char2 = prompt("Enter an alphabet; ");

if(char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")
{
    alert("true");
}
else{
    alert("false");
}

//Question5
var pw = "noor3";
var pw2 = prompt("Enter your password: ");

if(pw2 === pw)
{
    alert("Correct! The password you entered matches the original password");
}
else if(pw2 === "")
{
    alert("Please enter your password");
}
else{
    alert("Incorrect password");
}

//Question6
var greeting;
var hour = 13;

if(hour < 18)
{
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

//Question7

var t = +prompt("Enter time in 24 hours formate(1200): ")

if(t === 0000)
{
    alert("12am");
}
else if(t === 0100)
{
    alert("1am");
}
else if(t === 0200)
{
    alert("2am");
}
else if(t === 0300)
{
    alert("3am");
}
else if(t === 0400)
{
    alert("4am");
}
else if(t === 0500)
{
    alert("5am");
}
else if(t === 0600)
{
    alert("6am");
}
else if(t === 0700)
{
    alert("7am");
}
else if(t === 0800)
{
    alert("8am");
}
else if(t === 0900)
{
    alert("9am");
}
else if(t === 1000)
{
    alert("10am");
}
else if(t === 1100)
{
    alert("11am");
}
else if(t === 1200)
{
    alert("12pm");
}
else if(t === 1300)
{
    alert("1pm");
}
else if(t === 1400)
{
    alert("2pm");
}
else if(t === 1500)
{
    alert("3pm");
}
else if(t === 1600)
{
    alert("4pm");
}
else if(t === 1700)
{
    alert("5pm");
}
else if(t === 1800)
{
    alert("6pm");
}
else if(t === 1900)
{
    alert("7pm");
}
else if(t === 2000)
{
    alert("8pm");
}
else if(t === 2100)
{
    alert("9pm");
}
else if(t === 2200)
{
    alert("10pm");
}
else if(t === 2300)
{
    alert("11pm");
}
else{
    alert("Enter correct time");
}

if(t >= 0000 && t < 1200)
{
    alert("Good morning!");
}
else if(t >= 1200 && t < 1700)
{
    alert("Good afternoon!");
}
else if(t >= 1700 && t < 2100)
{
    alert("Good evening");
}
else if(t >= 2100 && t < 2359)
{
    alert("Good night");
}

//  CHAPTER 14 TO 16

// Question 1
var array = []
array = new Array();


// Question 2
var array = new Array();


// Question 3
var uni = ["NED", "KIET", "CBM"];


// Question 4
var uni = [1,2,3];



// Question 5
var boolArray = [true,false];




// Question 6
var mix = ["alex", 1, true];




// Question 7
var mix = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
for (var i=0; i<=mix.length-1;i++){
    document.write(mix[i]+"<br>")
}


// Question 8

var students = ["ali","ahsan","harry"];
var marks = [300,350,400];
for (var i=0; i<=students.length-1;i++)
{
    document.write("Score of "+students[i]+" is "+marks[i]+" Percentage is: "+marks[i]/500*100  +"% <br>");
}

// QUESTION 9 A
var colors=["red","blue","green","yellow"]
var x = prompt("Enter a colour in beginning: ")
document.write("Before"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 
colors.unshift(x);
document.write("after"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 




// Question 9 B
var colors=["red","blue","green","yellow"]
var x = prompt("Enter a colour in last: ")
document.write("Before"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 
colors.push(x);
document.write("after"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 



// // Question 9 C
var colors=["red","blue","green","yellow"]
var x = prompt("Enter a first colour in beginning: ")
var y = prompt("Enter a second colour in beginning: ")
document.write("Before"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 
colors.unshift(x);
colors.unshift(y);
document.write("after"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 



// Question 9 D
var colors=["red","blue","green","yellow"]
document.write("Before"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 
colors.shift()
document.write("after"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 


// Question 9 E
var colors=["red","blue","green","yellow"]
document.write("Before"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 
colors.pop()
document.write("after"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 



// Question 9 F
var colors=["red","blue","green","yellow"]
document.write("Before"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 
x=prompt("Enter index: ")
y= prompt("Enter color: ")
colors.splice(x,0,y);
document.write("after"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 


// Question 9 G
var colors=["red","blue","green","yellow"]
document.write("Before"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
} 
x=prompt("enter index  ")
y= prompt("Enter color: ")
colors.splice(x,x);
document.write("after"+"<br>");
for(var i =0; i<=colors.length-1;i++)
{
    document.write(colors[i]+"<br>");
}

// Question 10

var score=[230,435,453,234,231];
score.sort();
console.log(score);

// Question 11

var word =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var word2=word.slice(2,4);
console.log(word);
console.log(word2);

// Question 12

var arr=["This","is","my","cat"];
var arr1=arr.join(" ");
console.log(arr1);

// Question 13

var arr=[];
arr.push("Keyboard");
arr.push("Mouse");
arr.push("Printer");
arr.push("Monitor");
console.log("Out: ")
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// Question 14

var arr=[];
arr.push("Keyboard");
arr.push("Mouse");
arr.push("Printer");
arr.push("Monitor");
arr.reverse();
console.log("Out: ")
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// Question 15

var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
document.write(arr[0],);
document.write("\n");
document.write(arr[1]);
document.write("\n");
document.write(arr[2]);
document.write("\n");
document.write(arr[3]);
document.write("\n");
document.write(arr[4]);
document.write("\n");
document.write(arr[5]);

// CHAPTER 17 TO 20

// Question 1

var Arr=[[1,2],[3,4],[5,6]];

// Question 2

var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// Question 3

for (let index = 1; index < 11; index++) {
    console.log(index);
     }

// Question 4

var num=prompt("Enter Number");
var len=prompt("Enter Length");

for (let index = 1; index <= len; index++) {
    console.log(num," * ",index," = ",num*index);
}

// Question 5

var fruits=["apple","banana","mango","orange","strawberry"]
for (let index = 0; index < fruits.length; index++) {
    console.log("Element at Index ",index," is ",fruits[index]);
    
}

// Question 6

console.log("Counting : \n");
var Result="";
for (let index = 1; index < 16; index++) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);

Result="";
console.log("Reversed Counting : \n");
for (let index = 10; index > 0; index--) {
    Result=Result+index;   
    Result=Result+", "
}
console.log(Result);

Result="";
console.log("Even Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);

Result="";
console.log("Odd Counting : \n");
for (let index = 0; index <= 20; index++) {
    if (index%2!=0) {
    Result=Result+index;   
    Result=Result+", ";   
    }
}
console.log(Result);

Result="";
console.log("Series : \n");
for (let index = 2; index <= 20; index++) {
    if (index%2==0) {
    Result=Result+index;   
    Result=Result+"k, ";   
    }
}
console.log(Result);

// Question 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B=prompt("What u want in our Bakery"); 
var flag=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]==B) {
        console.log(B," is available at index ",index);
        flag=1;
        break
    } 
}
if (flag==0) {
    console.log(B," is not available at out store");
}

// Question 8

var A = [24, 53, 78, 91, 12];
var a=0;
for (let index = 0; index < A.length; index++) {
    if (A[index]>a) {
        a=A[index]
    }
    
}
console.log("The Largest Number is ",a);

// Question 9

var A = [24, 53, 78, 91, 12];
var a=1000;
for (let index = 0; index < A.length; index++) {
    if (A[index]<a) {
        a=A[index]
    }
    
}
console.log("The Smallest Number is ",a);

// Question 10

var Result="";
for (let index = 1; index <= 100; index++) {
    if (index%5==0) {
    Result=Result+index;   
    Result=Result+", "   
    }
}
console.log(Result);

// //chapter 21 - 25
// //Question1
var f = prompt("Enter first name: ");
var l = prompt("Enter last name: ");

alert("Hello " + f + " " + l);

//Question2
var model = prompt("Enter your favourite mobile model: ");
var len = model.length;
alert("My favourite phone is: " + model + "\n" + "Length of string: "+len);

//Question3
var pak = "Pakistani";
var index;
for(var i=0; i<pak.length; i++)
{
    if(pak[i] === 'n')
    {
        index = i;
        break;
    }
}

alert("String: " + pak + "\n" + "Index of 'n' : " + index);

//Question4
var s = "Hello World";
var index2;
for(var i=s.length-1; i>=0; i--)
{
    if(s[i] === 'l')
    {
        index2 = i;
        break;
    }
}

alert("String: " + s + "\n" + "Last index of 'l' : " + index2);

//Question5
var pak2 = "Pakistani";
var index3;
for(var i = 0; i<4; i++)
{
    index3 = pak2[i];
}
alert("String: " + pak2 + "\n" + "Character at index 3: " + index3);

//Question6
var f2 = prompt("Enter first name: ");
var l2 = prompt("Enter last name: ");
var name = f2 + " " + l2;

alert("Hello " + name);

//Question7
var s2 = "Hyderabad";
s2 = s2.replace("Hyder","Islam");
document.write(s2);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//Question8
var message = "Ali and Sami are best friends. They play cricket and football together."; 

message = message.replace(/and/g ,"&");

document.write("<br>" + "<br>" + "<br>" + "<br>" + message);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question9
var s3 = "472";
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Value: " + s3 + "<br>" + "Type: " + "string");
s3 = parseInt(s3);
document.write("<br>" + "Value: " + s3 + "<br>" + "Type: " + "number");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//Question10
var s4 = prompt("Enter string: ");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Value: " + "User input: " + s4 );
s4 = s4.toUpperCase();
document.write("<br>" + "Value: " + "Upper case: " + s4 );



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question11
var s5 = prompt("Enter string: ");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "User input: " + s5 );
var first = s5.slice(0,1);
first = first.toUpperCase();
s5 = first + s5.slice(1);
document.write("<br>" + "Title case: " + s5);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//Question12
var num = 35.36;
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Number: " + num );
num = num.toString();
num = num.slice(0,2) + num.slice(3);
document.write("<br>" + "Result: " + num );

//Question13
var s6 = prompt("Enter your name: ");
for(var i=0; i<s6.length; i++)
{
    if(s6.charCodeAt(i) === 33 || s6.charCodeAt(i) === 44 || s6.charCodeAt(i) === 46 || s6.charCodeAt(i) === 64)
    {
        alert("Please enter valid username");
    }
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var n = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
n = n.toLowerCase();
for(var i=0; i<A.length; i++)
{
    if(A[i] === n)
    {
        document.write("<br>" + "<br>" + "<br>" + "<br>" + n + " is " + "<b>" + "available " + "</b>" + "at index " + i + " in our bakery");
    }
}



//Question15
var password = prompt("Enter password: ");
password = password.toLowerCase();
var flag = -1;
var flag2 = -1;
var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arr2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

if(password.length < 6)
{
    document.write( "<br>" + "Password cannot be of less than 6 characters Please enter a valid password!");
}
else if(password.slice(0,1) === "0" || password.slice(0,1) === "1" || password.slice(0,1) === "2" || password.slice(0,1) === "3" || password.slice(0,1) === "4" || password.slice(0,1) === "5" || password.slice(0,1) === "6" || password.slice(0,1) === "7" || password.slice(0,1) === "8" || password.slice(0,1) === "9")
{
    document.write( "<br>" + "Password cannot begin with a number Please enter a valid password!");
}


for(var i=0; i<password.length; i++)
{
    for(var j=0; j<arr.length; j++)
    {
        if(password[i] === arr[j])
        {
            flag2 = 0;
        }
        else if(password[i] === arr2[j])
        {
            flag = 0;
            break;
        }
    }
}

if(flag2 === -1)
{
    document.write( "<br>" + "Password must contain alphabets Please enter a valid password");
}

if(flag === -1)
{
    document.write( "<br>" + "Password must contain a number Please enter a valid password");
    
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question16
var university = "University of Karachi";

document.write("<br>" + "<br>" + "<br>" + "<br>")
university = university.split("");
for(var i = 0; i<university.length; i++)
{
    document.write("<br>" + university[i]);
}




document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//Question17
var s1 =  prompt("Enter here: ");
var v = s1[s1.length-1];
document.write("<br>" + "<br>" + "<br>" + "<br>" + "User input: " + s1 + "<br>" + "Last character of input: " + v);



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//Question18  
var text = "The quick brown fox jumps over the lazy dog";
var a = 0;

document.write("<br>" + "<br>" + "<br>" + "<br>" + "Text: " + text);

text = text.toLowerCase();

for(var i=0; i<text.length; i++)
{
    if(text.slice(i, i+3) === "the")
    {
        a++;
    }
}

document.write( "<br>" + "There are " + a + " occurance(s) of 'the' ");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//chapter 26 - 30

//Question1 (a)
var b = +prompt("Enter a positive integer: ");
while(1)
{
    if(b < 1)
    {
        b = +prompt("Enter a positive integer: ");
    }
    else
    {
        break;
    }
}
document.write("<br>" + "<br>" + "<br>" + "<br>" + "number: " + b);

var c = Math.round(b);
document.write("<br>" + "round off value: " + c);

var d = Math.floor(b);
document.write("<br>" + "floor value: " + d);

var e = Math.ceil(b);
document.write("<br>" + "ceil value: " + e);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question2
var f = +prompt("Enter a negative floating point number: ");
while(1)
{
    if(f >= 0)
    {
        f = +prompt("Enter a negative floating point number: ");
    }
    else
    {
        break;
    }
}
document.write("<br>" + "<br>" + "<br>" + "<br>" + "number: " + f);

var g = Math.round(f);
document.write("<br>" + "round off value: " + g);

var h = Math.floor(f);
document.write("<br>" + "floor value: " + h);

var i = Math.ceil(f);
document.write("<br>" + "ceil value: " + i);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question3
var a2 = +prompt("Enter number to have absolute value: ");
if(a2 < 0)
{
    var a3 = a2*(-1);
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "The absolute value of " + a2 + " is " + a3);
}
else 
{
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "The absolute value of " + a2 + " is " + a2);
}


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question4
var a3 = Math.random();
a3 = (a3 * 6) + 1;
a3 = Math.floor(a3);
document.write("<br>" + "<br>" + "<br>" + "<br>" + "random dice value: " + a3);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//Question5
var a4 = Math.random();
a4 = (a4 * 2) + 1;
a4 = Math.floor(a4);
document.write("<br>" + "<br>" + "<br>" + "<br>" + a4 + "<br>" + "random coin value: ");

if(a4 === 2)
{
    document.write("Heads");
}
else if(a4 === 1)
{
    document.write("Tails");
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//Question6
var a5 = Math.random();
a5 = (a5 * 100) + 1;
a5 = Math.floor(a5);

document.write("<br>" + "<br>" + "<br>" + "<br>" + "random number between 1 and 100: " + a5);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question7
var a6 = prompt("Enter your weight in kilograms");
var a7 = parseFloat(a6);
//a7 = Math.random() * a7;
document.write("<br>" + "<br>" + "<br>" + "<br>" + "The weight of user is " + a7 + " kilograms");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//Question8
var a8 = Math.random();
a8 = (a8 * 10) + 1;
a8 = Math.floor(a8);
var a9 = +prompt("Enter a number: ");

if(a9 === a8)
{
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "Random Number: " + a8 + "<br>" + "You entered: " + a9);
    document.write("<br>" + "Congratulation!");
}
else{
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "Random Number: " + a8 + "<br>" + "You entered: " + a9);
    
}

// Question 1
document.write(new Date())


// Question 2
var date=new Date()
var month=["January","February","March","April","May","June","July","August","September","October","November","December"]
alert ("Current month = " + month[date.getMonth()]);

// Question 3
var a=new Date();
a=a.toString();
a=a.slice(0,3);
console.log("Today is "+a)

// Question 4
var a=new Date();
a=a.toString();
a=a.slice(0,3);
if (a=="Sun"||a=="Sat") {
alert("Today is "+a)   
}

// Question 5
var a=new Date();
a=a.getDate()
if (a<=15) {
    alert("First fifteen days of the month")
} else {
    alert("Last Days of the month")
}

// Question 6
var date=new Date()
console.log("Current Date: "+date.toString())
var Time=date.getTime();
console.log("Elapsed milliseconds since January 1,1970: "+Time)
Time=Time/(1000*60)
console.log("Elapsed minutes since January 1,1970: "+Time)

// Question 7
var date=new Date()
var Time=date.getHours();
if(Time<=12){
alert("Its AM")}
else{
alert("Its PM")}

// Question 8
var LaterDate=new Date("December 31,2020")
console.log("Later Date : "+LaterDate)

// Question 9
var Ramadan=new Date("June 18,2015")
Ramadan=Ramadan.getTime()
Ramadan=Ramadan/(1000*60*60*24)
Ramadan=Math.round(Ramadan)
console.log(Ramadan+" days have passed since 1st Ramadan,2015")

// Question 10
var refdate=new Date("June 18,2015")
var newdate=new Date("January 01,2015")
refdate=refdate.getTime()
refdate=refdate/(1000)
newdate=newdate.getTime()
newdate=newdate/(1000)
var diff=refdate-newdate
Diff=Math.round(diff)
console.log("On the Reference Date Jun 18 ,2015 "+diff+" seconds had passed since the beginning og 2015")

// Question 11
var date=new Date()
console.log("Current Date: "+date)
var hour=date.getHours();
date.setHours(hour+1)
console.log("1 Hour after, it was "+date)

// Question 12
var date=new Date()
console.log("Current Date: "+date)
var year=date.getFullYear();
date.setFullYear(year-100)
console.log("100 years back, it was "+date)

// Question 13
var date=new Date()
var age=+prompt("Enter Your Age")
console.log("Your Age is :"+age)
var year=date.getFullYear()
date.setFullYear(year-age)
year=date.getFullYear()
console.log("Your birth year is :"+year)

// Question 14
var Name=prompt("Enter Your Name")
var units=+prompt("Enter Number of units")
var charges=+prompt("Enter Charges per Unit")
var latecharges=350
latecharges=latecharges.toFixed(2)
var netamt=units*charges
netamt=netamt.toFixed(2)
netamt=Number(netamt)
latecharges=Number(latecharges)
var grsamt=netamt+latecharges
var mnt=new Date()
mnt=mnt.toString()
console.log("K-ELECTRI BILL")
console.log("    ")
console.log("Customer Name: "+Name)
console.log("Month: "+mnt.slice(4,7))
console.log("Number Of Units: "+units)
console.log("Charges Per Unit: "+charges)
console.log("     ")
console.log("Net Amount Payable (within Due Date): "+netamt)
console.log("Late Payment Surcharge: "+latecharges)
console.log("Gross Amount Payable (after Due Date: "+grsamt)

//chapter 35 - 38
//Question1

document.write("<br>" + "<br>" + "<br>");

var a100 = new Date();
document.write(a100);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//Question2

function x1(a10,b10){
   // a10 = prompt("Enter your first name: ");
    //b10 = prompt("Enter your last name: ");

    document.write("Hello "+a10+" "+b10);
}
x1("Noureen","Awan")


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question3
function xx(a11,b11){
    //var a11 = +prompt("Enter 1st number: ");
    //var b11 = +prompt("Enter 2nd number: ");
    document.write("sum is "+ ((+a11)+(+b11)));
}
    
xx(4,5)


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question4
function px(a12,b12,c12){
    if (b12==="+")
    { 
        document.write("sum is ",(a12+c12))
    }
    else if (b12==="-")
    {
        document.write("subtraction is ",a12-c12)
    }
    else if (b12==="*")
    {
        document.write("multiplication is ",a12*c12)
    }
    else if (b12==="/")
    {
        document.write("division is ",a12/c12)
    }
    else if (b12==="%")
    {
        document.write("remainder is ",a12%c12)
    }
    else
    {
        document.write("Invalid operator")
    }
}

px(+prompt("Enter num 1"),prompt("Enter operator"),+prompt("Enter num 2"))




document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question5

function nx(a13){
    document.write(a13*a13)
}
nx(3)


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//Question6


function ox(a14)
{
    if (a14==0 || a14==1)
    {
        return 1;
    }
    else
    {
        fact=1;
        for(var i=a14;i>=1;i--)
        {
            fact *= (i);
            //document.write("Factorial is " + fact);

        }

        document.write("Factorial is " + fact);
  
    }
    
}
       

ox(6)



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question7

function mx(a15,b15)
{
    for(var i =a15; i<=b15;i++)
    {
        document.write(i+" ");
    }

}
mx(1,55)


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question8
function oox(a,b){
    document.write("H is ",Math.sqrt((a*a) + (b*b)))
}
oox(5,5)


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question9
//i
function qx(a,b){
    document.write("Area is ",(a*b))
}
qx(5,6)

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//ii
function qx(a,b){
    document.write("Area is ",(a*b))
}
var nn=7, mm=9;
qx(nn,mm);



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question10
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        document.write(str, " is not a palindrome")
  
        return false;
                }
    }
    document.write(str," is a palindrome")
   }
   palindrome("CIVIC");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question11
function Xm(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }
 
 document.write(Xm("the quick brown fox"));



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//Question12

function xn(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(xn("Web Development Tutorial"));



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");




//Question13


function x(str, letter) 
{
 var letter_C = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_C += 1;
      }
  }
  return letter_C;
}

document.write(x('w3resource.com', 'o'));




document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");




//Question14

function Circumference(radius) {
    var circumference = (Math.PI * 2) * radius;
    var area = (Math.pow(radius, 2)) * Math.PI;
   document.write("The circumference of a circle with a radius of " + radius + " is " + circumference + " The area for this circle is " + area)
  }
   Circumference(37);
   


document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")

//chapter 39-42

// Question 1
function power(a,b) {

    if (b==0) {
        a=1;
    } else {
        // alert(a);
        var temp=a;
        b--;
        while (b>=1) {
            a*=temp;
            // alert(a);
            b--;
        }
    }
    alert(a);
}

// Question 2
function LeapYear(year) {
    alert((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0));    
} 

// Quesrion3
function calcarea(s,a,b,c) {
    var area=s*(s-a)*(s-b)*(s-c);
    alert("Area is "+area)
}
function calcS(a,b,c) {
    var S=(a+b+c)/2;
    calcarea(S,a,b,c);
}

// Question 4
function mainFunction(a,b,c) {
    alert("The Average is "+avrg(a,b,c));
    alert("The percentage is "+perc(a,b,c)+"% out of 300 marks");
}
function perc(a,b,c) {
    return (a+b+c)/300*100;
}
function avrg(a,b,c) {
    return (a+b+c)/3;
}

// Question 5
function indexOf(string,_char) {
    var n=0;
    var flag=false;
    while (n<=string.length) {
        if (_char==string[n]) {
            alert("Found at "+n)
            flag=true;
            break;
        }
        n++;
    }
    if (flag!=true) {
        alert("character not found")
    }
}

// Question6
function vowel(strings) {

    var string=strings.replace(/[aeiou]/g,'')
    alert("String without vowel : "+string);
 }

// Question 7
function find(string) {
    var find = 0, count = 0;
    string = string.toLowerCase();
    console.log("Vowels in successions are: \n",)
    for (let index = 0; index<string.length; index++) {
        if (isvowel(string[index])) {
            find++;
        } else {
            find = 0;
        }
        if (find == 2) {
            console.log(string[index - 1], string[index], '\n');
            find = 1;
        }

    }
}
function isvowel(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 1;

        default:
            return 0;
    }
}

// Question 8
function conversion(distance) {
    console.log("Distance in meter : "+tometer(distance));
    console.log("Distance in feet : "+tofeet(distance));
    console.log("Distance in inch : "+toinch(distance));
    console.log("Distance in centimeter : "+tocentimeter(distance));    
}
function tometer(distance) {
    return distance/1000;
}
function toinch(distance) {
    return distance/39370.0787;
}
function tofeet(distance) {
    return distance/3280.8399;
}
function tocentimeter(distance) {
    return distance/100000;
}

// Question 9
function overtime() {
    var hours = +prompt("Enter Hours Worked");
    hours -= 40;
    if (hours < 0) {
        alert("You didnt worked for overtime");
    } else {
        var pay = hours * 12;
        alert("The overtime pay will be " + pay);
    }
}

// Question 10
function withdraw() {
    var amount=+prompt("Enter withdraw amount");
    var hund=0,fifty=0,tens=0;
    hund=Math.floor(amount/100);
    fifty=Math.floor((amount%100)/50)
    tens=Math.floor(((amount%100)-fifty*50)/10)
    alert(`you will have ${hund} hundred notes ${fifty} fifty notes ${tens} ten notes`)
}