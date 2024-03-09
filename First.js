console.log ("HomeWork1");

/* 1)	გამოაცხადეთ ორი ცვლადი a, b მიანიჭეთ მნიშვნელობები 23 და 4
   2)	დაბეჭდეთ (console.log) a და b რიცხვების ჯამი
   3)	დაბეჭდეთ a და b რიცხვების ნამრავლი 
   */
let a=23;
let b=4;
console.log (a+b); 
console.log (a*b);

// 4)	გამოაცხადეთ ახალი ცვლადი c რომელიც იქნება boolean, მიანიჭეთ true და დაბეჭდეთ
let c = true;
console.log (c);

/*5)	გამოახცადეთ ახალი ობიექტის(object) ტიპის ცვლადი  person თქვენი მონაცემებით ( first name, last name, age, address(რომელიც შეიცავს: city, country), phone no, email, friends (სახელების სია),  
6)	დაბეჭდეთ person ობიექტის სახელი და მეორე მეგობრის სახელი
*/ 
var person =  {

    "firstname": "Tika",
    "lastname": "Bulbulashvili",
    "age": 37,
    "address": [149, "Tehama St", "Brooklyn", "NY", 11218 ],
    "phone no": 9293404453,
    "email": "tikabulbulashvili@gmail.com",

    "friends" : [ "Fish", "Tasha", "oLi", "andManyMore<3" ]

};

let arr = [ "Fish", "Tasha", "oLi", "andManyMore<3" ];



console.log (person.firstname, arr [1]);