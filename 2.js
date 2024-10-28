function isPrimeNumber (num) {
    if (num > 1000) {
        return "Данные неверны";
    }
    if (num < 2) {
        return "Число не является простым";
    }
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
          return "Число не является простым";
        }
    }
    return "Число является простым";
}