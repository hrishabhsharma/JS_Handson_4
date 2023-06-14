// let APIKey = `dfae3024842a0e8689be622a40aef677`

// let city = document.getElementById("city")
// let btn = document.getElementById("btn")

// btn.addEventListener(`click`,()=>{
//     let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIKey}`
//         console.log(city.value)
//         fetch(URL)
//         .then((item) => item.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err)) 
// })



// Output For Question No 1

Qno1 = document.getElementById("Q1")

Qno1.innerText += ` Firstly we have a function (counter) in which we declare a variable assign a value(0)
then a innerfunction declare name as (IncreaseCounter) in which we return a Previously declare (variable+=1)
then outer function returns innerfunction name. Now we call the function (counter) and stores in counter variable.
Now console the counter variable like function. \n
first time, we call innerfunction(it return from function(counter) and take the value of variable from closure
(outside the function) and increment with 1 and console the output "1".\n
On second time, we call same innerfunction. So value of variable has already taken from first call. Then return the value by increment the previouslly taken value. The Output is "2". \n
On third time, we call same function, So like above function calling, The ouput is "3".\n
And So on, The output is "4".`


// Output For Question No 2

Qno2 = document.getElementById("Q2")

Qno2.innerText += `Firstly declare a variable and asign the value (0).Now declare the function and call directly.\n
In function, we take the condition if previously declared variable is 0. Then create a new variable named same as previously declared variable and assign value (1). Now console this variable. Then close the condition.\n
now console same variable.\n
On first console, count variable exist in if condition, So The output is "1"\n
On Second console, count variable does not in function scope, So it will find in global scope. The output is "0"`

// Output For Question No 3

Qno3 = document.getElementById("Q3")

Qno3.innerText += `We know that var is function scoped variable, so it will store the value whenever the value change.\n
In this (for) loop, the value of i is (0) which is less then (3), so it will go in the loop and execute the settimeout function.\n
Now the value of i will become (1) with increment of 1, so it will again go in the loop and execute the settimeout function.\n
Now the value of i will become (2) with increment of 1, so it will again go in the loop and execute the settimeout function.\n
Now the value of i will become (3) with increment of 1, but it is not less than (3). so it will not go in the loop.\n
Now if we talking about settimeout function. This function will execute after 1000 miliseconds or 1 seconds. We already know that the execution time of (for) loop function is less than 1 miliseconds, So all three execution of settimeout function will execute after the execution of (for) loop. So in settimeout function, there is a console the value of (i). So at the end of (for) loop, the value of i is (3). So the function is print the (3) for three times.`

// Output For Question No 4

Qno4 = document.getElementById("Q4")

function area(l){
    function answer(b){
        return l*b;
    }
    return answer;
}

let first_parameter = area(5)
let total_ans = first_parameter(7)
console.log(total_ans)

Qno4.innerHTML += `<pre>function area(l){
    function answer(b){
        return l*b;
    }
    return answer;
}

let first_parameter = area(5)
let total_ans = first_parameter(7)
console.log(total_ans)</pre>` 

// Output For Question No 5

Qno5 = document.getElementById("Q5")

Qno5.innerText += `
    function outerfunction(){
        var counter=0;
        function innerfunction(){
            return counter += 1;
        }
        return innerfunction;
    }
    
    let result = outerfunction()
    
    console.log(result())`

// Output For Question No 6

Qno6 = document.getElementById("Q6")

var a= 12;
    (function () {
      console.log(a);
    })();

Qno6.innerText += ` ${a}\n
when we console a variable in function. It will search the variable in function scope, if it will not find.
Then it will go outside the function scope. If it will get the variable. it will console the value (if exist)`


// Output For Question No 7

Qno7 = document.getElementById("Q7")

Qno7.innerText += `Firstly we declare a var variable and asign the value(10). Now create a function (x).\n
Now we again declare the same var previously declared variable and asign the value(12).\n
Then we return a new function in which we console the same previously declared variable.\n
Now we call the function(x).\n
When we console the variable in return function. it will check if there is existence of variable in function scope.
And after the checking, it will go check to outside the function and check there.\n
Then it will find this variable and print the output(12)`

// Output For Question No 8

Qno8 = document.getElementById("Q8")

Qno8.innerText += `Firstly it declare the global variable. Then declare the outerfunction with parameter.\n
Then declare another variable in outerfunction. Then again declare the innerfunction with parameter.\n
Then again declare another variable in innerfunction.\n
After This, console the parameter which is passed in outerfunction. 
Then again console the paramter which is passed in innerfunction.
Then again console the varaible which is declared in outerfunction.
Then again console the variable which is declared in innerfunction.
Them again console the variable which is declared in global scope.\n
After this, just call the innerfunction with paramter(456) and call outerfunction with parameter(123)\n
The Output is following in below.
outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz`
