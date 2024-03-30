console.log("hello2");

let number='125553456789';
let sum=0;
for(let i=0; i<number.length;i++){
    sum+=parseInt(number[i]);
}
console.log(sum);

let num=2;
for(let i=1; i<=10;i++){
   let ans = num*i;
   console.log(ans);
}

let rev=number.split("").reverse().join("");
let rev1=parseInt(rev);
console.log(rev);


let n1=10;
let n2=2;

let min=Math.min(n1,n2);
for(let i=1;i<=min;i++ ){
    if(n1%i===0 && n2%i===0){
        console.log(`the common deveible number is ${i}.`)
    }
}


// let n1=10;
// let n2=2;
// let min=Math.min(n1,n2);

// let max=Math.max(n1,n2);
// if(min>1){
//     for(let i=min;i<=max;i++){

//     if(i%1===0 && i%(i<i) !==0 && i%i===0){
//         console.log(i);
//     }
        
//         }
         
// }else{
//     console.log("plz enter min number >1.")
// }


let pNum=6;
let sum3=0;
for(let i=1; i<pNum;i++){
   if(pNum%i===0) {
    sum3+=i;

   }
    
}
if(sum3===pNum){
    console.log("prime number");
}else{
    console.log("!! prime number");
}

let nNum=12;
let sumNum=0;
for(let i=1;i<=nNum;i++){
    sumNum+=i;

}console.log(sumNum);

let arr=[1,2,2,2,2];
let sumNum1=0;
for(let i=0;i<arr.length;i++ ){
    sumNum1+=arr[i];
}console.log(sumNum1);  


let sum4=1;
for(let i=0;i<arr.length;i++){
    sum4*=arr[i];
}console.log(sum4);

let arr1=[9,8,7,6,5];
for(let i=0;i<arr1.length;i++){
    if(arr1.length[i-1]<arr1.length){
        console.log(arr1.length)
    }else{
        // console.log(arr1.length[i-1]);
    }

}

let arr3=[7,8,9,4,5,6];
let sum5=0;
for(let value of arr3){
    console.log(value);
    if(value%2===0){
        console.log(`even nnumber of arr3 ${value}`)
    }else{
        console.log(`odd nnumber of arr3 ${value}`)
        sum5    +=value;
        console.log(`sum of odd  ${sum5}`)
    }
}
for(let sum of arr3){
    sum5+=sum;
}console.log(sum5)
console.log(sum5/arr3.length);


let arr5=[8,5,2,7,4,1];
let eleFound=5;
let index=-1;
for(let i=0;i<arr5.length;i++ ){
    if(arr5[i]===eleFound){
index=i;
break;
    }
}
if(index !==-1){
    console.log(`Index of ${eleFound} in the array is ${index}`);
} else {
    console.log(`${eleFound} is not found in the array.`);
}


let sArr= ["apple", "banana", "orange", "kiwi", "strawberry"];

let maxL=0;

for(let fruits of sArr){
    if(fruits.length>maxL){
maxL=fruits.length;
    }
}console.log(maxL);



function reverseWords(sentence) {
    
let words=sentence.split(' ');


for(let i=0;i<words.length;i++){
    words[i]=words[i].split('').reverse().join('');

}

let reverse=words.join(' ');
return reverse;
}

let sentence = "Hello world, how are you?";
let reverse = reverseWords(sentence);
console.log(reverse);

function countVowels(str) {

    str = str.toLowerCase();
    let vowelCount = 0;
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        }
    }

    return vowelCount;
}

let str = "Hello world";
let numberOfVowels = countVowels(str);
console.log("Number of vowels:", numberOfVowels);


function removeVowels(str1) {
    // Define a variable to store the result
    let result = '';

    // Iterate through each character of the string
    for (let char of str1) {
        // Check if the character is a vowel
        if (!'aeiouAEIOU'.includes(char)) {
            // If not a vowel, append it to the result
            result += char;
        }
    }

    return result;
}

let str1 = "Hello world";
let stringWithoutVowels = removeVowels(str1);
console.log("String without vowels:", stringWithoutVowels);
