const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const wrapper = document.querySelector(".wrapper");

function add(num1: number, num2: number) {
  return num1 + num2;
}

button?.addEventListener("click", function () {
    const count = add(+input1.value, +input2.value);

    const result = document.createElement("p");
    result.textContent = `Result: ${count}`;
    wrapper?.appendChild(result);
    input1.value = "";
    input2.value = "";

});