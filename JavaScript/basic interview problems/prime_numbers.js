const getPrime = (number) => {
    if (number <= 1) {
        return 'Not a prime number or composite number';
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return 'its not a prime number'
            }
        }
        return 'its a prime number'
    }
}

console.log(getPrime(6));