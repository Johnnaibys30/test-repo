const days=["sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday",];

console.log(days.length)
// log 4th element in the array
console.log(days[3]);
//remove the first element of the array .log new array and the element removed from the array 
days.shift();
console.log(days, "<==line 8")
//add sunday at the beginning of the new array and log the new array.
days.unshift('sunday')
console.log(days,"<==line11")
//remove the last element of the array .log the new array and log the element removed
days.pop('Saturday');
console.log(days,"<== line14")
days.push("friday" ,"saturday");
console.log(days[days.length])
days.push("saturday")
console.log(days[days.length-1])
//replace thursday with jr friday
days.splice(4, 1,"jr Friday");
console.log(days)
days.pop('Saturday')
console.log(days,)
days.pop('friday')
console.log(days,)
days.pop.('Friday')
console.log(days)