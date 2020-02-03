const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const createCountryArtist = (name, age) => {
    return {
        name: name,
        age: age, 
      
    };
}

const createPopArtist = (name, age) => {
    return{
        name: name,
        age: age,
      
    };
}

const createFunkArtist = (name, age) => {
    return{
        name: name,
        age: age,
      
    };
}

const createRapArtist = (name, age) => {
    return{
        name: name,
        age: age,
        
    };
}

const createBluegrassArtist = (name, age) => {
    return{
        name: name,
        age: age,
    };
}

const bruce = createCountryArtist("Bruce Atikins", 23);
chattenRecords.push(bruce);

const jensen = createPopArtist("Jensen Brown", 20)
polarRecords.push(jensen);

const dre = createFunkArtist("Dre Funkz", 25);
jumpStopRecords.push(dre);

const dusta = createRapArtist("Dusta Grimes", 21);
jumpStopRecords.push(dusta);

const bartholomew = createBluegrassArtist("Bartholomew Danielson", 23);
chattenRecords.push(bartholomew);

const avilee = createCountryArtist("Avilee Dallas", 19);
chattenRecords.push(avilee);

const austin = createPopArtist("Austin Kinkaid", 22);
polarRecords.push(austin);

const loyonce = createRapArtist("Loyonce Branis", 27);
jumpStopRecords.push(loyonce);

console.log(jumpStopRecords);
console.log(chattenRecords);
console.log(polarRecords);
