import React, { useState } from "react";
import styled from "styled-components";

const GridCalculadora = styled.div`
  width: 300px;
  margin: 10% auto;

  display: grid;
  grid-auto-rows: 50px 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const DisplayResult = styled.div`
  display: flex;
  flex-direction: row;
  
  grid-column: 1 / 5;
 
`;

const DivButton = styled.div`
  background-color: #191919;
  height: 50px;
  border: 1px ridge #231a24;
  
  text-align: center;
  vertical-align: middle;
  &:hover {
    opacity: 0.9;
  }
`;

const DivClearBtn = styled.div`
  width: 30%;
  background-color: #001a57;
  
  height: 50px;
  border: 1px solid;
  &:hover {
    opacity: 0.9;
  }
`;

const TextResult = styled.input`
  width: 80%;
  /* font-size: 1.5rem; */
  color: #fffacd;
  background-color: #18171c;
  text-align: center;
`;

const TextCal = styled.h3`
text-align: center;
margin: 10% auto;
color: white;
`;
const Bonus = styled.h3`
text-align: center;
color: #e51a4c;
grid-column: 1 / 5;
`;
const Calculadora = () => {
  const [calculo, setCalculo] = useState(0);
  const [dot, setdot] = useState(false);
  const [init, setInit] = useState(true);
  const [zero, setZero] = useState(false);
  const [acum, setAcum] = useState("");
  const [ope, setope] = useState(true);
  const [neg, setneg] = useState(1);

  const handleOpe = (num) => {
    if (init) {
      setCalculo("");
      setInit(false);
    }
    switch (num) {
      case "+":
        setneg(1);
        if (ope) {
          setAcum(num);
          setope(false);
          setdot(false);
        }
        // setCalculo((calculo) => calculo + `${num}`);
        break;
      case "-":
        if (neg < 2) {
          setope(true);
          if (ope) {
            setAcum(acum + num);
            // setope(false);
            setdot(false);
            setneg(neg + 1);
          } else {
            setAcum(acum + num);
            setope(true);
            setneg(neg + 1);
          }
        }
        // setCalculo((calculo) => calculo + `${num}`);
        break;
      case "*":
        setneg(1);
        if (ope) {
          setAcum(num);
          setope(false);
          setdot(false);
        }
        // setCalculo((calculo) => calculo + `${num}`);
        break;
      case "/":
        setneg(1);
        if (ope) {
          setAcum(num);
          setope(false);
          setdot(false);
        }
        // setCalculo((calculo) => calculo + `${num}`);
        break;

      case "=":
        setAcum("");
        setCalculo(() => {
          const total = eval(calculo);
          return total;
        });
        setneg(1);
        setdot(false);
        break;

      default:
        break;
    }
  };

  const handleCalc = (num) => {
    setope(true);
    switch (num) {
      case ".":
        if (!dot) {
          setCalculo((calculo) => calculo + `${acum}` + `${num}`);
          setdot(true);
          setZero(false);
          setAcum("");
        }
        break;

      case "ac":
        setAcum("");
        setCalculo(0);
        setdot(false);
        setInit(true);

        break;

      case 0:
        if (init) {
          setCalculo("");
          setCalculo((calculo) => calculo + `${acum}` + `${num}`);
          setInit(false);
          setZero(true);
        } else if (!zero) {
          setCalculo((calculo) => calculo + `${acum}` + `${num}`);
        }
        break;

      default:
        if (init) {
          setCalculo("");
          setInit(false);
        }
        setCalculo((calculo) => calculo + `${acum}` + `${num}`);
        setAcum("");

        break;
    }
  };

  return (<>
    
    <GridCalculadora>
    <Bonus>Calculator by JFGG</Bonus>
      <DisplayResult>
        <TextResult
          id="display"
          type="text"
          value={calculo + acum}
          disabled
        ></TextResult>
        <DivClearBtn id="clear" onClick={() => handleCalc("ac")}>
          <TextCal> AC</TextCal>
        </DivClearBtn>
      </DisplayResult>
      <DivButton id="seven" onClick={() => handleCalc(7)}>
        <TextCal>7</TextCal>
      </DivButton>
      <DivButton id="eight" onClick={() => handleCalc(8)}>
        <TextCal>8</TextCal>
      </DivButton>
      <DivButton id="nine" onClick={() => handleCalc(9)}>
        <TextCal>9</TextCal>
      </DivButton>
      <DivButton id="divide" onClick={() => handleOpe("/")}>
        <TextCal>/</TextCal>
      </DivButton>
      <DivButton id="four" onClick={() => handleCalc(4)}>
        <TextCal>4</TextCal>
      </DivButton>
      <DivButton id="five" onClick={() => handleCalc(5)}>
        <TextCal>5</TextCal>
      </DivButton>
      <DivButton id="six" onClick={() => handleCalc(6)}>
        <TextCal>6</TextCal>
      </DivButton>
      <DivButton id="multiply" onClick={() => handleOpe("*")}>
        <TextCal>x</TextCal>
      </DivButton>
      <DivButton id="one" onClick={() => handleCalc(1)}>
        <TextCal>1</TextCal>
      </DivButton>
      <DivButton id="two" onClick={() => handleCalc(2)}>
        <TextCal>2</TextCal>
      </DivButton>
      <DivButton id="three" onClick={() => handleCalc(3)}>
        <TextCal>3</TextCal>
      </DivButton>
      <DivButton id="subtract" onClick={() => handleOpe("-")}>
        <TextCal>-</TextCal>
      </DivButton>
      <DivButton id="decimal" onClick={() => handleCalc(".")}>
        <TextCal>.</TextCal>
      </DivButton>
      <DivButton id="zero" onClick={() => handleCalc(0)}>
        <TextCal>0</TextCal>
      </DivButton>
      <DivButton id="equals" onClick={() => handleOpe("=")}>
        <TextCal>=</TextCal>
      </DivButton>
      <DivButton id="add" onClick={() => handleOpe("+")}>
        <TextCal>+</TextCal>
      </DivButton>
    </GridCalculadora>
    </>
  );
};

export default Calculadora;
