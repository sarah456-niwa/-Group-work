// No.2(a)
function squarenumbers(){
for (let i =1; i <= 10; i++) 
{
let squared = i * i;
console.log(i ,"squared is ",squared);
}

}
squarenumbers();// output: 1 upto 100
   
//No2(b)
 // passing  numbers as argument to square
function square(num){
  return num * num;
}
console.log(square(5));// output:25
 console.log(square(6));// output:36
 console.log(square(9));// output:81
   
//N02(c)
// returning the value of argument multiplied by itsself
function num(number){
  return number* number
}
console.log(square(2)); // output:4
   