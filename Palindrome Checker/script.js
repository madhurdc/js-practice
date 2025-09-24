const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")

checkBtn.addEventListener("click", function(){
    if(textInput.value === '')
    {
        alert("Please input a value")
        return
    }
    let string = textInput.value
    if(checkPalindrome(string))
    {
        result.innerText = `${string} is a palindrome`
    }
    else
        result.innerText = `${string} is not a palindrome`
})

function checkPalindrome(string) 
{
    // remove all non-alphanumeric characters and convert to lowercase
    let str2 = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // check palindrome
    return str2 === str2.split("").reverse().join("");
}


/*
    string = "A Man can Panama CAnal"
    if(string.toLowerCase() === string.toLowerCase().split("").reverse().join(""))
        console.log("Palindrome")
    else
        console.log("Not Palindrome")
*/
