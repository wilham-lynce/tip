// var add = function (x, y) { return x + y };
// console.log(add(2, 3));

// factorial
// var fac = function me(n) {
//     if (n > 0) {
//         return n * me(n-1);
//     } else {
//         return 1;
//     }
// };
// console.log(fac(3));

// binary
// var countBits = function(n) {
//        const x = (n >>> 0).toString(2).split('');

//        const result = x.reduce((sum, num) => sum + Number(num), 0);

//         return result;
// };

// var Bits = function(n) {
//     // make an array with the bit result
//     const base = (n).toString(2).split('');
    
//     // make a sum with the array and make the index a Number
//     const result = base.reduce((sum, num) => sum + Number(num), 0);
    
//     return result;
//  };

                                                        
// var i =function(num){
//     var number = num
//     var result = []
//     while(number >= 1 ){
//         result.unshift(Math.floor(number%2))
//         number = number/2
//     }
//     return result   
// }

// bitcount
// var countBits = function(n) {
//     var count = 0;
//     while(n > 0){
//       if(n%2 === 1) {
//         count++;
//       }
//       n = Math.floor(n/2);
//     }
//     return count;
//   };

// array containing hashes of names
// var hash = function list(names) {
//     let str ='';
//     if (names.length !== 0) {
//         let last= names.pop();
//         str=names.map((val,i, arr)=>{
//             if (i !== arr[arr.length -1]) {
//                 return val.name
//             }
//         }).join(',')
//         str += str !== ''?'&'+last.name:last.name;
//     }
//     return str;
// }

//write a fxn to retrieve a blob of json

// const { json } = require("body-parser");

//make an ajax request, use the 'fetch' fxn

//https://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(json=> console.log(json));
// }

// fetchAlbums();

// async function fetchAlbums() {
//     const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     const json =  await res.json()
//     console.log(json);
// }

// fetchAlbums();

const companies =[
    {name:"Company One", category:"Finance", start: 1991, end:2003},
    {name:"Company Two", category:"Retail", start: 1992, end:2008},
    {name:"Company Three", category:"Auto", start: 1999, end:2007},
    {name:"Company Four", category:"Retail", start: 1989, end:2010}
];

const ages =[33, 12, 32,24,43,56,53,53,23,43,23,43,32,32,31,32];

// for(let i = 0; i<companies.length; i++){
//     console.log(companies[i])
// }   




// foreach
// companies.forEach(function(company){
//     console.log(company);
// })

// filter
// let canDrink =[];
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// filter
// const canDrink = ages.filter(function(age){
//     if (age >= 21) {
//         return true
//     }
// })

// es6 arrow functions of the above code
// const canDrink2 = ages.filter(age => age >= 21);

//filter retail companies
// longer
// const retailComapanies1 = companies.filter(function(company){
//     if (company.category==='Retail') {
//         return true
//     }
// })
// shorter
// const retailComapanies = companies.filter(company => company.category==='Retail');

// get 80s companies

// const eightiesCompanies = companies.filter(company =>(company.start >= 1980 && company.start<1990));


// companies that lasted more than 10 years
// const decadePlusCompanies = companies.filter(company => (company.end-company.start) >= 10 );

// endforeach



// map

// create array of company names
// const companyNames =companies.map(function(company){
//     return company.name;
// })
// or 
// const companyNames =companies.map(company => company.name)


// const testMap = companies.map(company=> $(company.name));



// codewars phonenumber
// function createPhoneNumber(numbers){
//     var form ="(xxx) xxx-xxxx";

//     for (var i = 0; i < numbers.length; i++) {
//             form =form.replace('x', numbers[i]);    
        
//     }
//     return form;
// }


// function createPhoneNumber(numbers){
//     return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
//   }