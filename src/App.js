import { useState } from "react";
import Button from "./components/Button/Button.js";
import Input from "./components/Input/Input.js";

import { Container, Content, Row } from "./styles.js";

function App() {
  const [numberCurrently, setNumberCurrently] = useState('0');
  const [operation, setOperation] = useState(null);
  const [previousNumber, setPreviousNumber] = useState(null);

  const handleClear = () => {
    setNumberCurrently('0');
    setOperation(null);
    setPreviousNumber(null);
  }

  const handleAddNumber = (number) => { 
    setNumberCurrently(prev => prev === '0' ? `${number}` : `${prev}${number}`);
  }

  const handleSetOperation = (op) => {
    setPreviousNumber(numberCurrently);
    setNumberCurrently('0');
    setOperation(op);
  }

  const handleEqual = () => {
    if (!operation || previousNumber == null) return;

    const current = parseFloat(numberCurrently);
    const previous = parseFloat(previousNumber);

    let result;
    switch (operation) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '/':
        result = previous / current;
        break;
      default:
        return;
    }

    setNumberCurrently(String(result));
    setOperation(null);
    setPreviousNumber(null);
  }

  return (
    <Container>
      <Content>
        <Input value={numberCurrently} />
        <Row>
          <Button label={1} onClick={() => handleAddNumber('1')} />
          <Button label={2} onClick={() => handleAddNumber('2')} />
          <Button label={3} onClick={() => handleAddNumber('3')} />
        </Row>

        <Row>
          <Button label={4} onClick={() => handleAddNumber('4')} />
          <Button label={5} onClick={() => handleAddNumber('5')} />
          <Button label={6} onClick={() => handleAddNumber('6')} />
        </Row>

        <Row>
          <Button label={7} onClick={() => handleAddNumber('7')} />
          <Button label={8} onClick={() => handleAddNumber('8')} />
          <Button label={9} onClick={() => handleAddNumber('9')} />
        </Row>

        <Row>
          <Button label={'+'} onClick={() => handleSetOperation('+')} />
          <Button label={'-'} onClick={() => handleSetOperation('-')} />
          <Button label={'*'} onClick={() => handleSetOperation('*')} />
        </Row>

        <Row>
          <Button label={'/'} onClick={() => handleSetOperation('/')} />
          <Button label={'='} onClick={handleEqual} />
          <Button label={'C'} onClick={handleClear} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
