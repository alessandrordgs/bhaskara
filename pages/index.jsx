import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  // const [a, setA] = useState();
  // const [b, setB] = useState();
  // const [c, setC] = useState();
  // // const [delta, setDelta] = useState();
  // const [x1, setX1] = useState();
  // const [x2, setX2] = useState();

  const [values, setValues] = useState({
    a:0,
    b:0,
    c:0,
    delta:0,
    x1:0, 
  })

  function handleForm(e) {
    e.preventDefault();
    const delta = b ** 2 - 4 * a * c;
    const raizDelta = Math.sqrt(delta);
    const x1 = (parseInt(-b) + raizDelta) / (2 * parseInt(a));
    const x2 = (parseInt(-b) - raizDelta) / (2 * parseInt(a));
    setValues({
      delta : 2
    })
    setX1(x1);
    setX2(x2);
  }

  console.log(values.delta)
  return (
    <div className={styles.container}>
      <h1>Calculadora de Bhaskara</h1>
      <main className={styles.main}>
        <div>
          <form onSubmit={handleForm} action="">
            <div>
              <p>Coloque o A</p>
              <input type="number" onChange={(e) => setValues({a:e.target.value})} />
            </div>
            <div>
              <p>Coloque o B</p>
              <input type="number" onChange={(e) => setB(e.target.value)} />
            </div>
            <div>
              <p>Coloque o C</p>
              <input type="number" onChange={(e) => setC(e.target.value)} />
            </div>
            <button type="submit">Calcular</button>
            {values.a}
          </form>

          <div>
            {/* <p>a : {a}</p>
            <p>b : {b}</p>
            <p>c : {c}</p> */}
          </div>
        </div>
        <div>


          {/* <p>Delta : {delta < 0 ? "o valor é negativo" : delta}</p>
          {delta < 0 ? (
            <p>Não é possivel continuar com a operação, informe novo valores</p>
          ) : (
            <>
              <p>x &prime; : {x1}</p>
              <p>x&prime;&prime; : {x2}</p>
            </>
          )} */}
        </div>
      </main>
    </div>
  );
}
