let btn1 = document.getElementById("btn11");
let btn2 = document.getElementById("btn12");
let btn3 = document.getElementById("btn13");
let btn4 = document.getElementById("btn14");
let btn5 = document.getElementById("btn15");
let result = document.getElementById("result1");
let input = document.getElementById("inp2").value;

btn1.onclick = () => {
  let input = document.getElementById("inp2").value;
  result.innerHTML = `${input} is a Madest Person`;
};

btn2.onclick = () => {
  let input = document.getElementById("inp2").value;
  result.innerHTML = `${input} is a Good Person`;
};

btn3.onclick = () => {
  let input = document.getElementById("inp2").value;
  result.innerHTML = `${input} is a Bad Person`;
};

btn4.onclick = () => {
  let input = document.getElementById("inp2").value;
  result.innerHTML = `${input} is a Gold digger`;
};
btn5.onclick = () => {
  result.innerHTML = " ";
};
