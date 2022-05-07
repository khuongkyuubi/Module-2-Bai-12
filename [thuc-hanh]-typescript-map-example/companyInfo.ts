//@ts-ignore
let map = new Map();
map.set('22', 'Infosystems');
map.set(32, 'TCS');
map.set(false,'Google');
map.set('45','Facebook');
map.set('65','Amazon');
console.log("Employer at index 22: " +map.get('22'));
console.log("Employer at index 32: " +map.get(32));
console.log("Size of the map: " +map.size);
console.log("Deleting a value: " +map.delete('65'));
console.log( "New Size of the map: " +map.size);