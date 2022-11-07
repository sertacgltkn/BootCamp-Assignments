# useMemo Nedir?

useMemo, bir React Hook'u ve React'in performansını arttırmak için kullanılan bir yöntemdir.

useMemo, bir fonksiyonun sonucunu belleğe alır ve bu fonksiyon tekrar çağrılırken bellekteki sonucu kullanır. Böylece, bir fonksiyonun tekrar çalıştırılmasını önler ve performansı arttırır.

## Örnek

```js
import React, { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App;
```

## Kaynak

- [Link-1](https://medium.com/frontend-development-with-js/react-bileşenlerinin-re-renderı-üzerine-analizler-3-usememo-6f52578e3fa0)

- [Link-2](https://tr.reactjs.org/docs/hooks-reference.html#usememo)
