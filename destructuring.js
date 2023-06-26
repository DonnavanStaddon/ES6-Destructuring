//Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;//ES6 Automatically Destructures the three value in the array accordingly
console.log(john, mary, joe);


//Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

//Destructuring objects
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
//Since values in an object are represented by there property names
//one can desructor only the values needed by calling there property names
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

//Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;//Skip values by placing commas
console.log(maryNative, marySecondary);

//Using rest parameter syntax, only two are read normaly then the rest go into the rest parameter
let fruits = ["apple", "orange", "banana", "peach", "cherry", "mubz"];
let [favorite, secondFavorite, ...donnys] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(donnys);

//Object Destructuring with rest parameter
let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);