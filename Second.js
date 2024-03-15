// 1.გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი

let a = 87; b = 65
console.log(a + b);


/* 2.გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks
   3.დაბეჭდეთ student ის სახელი*/

let student = {
    firstName: "Kate",
    lastName: "Uka",
    age: 23,
    email: "Ketuka@gmail.com",
    marks: 97,

}
console.log(student.firstName);


// 4.გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.

let m = 45, n = 23;
if (m>n) {
    console.log(n+m);
} else {
    console.log(n)
};


/* 5.გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !”
( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! ) */

let studentName = "Tika"
console.log ("Rise and shine," , + studentName);


/* 6.გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა,
დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%.
დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus) */


let  salary=1500;
if (salary >=2000 )     
{ console.log(bonus=0)
} else if (salary <2000) {
    console.log(bonus = salary*0.1)
}else { 
    console.log (bonus = salary*0.3)
};


// 7.გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.

/*a და b ის რომ ვწერ შეცდომას მიჩვენებს, მანიშნებს პირველ ამოცანასთან a ის კავშირს 
და ვერ ვხვდები როგორ გამოვასწორო, ამიტომ a და bის მაგივრად t და d დავწერე*/

let t=23;
let d=t/2;
let c=(t+d);
console.log (c);



/* 8.გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
   9.Phones მასივს ბოლოში დაამატეთ ახალი ელემენტი Motorola და დაბეჭდეთ მასივი */

let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"]
console.log (phones);

phones.push("Motorola")
console.log(phones);


// 10.Დაბეჭდეთ რიცხვები 1 დან ( 1 შედის) 12-ის ჩათვლით.

let o=1
for (o=1; o<13; o++) {
console.log(o)
};