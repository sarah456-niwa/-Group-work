function reverseString() {
    let str = document.getElementById("inputString").value;
    let reversedStr = str.split('').reverse().join('');
    document.getElementById("answer").innerText = "Reversed String: " + reversedStr;
}