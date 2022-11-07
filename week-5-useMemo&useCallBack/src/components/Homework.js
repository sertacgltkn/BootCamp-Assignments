import React, { useState, useCallback } from "react"; // React ve React'ın içerisinden alacağımız hook'ları import ediyoruz.

const FuncFirst = () => { // ilk componentimizi oluşturuyoruz.
  const [count, setCount] = useState(0); // useState yardımıyla counter oluşturaacağız.
  const increment = useCallback(() => { //  increment değişkenine useCallback yardımıyla bir fonksiyon atıyoruz.  
    setCount(count + 1);
  }, [count]);
  console.log("First component rendered"); // console'a render olduğunu yazdırıyoruz.
  return (
    <div>
      <h1>First component</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button> {/* Butona her tıklandığında artan onClick eventi */}
    </div>
  );
};

const MemoFuncFirst = React.memo(FuncFirst); // 

const FuncSecond = () => { // ikinci componentimizi oluşturuyoruz.
  const [count, setCount] = useState(0); // Aynı işlemler....
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  console.log("Second component rendered");
  return (
    <div>
      <h1>Second component</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const MemoFuncSecond = React.memo(FuncSecond); // ...

const App = () => {
  return (
    <div>
      <MemoFuncFirst /> {/* Değişkenlere atadığımız fonksiyonlarıda App fonk. altında birleştiriyoruz ki export edelim. */}
      <MemoFuncSecond />
    </div>
  );
};

export default App;
