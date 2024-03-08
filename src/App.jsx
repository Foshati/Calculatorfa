import { useState } from "react";
import "./App.css";
import { LuArrowBigLeft } from "react-icons/lu";
import { AiOutlineClear } from "react-icons/ai";

function App() {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([""]);
  const [ans] = useState("");

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleClear = () => {
    setDisplay("");
    setExpression([""]);
  };

  const handleDelete = () => {
    const updatedExpression = expression.slice(0, -1);
    setDisplay("");
    setExpression(updatedExpression);
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseFloat(value) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return acc + array[index + 1];
          case "-":
            return acc - array[index + 1];
          case "x":
            return acc * array[index + 1];
          case "÷":
            return acc / array[index + 1];
          case "%":
            return acc % array[index + 1];
          case "^":
            return acc ** array[index + 1];
          default:
            return acc;
        }
      });

    const newExpression = [ans, result];
    setDisplay(result);
    setExpression(newExpression);
  };

  const calculateSquareRoot = () => {
    const result = Math.sqrt(parseFloat(expression.join("")));
    setDisplay(result);
    setExpression([result]);
  };

  return (
    <div className="App">
      <div className="displayCss">
        <h2 className="display">{display}</h2>
        <div className="expression">{expression}</div>
      </div>
      <section className="panel">
        <div className="numbers">
          <button onClick={() => handleDelete()}>
            <LuArrowBigLeft />
          </button>
          <button onClick={() => handleClear()}>
            <AiOutlineClear />
          </button>
          <button onClick={() => handleClick("%")}>%</button>

          <button className="cBtn" onClick={() => handleClick(1)}>
            1
          </button>
          <button className="cBtn" onClick={() => handleClick(2)}>
            2
          </button>
          <button className="cBtn" onClick={() => handleClick(3)}>
            3
          </button>
          <button className="cBtn" onClick={() => handleClick(4)}>
            4
          </button>
          <button className="cBtn" onClick={() => handleClick(5)}>
            5
          </button>
          <button className="cBtn" onClick={() => handleClick(6)}>
            6
          </button>
          <button className="cBtn" onClick={() => handleClick(7)}>
            7
          </button>
          <button className="cBtn" onClick={() => handleClick(8)}>
            8
          </button>
          <button className="cBtn" onClick={() => handleClick(9)}>
            9
          </button>
          <button onClick={() => calculateSquareRoot()}>√</button>
          <button className="cBtn" onClick={() => handleClick(0)}>
            0
          </button>
          <button onClick={() => handleClick("^")}>^</button>
        </div>

        <div className="operators">
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("x")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
        </div>
      </section>
    </div>
  );
}

export default App;
