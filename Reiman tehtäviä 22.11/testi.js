

let names = ["Matti", "Risto", "Åke", "Pera", "Make", "John"];
names = names.map( name => {
    if (name === "John") {
        return "Matti"
    }
    return name;
});
console.log(names);


//let rNames = names.filter( item => item[0] === "M" );
//console.log(rNames);



//let prices = [16, 42, 21, 13, 55, 60];

//let multiplied = prices.map( item => item * 2 );
//console.log(multiplied);

//let numbers = ["one", "two", "three", "four", "five"]

//numbers.forEach( item => console.log(item) );

//let ages = [17, 50, 14, 67];

//let adults = ages.filter( age => age >=18 );

//console.log(adults); 

//let oldFound = ages.some( age => age>60 );


//let numerot = ["juu", "justiinsa", "jaahas"];

//for (const n of numerot){
  //  console.log(n);
//}

//let muokattu = numerot.map( x => {
  //  if(x.includes("ja")){
      //  return "uusiteksti";
   // }
    //return x;
    //});

//console.log(muokattu);

// function edit(x){
    //return x*2;
//}

