//BABAR MEHMOOD 
// 45 Questions Assignment



// Exercise no 1

let message = 'Hello World';
console.log(message);



// Exercise no 2

let personName: string = "ERIC";
console.log(`hello ${personName} ,would you like to learn some Python today?`);




// Exercise no 3

Lower case
let personName1: string = 'Babar';
console.log("lowercase:",personName.toLowerCase());

Upper case

console.log("uppercase:",personName.toUpperCase());

title case

console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));





// /Exercise no 4

let quote: string = "A person who never made a mistake never tried anything new.";

let author: string = "Albert Einstein";

console.log(`${author} Once said,"${quote}"`);







//Exercise no 5

let quote1: string = "A person who never made a mistake never tried anything new.";

let famous_Person: string = "Albert Einstein";

let message1=`${famous_Person} Once said,"${quote}"`
console.log(message);


 



//Exercise no 6


let PersonName: string =`\n\t BABAR MEHMOOD \t\n`;
console.log(PersonName);

let stripped: string= PersonName.trim();
console.log(stripped);







//Exercise no 7.8


console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);






//Exercise no 9

let favoriteNumber: number= 5;
console.log(`my favourite name is ${favoriteNumber}`);






//Exercise no 10
 
// My name is Babar
// Date: 21/2/2024
// this program will run simple code 
console.log('hello world simple program');






//Exercise no 11

let member: string[]=['Babar','Usama','Rameez','Sherry','Fawaz'];
for(let i=0; i<member.length; i++){
    console.log(member[i]);
}




//Exercise no 12

var member = ['Babar', 'Usama', 'Rameez', 'Sherry', 'Fawaz'];
var message= 'Never Give Up:';
for (var i = 0; i < member.length; i++) {
    console.log(message+member[i]);
}








//Exercise no 13

let transportation: string[]=['Civic','Bike','BR_v','Tuson','Elentra'];
for(let i=0; i<transportation.length; i++){
    console.log('“I would like to own a '+ transportation[i])
};




//Exercise no 14

let guest_list: string[]=['Babar','Rameez','Usama','Sherry','Fawaz'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
}; 



//Exercise no 15


let guest_list: string[]=['Babar','Rameez','Usama','Sherry','Fawaz'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
}; 

let not_present: string ='Sherry';
let new_guest: string ='Imran Khan';
guest_list[3]= new_guest
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
}

console.log(`Mr. ${not_present} will not comming on tomorrow Birthday Event.`)







//Exercise no 16

let guest_list: string[]=['Babar','Rameez','Usama','Sherry','Fawaz'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
// }; 

let not_present: string ='Sherry';
let new_guest: string ='Imran Khan';
guest_list[3]= new_guest
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
};

console.log(`Mr. ${not_present} will not comming on tomorrow Birthday Event.`);

guest_list.unshift('Minhaj','Arsalan','Salman');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.I found a bigger dinner table.\n\n THANK YOU')
};



//Exercise no 17



let guest_list: string[]=['Babar','Rameez','Usama','Sherry','Fawaz'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
// }; 

let not_present: string ='Sherry';
let new_guest: string ='Imran Khan';
guest_list[3]= new_guest
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
// };

console.log(`Mr. ${not_present} will not comming on tomorrow Birthday Event.`);

guest_list.unshift('Minhaj','Arsalan','Salman');
// for(let i=0; i<guest_list.length; i++){
//      console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.I found a bigger dinner table.\n\n THANK YOU')
// };

console.log('\n unfortunately we can not arrenge big table, onlt two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for Event.`); 
}

 for(let i=0; i<guest_list.length; i++){
      console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are stil invited on tomorrow Event.\n THANK YOU\n')
 };

guest_list.splice(0,2)
console.log(guest_list)



// Exercise no 18


let places: string[]=['Lahore','Karachi','Sawat','Islamabad','Hyderabad'];
console.log('Orignal: '+ places);


console.log('copy '+ [...places].sort());


console.log('Orignal: '+ places);


console.log('copy '+ [...places].sort().reverse());


console.log('copy '+ [...places].sort().reverse());


console.log('Orignal: '+ places.sort());


console.log('Orignal: '+ places.sort().reverse());


console.log('copy '+ [...places].sort());







// Exercise no 19 


import{ guest_list } from '../14. Guest list/app'
console.log(`n\ PRINTING NUMBER OF GUEST INVITED`)
console.log(`we had finally invited ${guest_list.length}`)    




// Exercise no 20 


let languages: string[]= ['English','Urdu','Hindi','Arabic','Chinesse']
console.log('List Of Languages:')
for(let top of languages){
    console.log(top)
}




// Exercise no 21



interface item {
    name:string
    price:number
}

const book:item={
    name:'ESSENTIAL TYPESCRIPT'
    price:450
}
const apple:item={
    name:'apple'
    price:200 
}

console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)




// Exercise no 22


let array:(string | number)[]=['Babar','Pakistan',5,6,2]
console.log(array[5])









// Exercise no 23

let car:string = 'subaru';

// Test 1: Equality Comparision (True)
console.log("Is car == 'subaru'? I predict True.");

console.log(car == 'subaru');//(True)

// Test 2:Strict Equality Comparision (True)

console.log("Is car === 'subaru'? I predict True.");

console.log(car === 'subaru');//(True)


// Test 3:Inequality Comparision (False)

console.log("Is car != 'subaru'? I predict True.");

console.log(car != 'subaru');//(False)


// Test 4:Strict Inequality Comparision (False)

console.log("Is car !== 'subaru'? I predict True.");

console.log(car !== 'subaru');//(False)

// Test 5:Less than Comparision (False)


console.log("Is car < 'subaru'? I predict True.");

console.log(car < 'subaru');//(False lexicographic Comparision)


// Test 6:Greater than Comparision (False)


console.log("Is car > 'subaru'? I predict True.");

console.log(car > 'subaru');//(False lexicographic Comparision)


// Test 7:Less than or Equal Comparision (True)


console.log("Is car <= 'subaru'? I predict True.");

console.log(car <= 'subaru');//(True)



// Test 8:Greater than or Equal Comparision (True)


console.log("Is car >= 'subaru'? I predict True.");

console.log(car >= 'subaru');//(True)

// Test 9:Check truthiness (True)


console.log("Is car 'subaru'? I predict True.");

console.log(car);//(True)(non-empty string is truthy)

// Test 9:Check falsiness (False)


console.log("Is !car 'subaru'? I predict False.");

console.log(!car);//(False)(Nagation of a truthy value)







// Exercise no 24



let car:string= 'subaru';
let age: number= 25;
let numbers: number[]=[1,2,3,4,5];



//starting Tests 
 
//Test 1: Equality (True)

console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'Subaru'); //True (Case sensative)


//Test 2:Strict  Equality (False)

console.log("Is car === 'Subaru'? I predict False.")
console.log(car === 'Subaru'); //False (Case sensative)



//Test 3: Inquality (True)

console.log("Is car != 'Toyota'? I predict True.")
console.log(car != 'Toyota'); //True 


//Test 4:Inequality (False)

console.log("Is car !== 'Toyota'? I predict False.")
console.log(car !== 'Toyota'); //False (Case sensative)


//lower case fuction tests

// test 5: lowercase conversion (TRUE)


console.log("Is car.lowercase() == 'Subaru'? I predict False.")
console.log(car.toLowerCase() == 'Subaru'); //True (Converted to lowercases)


// test 6: lowercase conversion (False)


console.log("Is car === car.tolowercase()? I predict False.")
console.log(car === car.toLowerCase()); //False (orignal value remais )



// Numerical tests

//Test 7: Equality (True)


console.log("Is age == 27? I predict True.")
console.log(age == 27); //True 



//Test 8:Inquality (False)


console.log("Is age != 27? I predict True.")
console.log(age != 27); //True 


//Test 9:Greater than (False)


console.log("Is age > 27? I predict False.")
console.log(age > 27); //False 


//Test 10:Less than or equal (True)


console.log("Is age <= 27? I predict False.")
console.log(age <= 27); //True 


// Logical Operator 

//Test 11: And (True)


console.log("Is age > 27 && age < 30? I predict True.")
console.log(age > 27 && age < 30); //True (Both Condition Met) 



//Test 12: OR (True)


console.log("Is age > 27 || age < 30? I predict False.")
console.log(age > 27 || age < 30); //False (Neither Condition Met) 


//Array Tests


//Test 13: In Array (True)


console.log("Is 3 in numbers? I predict True.")
console.log(3 in numbers); //True (check for index existence) 



//Test 14:Not In Array (False)


console.log("Is 3 not in numbers? I predict True.")
console.log(3 in numbers); //True (check for index existence) 









// Exercise no 25


//CREATE A VARIABLE CALLED ALIEN_COLOR

let alein_color: string= "green";

if(alein_color == "green"){
    console.log('the player just earned 5 points.');
}

alein_color="red";

if(alein_color == "green"){
    console.log('the player just earned 5 points.');
}










// Exercise no 26



//COLORS: REFUSED,GREEN,BLUE,YELLOW

let alein_color: string= "green";

if(alein_color == "green"){
    console.log('the player just earned 5 points for shooting the alien.');
}

else{
    console.log("the player just earned 10 points.")
}


alein_color="red";

if(alein_color == "green"){
    console.log('the player just earned 5 points for shooting the alien.');
}











// Exercise no 27



let alein_color: string= "green";

if(alein_color == "green"){
    console.log('the player just earned 5 points.');
}



else if(alein_color == "yellow"){
    console.log('the player just earned 10 points.');
}


else if(alein_color == "red"){
    console.log('the player just earned 15 points.');
}


else{
    console.log('please select right color')
}

// version 2

alein_color="red"


if(alein_color == "green"){
    console.log('the player just earned 5 points.');
}



else if(alein_color == "yellow"){
    console.log('the player just earned 10 points.');
}


else if(alein_color == "red"){
    console.log('the player just earned 15 points.');
}


else{
    console.log('please select right color')
}



// version 3

alein_color="yellow"


if(alein_color == "green"){
    console.log('the player just earned 5 points.');
}



else if(alein_color == "yellow"){
    console.log('the player just earned 10 points.');
}


else if(alein_color == "red"){
    console.log('the player just earned 15 points.');
}


else{
    console.log('please select right color')
}








// Exercise no 28


let age : number = 25;
if (age<2){
    console.log("the person is a baby.")
}

else if (age>= 2 && age<4){
    console.log("the person is a toddler.")
}

else if (age>= 4 && age<13){
    console.log("the person is a kid.")
}

else if (age>= 13 && age<20){
    console.log("the person is a teenager.")
}

else if (age>= 20 && age<65){
    console.log("the person is a adult.")
}

else{
    console.log("the person is a elder.")
}






// Exercise no 29


let favorite_fruits : string[]= ["Mango","Banana","Peach"];
if(favorite_fruits.includes("Mango")){
    console.log("I really like mango.")
}

if(favorite_fruits.includes("Banana")){
    console.log("I really like Banana.")
}
if(favorite_fruits.includes("Peach")){
    console.log("I really like Peach.")
}
if(favorite_fruits.includes("Watermelon")){
    console.log("I really like mango.")
}
if(favorite_fruits.includes("Grapes")){
    console.log("I really like Grapes.")
}






// Exercise no 30


let users: string[]= ["Bamsi","Turgut","Duan","Hafsa","Haleema","admin"];
for(let user of users){
    if (user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }

else{
    console.log(`Hello ${user}, Thank you for logging in again.`)
}
}







// Exercise no 31


let users: string[]= ["Bamsi","Turgut","Duan","Hafsa","Haleema","admin"];
if (users.length === 0){
    console.log("We need to find some users! ")
}
else {
    users = [];
console.log("All user have been removed"+ users.length)
}








// Exercise no 32


let current_users: string[] = ['Ali','hamza','saad','rawaha','muaz'];
let new_users: string[] = ['zeeshan','raza','noman','salman','kamran'];


new_users.forEach((newUser)=>{
    if(
        current_users.some(
            (currentUser)=> currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} wil need to enter a new username.`)
    }else{
        console.log(`${newUser} is available.`)
    }
}

)








// Exercise no 33

let myNumbers: number[] =[1,2,3,4,5,6,7,8,9];

for (let i=0; i < myNumbers.length; i++);{
    if(myNumbers[i]==1){
        console.log(`${myNumbers[i]}st`);

    }else if(myNumbers[i]== 2){
        console.log(`${myNumbers[i]}nd.`);

}else if(myNumbers[i]== 3){
    console.log(`${myNumbers[i]}rd.`);
}else if(myNumbers[i] >= 4 && myNumbers[i] <= 9){
    console.log(`${myNumbers[i]}th.`);

}
}









// Exercise no 34

let myPizza:string[]=['cheese pizza','pepperoni pizza','vegterian pizza'];

for(let i = 0; i< myPizza.length; i++){
    console.log(myPizza[i]);


    for(let i = 0; i< myPizza.length; i++){
        console.log(`i would like to eat ${myPizza[i]}`);
    
}
}

console.log(`\n i really like to eat Pizzas.Pizza come in a variety of flavors and toopings,allowing 
individuals to customize it to their liking`)







// Exercise no 35

let animals: string[]=['lion','leopards','zebra'];

animals.forEach(animals => {
    console.log(`A ${animals} would made a great pet.`)
});

console.log("Any of these animals would made a great pet.")








// Exercise no 36


function make_shirt(size: string, message:string){
    console.log(`making  ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt("medium","code is life");







// Exercise no 37


function make_shirt(size: string="large", message:string="i love TypeScript" ){
    console.log(`making  ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small","Dive into coding");







// Exercise no 38


function describe_city(nameOfCity: string, country:string="Pakistan"){
    return `${nameOfCity} is in ${country}`;
}; 

let city1 = describe_city("Karachi");
let city2 = describe_city("Lahore");
let city3 = describe_city("Islamabad");
let city4 = describe_city("Peshawar");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);







// Exercise no 39

function city_country(city: string, country:string){
    console.log(`"${city}, ${country}"`);
}; 

city_country("Karachi","Pakistan")

let myCities = city_country("Karachi","Pakistan");
console.log(myCities)

let city1 = city_country("Karachi","Pakistan");
let city2 = city_country("Delhi","India");
let city3 = city_country("London","United Kingdom");
let city4 = city_country("Riyaz","Saudia Arabia");









// Exercise no 40


function myAlbum(artistName:string, albumTitle:string){
    return{artistName,albumTitle}
}

let album1 = myAlbum("Ali","rang-e-mohabat");
let album2 = myAlbum("Rahat Fateh Ali Khan","Sajda");
let album3 = myAlbum("Arijit Singh","Zaalima");

console.log(album1);
console.log(album2);
console.log(album3);


function myAlbum2(artistName:string, albumTitle:string, numberOfTracks?:number){
    return{artistName,albumTitle,numberOfTracks}
}

let album4 = myAlbum2("Salman Khan","tu hi tu hur jaga", 30);
let album5 = myAlbum2("Babar","Typescript ki coding", 55);
let album6 = myAlbum2("Arijit Singh","Wo jo adhuri si yaad baki hai.", 56);

console.log(album4);
console.log(album5);
console.log(album6);








// Exercise no 41


function show_magicians(magicians:string): void {
    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
} 
const magician:string[]=["ali","babar","arsalan"];
show_magicians(magician);







// Exercise no 42


function make_great(magicians:string[]): void {
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + 'the great'
    }
}

const magicians2:string[]=['Babar','Arsalan','Salman'];
make_great(magicians2)
show_magician2(magicians2)









// Exercise no 43

function make_great2(magicians:string[]): string[] {
    const greatMagicians:string[]=[];
    for (let i = 0; i < magicians.length; i++){
        greatMagicians.push(magicians[i] + 'the great');
    }
    return greatMagicians;
}

const magicians3:string[]=['Babar','Arsalan','Salman'];
const magicians2:string[]=make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);








// Exercise no 44


function sandwich(...items: string[]): void {
    console.log("Sandwich order:")
    for (let i=0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}
console.log("enjoy your sandwich Babar. ");
sandwich('capsicum','tomato','chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken','mayo sauce')






// Exercise no 45


type car = {
    manufacture:string
    model:string
    [key:string]:any;
}

function createCar(manufacture:string, model:string, optional:Record<string, any>):car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const myCar: car = createCar("Toyota","Corolla",{color:"black",year:"2024"})
console.log(myCar)


