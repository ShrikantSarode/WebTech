let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let result = document.getElementById("result");

btn1.onclick = () => {
  // Get the value from the input field
  let input1 = document.getElementById("inp1").value;

  // Display a personalized greeting
  result.innerHTML = input1 + " Good Person";
  
};
btn2.onclick = () => {
  // Get the value from the input field
  let input1 = document.getElementById("inp1").value;

  // Display a personalized greeting
  result.innerHTML = input1 + " Badva";
};
btn3.onclick = () => {
  // Get the value from the input field
  let input1 = document.getElementById("inp1").value;

  // Display a personalized greeting
  result.innerHTML = input1 + " Madarniya";
};
btn4.onclick = () => {
  // Get the value from the input field
  let input1 = document.getElementById("inp1").value;

  // Display a personalized greeting
  result.innerHTML = input1 + " G for Gandu ";
};