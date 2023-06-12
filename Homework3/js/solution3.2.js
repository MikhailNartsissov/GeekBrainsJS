function reverseArray(){
    const array_length =  randomIntFromInterval(5, 10)
    let num_array = [];
    for (let i = 0; i < array_length; i++) {
        num_array[i] = Math.floor(Math.random( ) * (101));
    }
    alert(`Исходный массив: ${num_array}`);
    num_array.reverse();
    alert(`Массив, отсортированный в обратном порядке:\n ${num_array}`);
    num_array.sort((a, b) => b - a)
    alert(`Массив, отсортированный в порядке убывания значений:\n ${num_array}`);
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
