var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var wrapper = document.querySelector(".wrapper");
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var count = add(+input1.value, +input2.value);
    var result = document.createElement("p");
    result.textContent = "Result: ".concat(count);
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(result);
    input1.value = "";
    input2.value = "";
});
