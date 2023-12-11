const marvel_heros= ["Thor", "spiderman", "ironman", "spiderman"]
const dc_heros= ["batman", "flassh", "wonderwoman", "superman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

///console.log(marvel_heros);
//console.log(marvel_heros[4][1]);

//const all_heros= marvel_heros.concat(dc_heros)
//console.log(all_heros);

//const all_heros2= [...marvel_heros, ...dc_heros]
//console.log(all_heros2);

const another_array= [1,2,3,4,5,6, [7,8,9], 10, [11,12,[13,14],15]]
const real_array= another_array.flat(Infinity)
//console.log(real_array);

//console.log(Array.isArray("Angik"))
//console.log(Array.from("Angik"));
//console.log(Array.from({name: "Angik"}));

const score1= 100
const score2= 200
const score3= 300

console.log(Array.of(score1, score2, score3));