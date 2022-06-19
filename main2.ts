let list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];

for (let i = 0; i < list.length - 1; i++) {

    let min = list[i];
    let indexMin = i;
    for (let j = i + 1; j < list.length; j++) {
        if (min > list[j]) {
            min = list[j];
            indexMin = j;
        }
    }
    if (indexMin != i) {
        list[indexMin] = list[i];
        list[i] = min;
    }

}
console.log(list);
