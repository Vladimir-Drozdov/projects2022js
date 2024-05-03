//POST / auth HTTP / 1.1
//Content-type:application
console.log(1);

console.log(2);
try {
    throw Error('My exception2');
} catch (err) {
   console.log('Error:', err.message, err.stack);
   console.log(4)
}
console.log(3);