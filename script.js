const arr1 = [5, 56, 2, 3, 4, 1, 7, 9, -9, 12, 8];
const arr2 = [5, 56, 2, 3, 4, 1, 7, 9, -9, 12, 8, 15];
const arr3 = [5, 56, 2, 3, 4, 1, 7, 9, -9, 12, 8, 7, 15, 140, 22];

function arraySort(arr) {
  let totalIterations = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(`ІТЕРАЦІЯ I НОМЕР ${i}`);
    console.log(`зараз arr[i][${i}] = ${arr[i]}`);
    let n = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`ІТЕРАЦІЯ J НОМЕР ${j}`);
      console.log(`зараз arr[j][${j}] = ${arr[j]}`);
      console.log("порівнюємо елементи масиву");
      console.log(`${arr[i]} > ${arr[j]} ?`);
      if (arr[i] > arr[j]) {
        console.log(`так ${arr[i]} > ${arr[j]} `);
        console.log(`міняємо місцями ${arr[i]} і ${arr[j]} `);

        n = arr[i];
        arr[i] = arr[j];
        arr[j] = n;
        console.log(`зараз arr[i][${i}] = ${arr[i]}`);
        console.log(`зараз arr[j][${j}] = ${arr[j]}`);
        console.log(`зараз arr виглядає так `, arr);
      }
      totalIterations += 1;
    }
    totalIterations += 1;
  }
  console.log(`зараз arr виглядає так `, arr);
  console.log(`загальна кількість ітерацій `, totalIterations);
  console.log(`зараз довжина масиву `, arr.length);
  console.log("       ");
  console.log("END");
}

// arraySort(arr1);
arraySort(arr3);
