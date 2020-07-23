//  CHAPTER 12 TO 13


// QUESTION 1
// var  x = prompt("Enter char: ");
// if(x>="A" && x<="Z")
// {document.write(x+" Character is UpperCase ")}
// else if (x>="a" && x<="z"){document.write(x+" Character is LowerCase ")}
// else if (x>="0" ){document.write(x+"  is a number ")}



// // QUESTION 2
// var  x = prompt("Enter first number: ");
// var y = prompt("Enter second number: ");
// if(x>y){document.write(x+" is greater")}
// else if( x==y){document.write("both are equal x = ",x," y = ",y)}
// else{document.write(y+" is greater")}



// QUESTION 3
// var  x = prompt("Enter char: ");
// if(x>"0")
// {document.write(x+" is a positive number")}
// else if (x<"0"){document.write(x+" is a Negative number ")}
// else if (x=="0" ){document.write(x+"  is zero ")}


// QUESTION 4
// var  x = prompt("Enter char: ");
// if(x=="a" || x=="A"  ||  x=="e" || x=="E"  ||  x=="I" || x=="i"  ||  x=="o" || x=="O"  ||  x=="u" || x=="U" ){document.write(x+" is a vowel ")}
// else{document.write(x+" is not a vowel")}



// QUESTION 5
// var pass = "saylani";
// var x = prompt("Enter Password: ");
// if(x===pass){document.write("Correct Password")}
// else if(x==""){document.write("Please enter password: ")}
// else{document.write("Incorrect")}



// QUESTION 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// {
// greeting = "Good evening";
// }


// // QUESTION 7
// var h = prompt('Enter Hour: ');
// if(h.slice(0,2)>12 && h.slice(0,2)<=24)
// {
// document.write((h.slice(0,2)-12)+":"+h.slice(2,4)+"am");
// }
// else if(h.slice(0,2)>=0 && h.slice(0,2)<=12){
//     document.write((h.slice(0,2))+":"+h.slice(2,4)+"pm");
// }


//  CHAPTER 14 TO 16


// Question 1
// var array = []
// array = new Array();


// Question 2
// var array = new Array();


// Question 3
// var uni = ["NED", "KIET", "CBM"];


// Question 4
// var uni = [1,2,3];



// Question 5
// var boolArray = [true,false];




// Question 6
// var mix = ["alex", 1, true];




// Question 7
// var mix = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
// for (var i=0; i<=mix.length-1;i++){
//     document.write(mix[i]+"<br>")
//}


// Question 8

// var students = ["ali","ahsan","harry"];
// var marks = [300,350,400];
// for (var i=0; i<=students.length-1;i++)
// {
//     document.write("Score of "+students[i]+" is "+marks[i]+" Percentage is: "+marks[i]/500*100  +"% <br>");
// }

// QUESTION 9 A
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a colour in beginning: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.unshift(x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 




// Question 9 B
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a colour in last: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.push(x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// // Question 9 C
// var colors=["red","blue","green","yellow"]
// var x = prompt("Enter a first colour in beginning: ")
// var y = prompt("Enter a second colour in beginning: ")
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.unshift(x);
// colors.unshift(y);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// Question 9 D
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.shift()
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 


// Question 9 E
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// colors.pop()
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 



// Question 9 F
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// x=prompt("Enter index: ")
// y= prompt("Enter color: ")
// colors.splice(x,0,y);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 


// Question 9 G
// var colors=["red","blue","green","yellow"]
// document.write("Before"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// } 
// x=prompt("enter index  ")
// y= prompt("Enter color: ")
// colors.splice(x,x);
// document.write("after"+"<br>");
// for(var i =0; i<=colors.length-1;i++)
// {
//     document.write(colors[i]+"<br>");
// }

// Question 10

// var score=[230,435,453,234,231];
// score.sort();
// console.log(score);

// Question 11

// var word =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var word2=word.slice(2,4);
// console.log(word);
// console.log(word2);

// Question 12

// var arr=["This","is","my","cat"];
// var arr1=arr.join(" ");
// console.log(arr1);

// Question 13

// var arr=[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");
// console.log("Out: ")
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// Question 14

// var arr=[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");
// arr.reverse();
// console.log("Out: ")
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// Question 15

// var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write(arr[0],);
// document.write("\n");
// document.write(arr[1]);
// document.write("\n");
// document.write(arr[2]);
// document.write("\n");
// document.write(arr[3]);
// document.write("\n");
// document.write(arr[4]);
// document.write("\n");
// document.write(arr[5]);

// CHAPTER 17 TO 20

// Question 1

// var Arr=[[1,2],[3,4],[5,6]];

// Question 2

// var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// Question 3

// for (let index = 1; index < 11; index++) {
//     console.log(index);
//      }

// Question 4

// var num=prompt("Enter Number");
// var len=prompt("Enter Length");

// for (let index = 1; index <= len; index++) {
//     console.log(num," * ",index," = ",num*index);
// }

// Question 5

// var fruits=["apple","banana","mango","orange","strawberry"]
// for (let index = 0; index < fruits.length; index++) {
//     console.log("Element at Index ",index," is ",fruits[index]);
    
// }

// Question 6

// console.log("Counting : \n");
// var Result="";
// for (let index = 1; index < 16; index++) {
//     Result=Result+index;   
//     Result=Result+", "
// }
// console.log(Result);

// Result="";
// console.log("Reversed Counting : \n");
// for (let index = 10; index > 0; index--) {
//     Result=Result+index;   
//     Result=Result+", "
// }
// console.log(Result);

// Result="";
// console.log("Even Counting : \n");
// for (let index = 0; index <= 20; index++) {
//     if (index%2==0) {
//     Result=Result+index;   
//     Result=Result+", ";   
//     }
// }
// console.log(Result);

// Result="";
// console.log("Odd Counting : \n");
// for (let index = 0; index <= 20; index++) {
//     if (index%2!=0) {
//     Result=Result+index;   
//     Result=Result+", ";   
//     }
// }
// console.log(Result);

// Result="";
// console.log("Series : \n");
// for (let index = 2; index <= 20; index++) {
//     if (index%2==0) {
//     Result=Result+index;   
//     Result=Result+"k, ";   
//     }
// }
// console.log(Result);

// Question 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var B=prompt("What u want in our Bakery"); 
// var flag=0;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]==B) {
//         console.log(B," is available at index ",index);
//         flag=1;
//         break
//     } 
// }
// if (flag==0) {
//     console.log(B," is not available at out store");
// }

// Question 8

// var A = [24, 53, 78, 91, 12];
// var a=0;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]>a) {
//         a=A[index]
//     }
    
// }
// console.log("The Largest Number is ",a);

// Question 9

// var A = [24, 53, 78, 91, 12];
// var a=1000;
// for (let index = 0; index < A.length; index++) {
//     if (A[index]<a) {
//         a=A[index]
//     }
    
// }
// console.log("The Smallest Number is ",a);

// Question 10

// var Result="";
// for (let index = 1; index <= 100; index++) {
//     if (index%5==0) {
//     Result=Result+index;   
//     Result=Result+", "   
//     }
// }
// console.log(Result);