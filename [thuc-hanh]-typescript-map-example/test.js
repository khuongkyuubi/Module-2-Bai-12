let employeeMap = new Map();
employeeMap.set("Saideep", 20);
employeeMap.set("Karthik", 25);
employeeMap.set("Sumit", 21);
employeeMap.set("Sameer", 22);
employeeMap.set("Raje", 24);
//Iterating over map keys
for (var _i = 0, _a = employeeMap.keys(); _i < _a.length; _i++) {
    var name_1 = _a[_i];
    console.log("Employee Names= " + name_1);
}
//Iterating over map values
for (var _b = 0, _c = employeeMap.values(); _b < _c.length; _b++) {
    var age = _c[_b];
    console.log("Employee Age= " + age);
}
console.log("The employeeMap Entries are: ");
//Iterating over map entries
for (var _d = 0, _e = employeeMap.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], entry[1]);
}
