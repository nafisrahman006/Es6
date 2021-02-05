const friends = ['Sakib khan', 'Arman khan', 'Salamn Khan','Shahrukh khan'];
const [chotoFriend,nextFriend, ...olderF] = friends;
console.log(olderF);




const complexObject = {name: 'abc',info: {address: 'Kola Bagan',leader: 'Tiger Leader'}};
const {leader} = complexObject.info;
console.log(leader);











const person = {name: 'jack william', phone: '0100021', job:'facebook', gfName: 'Ema Watson'};

// const gfName =person.gfName;


// console.log(gfName)

const {phone, name, salary, job} = person;
console.log(name , phone, salary, job);