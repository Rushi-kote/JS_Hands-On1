// Q1: You are provided with two numbers 
// A
//  and 
// B
// . Your task is to add these two numbers.

// Note: You have to complete AddTwoNumbers function. No need to take any input.
const AddTwoNumbers = (a,b) => {
    return(a+b);
};

// Q2: You are given two number first as A and second as B and check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input.

const Is_Valid = (a,b) => {
    if(a<10 && a>b){
      return 'true';
    }
    else{
      return 'false';
    }
  };
  
  
// Q3: You are given two numbers A and B. You need to do the following checks:

// if both are divisible by 10 console true.
// if both are not divisible by 10 console false.
// if one of them only is divisible by 10 console true.
// Use operator to do this.

// Note: You have to complete Check function. No need to take any input.  
const Check = (A, B) => 
{
    if(A%10==0 || B%10==0){
      return 'true';
    }
    else{
      return 'false';
    }
};

// Q4: You are provided a four digit number N only. Your task is to print out the first digit of that number.
// Note: You have to complete First_Digit function. No need to take any input.

const First_Digit = (n) => {
    let fd=n/1000;
    return (Math.floor(fd));
 };
 
 
// Q5: You are provided a four digit number N only. Your task is to print out the last digit of that number.
// Note: You have to complete Last_Digit function. No need to take any input 
const Last_Digit = (n) => {
    let ld=n%10;
    return ld;
 };
 
//  Q6: You are provided with two numbers  A and B where A  as  divisor and B  as  dividend.Your task is find the remainder.
//   Note: You have to complete Find_the_remainder function. No need to take any input.

const Find_the_remainder = (a,b) => {
    return(b%a);
};

// Q7: You are provided with two numbers A and B. Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function. No need to take any input.

const Multiply_two_number = (a,b) => {
    return(a*b);
};

// Q8: Shyam has got his marks in three subjects as A,B, and C (out of 100).Write a program to calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.



const Sum = (A, B, C) => 
{
  return(A+B+C);
};

const Average = (A, B, C) => 
{
  let av=(A+B+C)/3;
  return(av);
};
