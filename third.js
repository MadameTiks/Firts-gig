
/* 1.დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
a)თუ rიცხვები ტოლია : a და b ტოლია
b)თუ a მეტია b ze : a მეტია b_ზე
c)თუ a ნაკლებია  b ze : a ნაკლებია b_ზე  */

let a=23, b= 123;
if (a==b) {
    console.log("a და b ტოლია");
}
else if (a>b) {
    console.log("a მეტია b_ზე");
}
else if (a<b) {
    console.log("a ნაკლებია b_ზე");
}



/* 2.დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს),
დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , false , თუ არ არის მეტი 100 ზე   */

function calculatenums(num1, num2) {

    return num1 + num2 > 100;
}

console.log(calculatenums(55, 69));
console.log(calculatenums(33, 37));



/* 3.დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას ( ქულების ჯამს).
ფუნქციას აქვს სამი პარამეტრი a)პირველი პარამეტრი - 1 ქულიანების რაოდენობა b)მეორე პარამეტრი -  2 ქულიანების რაოდენობა c)მესამე - 3 ქულიანების რაოდენობა   */

function BasketballGamesum(points1, points2, points3) {

    return points1 + points2 + points3;
}
console.log(BasketballGamesum(7, 22, 123));


BasketballGamesum ()




/* 4.დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, უნდა შექმნათ  start დან end-ჩათვლით რიცხვების მასივი
(მაგალითად თუ start არის 3 და end არის 6  მასივის ელემენტები უნდა იყოს [3,4,5,6] ) ( arr.push()- მასივში ელემენტის დამატება)   */

function parameterArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

let start = 23, end = 78;

let arr = parameterArray(start, end);


console.log(arr); 




/*5.ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, 
დაწერეთ ფუნქცია რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს
a)თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
b)თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია 
*/

let    person = {
    firstname: "Lucas",
    lastname: "Sun",
    age: 23
} 

if (person.age < 18) {
    console.log(person.firstname + " არასრულწლოვანია");
} else if (person.age >= 18) {
    console.log(person.firstname + " სრულწლოვანია");
}




/* 6.გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი)
*/

let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];  

console.log(phones);

for ( ph of phones) {

    console.log(ph);
}




/* 7.Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), 
დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით ( გამოიყენეთ while ციკლი).
*/
let num = 37;

while (num <= 48) {

    console.log(num);

    num++;
}




/* 8.Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით , 
გამოიყენეთ სასურველი ციკლი ( for, while)
*/

let n = 2;

for (n; n<=13; n++) {
    while ( n<=13) {

        console.log(n)
 n+=2
          }
}

   
