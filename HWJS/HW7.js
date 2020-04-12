// Создать функцию которая принимает числа N,M. Возвращает матрицу А(N,M) заполненную случайными числами от -100 до 100.

function createMatrix(n, m) {
    let arr = new Array();
    for (let i = 0; i < n; i++) {
      arr[i] = new Array();
      for (let j = 0; j < m; j++) {
        arr[i][j] = Math.round(Math.random() * 200) - 100;
      }
    }
    return arr;
  }
  
  console.log(createMatrix(5, 5));

  // Сгенерировать матрицу А(N,M). Составить программу нахождения максимального элемента матрицы и выделения его местоположения.

  // Сгенерировать матрицу А(N,M). Составить программу замены всех отрицательных элементов матрицы на элемент, имеющий максимальное эначение.
  
  // Написать функцию которая принимает функцию и два числа. Возвращает результат выполнения переданной функции для этих чисел.
  
  console.log(createMatrix);
  const array = createMatrix (5,5);
  const max = getMaxOfArray(array);

  function getMaxOfArray(matrix) {
    return Math.max.apply(null, ...matrix);
  }
  console.log(max);

