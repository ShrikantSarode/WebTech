let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let result = document.getElementById("result");

btn1.onclick = () => {
  // Get the value from the input field
  let input1 = document.getElementById("inp1").value;

  // Display a personalized greeting
  // result.innerHTML = input1 + " Good Person";
  result.innerHTML = `<span style="color: green;">${input1} is Good Person👌😊</span>`;
  alert(input1 + " is Good Person ");
};
btn2.onclick = () => {
  // Get the value from the input field
  let input1 = document.getElementById("inp1").value;

  // Display a personalized greeting
  result.innerHTML = `<span style="color: red;">${input1} is Bhavda</span>`;
  alert(input1 + "  ");
};
btn3.onclick = () => {
  // Get the value from the input field
  let input1 = document.getElementById("inp1").value;

  // Display a personalized greeting
  result.innerHTML = `<span style="color: red;">${input1} is Sonu🤪</span>`;
  alert(input1 + " ");
};
btn4.onclick = () => {
  // Get the value from the input field
  let input1 = document.getElementById("inp1").value;
  alert(input1 + "   ");
  // Display a personalized greeting
  result.innerHTML = input1 + " Mutkhada 😒 ";
};
btn5.onclick = () => {
  let input1 = document.getElementById("inp1").value;

  result.innerHTML = " ";
};
