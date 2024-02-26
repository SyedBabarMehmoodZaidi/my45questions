"use strict";
// Exercise no 1
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello World';
console.log(message);
// Exercise no 2
var personName = "ERIC";
console.log("hello ".concat(personName, " ,would you like to learn some Python today?"));
// Exercise no 3
// Lower case
var personName = 'Babar';
console.log("lowercase:", personName.toLowerCase());
// Upper case
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
//Exercise no 4
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " Once said,\"").concat(quote, "\""));
//Exercise no 5
var quote = "A person who never made a mistake never tried anything new.";
var famous_Person = "Albert Einstein";
var message = "".concat(famous_Person, " Once said,\"").concat(quote, "\"");
console.log(message);
//Exercise no 6
var PersonName = "\n\t BABAR MEHMOOD \t\n";
console.log(PersonName);
var stripped = PersonName.trim();
console.log(stripped);
//Exercise no 7.8
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//Exercise no 9
var favoriteNumber = 5;
console.log("my favourite name is ".concat(favoriteNumber));
//Exercise no 10
// My name is Babar
// Date: 21/2/2024
// this program will run simple code 
console.log('hello world simple program');
//Exercise no 11
var member = ['Babar', 'Usama', 'Rameez', 'Sherry', 'Fawaz'];
for (var i_1 = 0; i_1 < member.length; i_1++) {
    console.log(member[i_1]);
}
//Exercise no 12
var member = ['Babar', 'Usama', 'Rameez', 'Sherry', 'Fawaz'];
var message = 'Never Give Up:';
for (var i = 0; i < member.length; i++) {
    console.log(message + member[i]);
}
//Exercise no 13
var transportation = ['Civic', 'Bike', 'BR_v', 'Tuson', 'Elentra'];
for (var i_2 = 0; i_2 < transportation.length; i_2++) {
    console.log('“I would like to own a ' + transportation[i_2]);
}
;
//Exercise no 14
var guest_list = ['Babar', 'Rameez', 'Usama', 'Sherry', 'Fawaz'];
for (var i_3 = 0; i_3 < guest_list.length; i_3++) {
    console.log('Respected Sir/Madam' + guest_list[i_3] + ',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU');
}
;
//Exercise no 15
var guest_list = ['Babar', 'Rameez', 'Usama', 'Sherry', 'Fawaz'];
for (var i_4 = 0; i_4 < guest_list.length; i_4++) {
    console.log('Respected Sir/Madam' + guest_list[i_4] + ',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU');
}
;
var not_present = 'Sherry';
var new_guest = 'Imran Khan';
guest_list[3] = new_guest;
for (var i_5 = 0; i_5 < guest_list.length; i_5++) {
    console.log('Respected Sir/Madam' + guest_list[i_5] + ',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU');
}
console.log("Mr. ".concat(not_present, " will not comming on tomorrow Birthday Event."));
//Exercise no 16
var guest_list = ['Babar', 'Rameez', 'Usama', 'Sherry', 'Fawaz'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
// }; 
var not_present = 'Sherry';
var new_guest = 'Imran Khan';
guest_list[3] = new_guest;
for (var i_6 = 0; i_6 < guest_list.length; i_6++) {
    console.log('Respected Sir/Madam' + guest_list[i_6] + ',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU');
}
;
console.log("Mr. ".concat(not_present, " will not comming on tomorrow Birthday Event."));
guest_list.unshift('Minhaj', 'Arsalan', 'Salman');
for (var i_7 = 0; i_7 < guest_list.length; i_7++) {
    console.log('Respected Sir/Madam' + guest_list[i_7] + ',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.I found a bigger dinner table.\n\n THANK YOU');
}
;
//Exercise no 17
var guest_list = ['Babar', 'Rameez', 'Usama', 'Sherry', 'Fawaz'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
// }; 
var not_present = 'Sherry';
var new_guest = 'Imran Khan';
guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.\n\n THANK YOU')
// };
console.log("Mr. ".concat(not_present, " will not comming on tomorrow Birthday Event."));
guest_list.unshift('Minhaj', 'Arsalan', 'Salman');
// for(let i=0; i<guest_list.length; i++){
//      console.log('Respected Sir/Madam'+ guest_list[i]+',\n You are cordially invited to join us to celebrate the BIRTHDAY of my Brother.I found a bigger dinner table.\n\n THANK YOU')
// };
console.log('\n unfortunately we can not arrenge big table, onlt two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for Event."));
}
for (var i_8 = 0; i_8 < guest_list.length; i_8++) {
    console.log('Respected Sir/Madam' + guest_list[i_8] + ',\n You are stil invited on tomorrow Event.\n THANK YOU\n');
}
;
guest_list.splice(0, 2);
console.log(guest_list);
// Exercise no 18
var places = ['Lahore', 'Karachi', 'Sawat', 'Islamabad', 'Hyderabad'];
console.log('Orignal: ' + places);
console.log('copy ' + __spreadArray([], places, true).sort());
console.log('Orignal: ' + places);
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
console.log('Orignal: ' + places.sort());
console.log('Orignal: ' + places.sort().reverse());
console.log('copy ' + __spreadArray([], places, true).sort());
console.log("n PRINTING NUMBER OF GUEST INVITED");
console.log("we had finally invited ".concat(guest_list.length));
// Exercise no 20 
var languages = ['English', 'Urdu', 'Hindi', 'Arabic', 'Chinesse'];
console.log('List Of Languages:');
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var top_1 = languages_1[_i];
    console.log(top_1);
}
var book = {
    name: 'ESSENTIAL TYPESCRIPT',
    price: 450
};
var apple = {
    name: 'apple',
    price: 200
};
console.log("book name: ".concat(book.name, ", price: $").concat(book.price));
console.log("apple name: ".concat(apple.name, ", price: $").concat(apple.price));
// Exercise no 22
var array = ['Babar', 'Pakistan', 5, 6, 2];
console.log(array[5]);
// Exercise no 23
