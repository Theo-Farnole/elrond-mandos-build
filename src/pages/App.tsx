import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import IStep from '../types/IStep';
import StepForm from '../components/StepForm';
import { defaultStep } from '../const';

function App() {

  const [steps, setSteps] = React.useState<IStep[]>([
    defaultStep
  ]);

  return (
    <div className="App">
      <div className='panel-container'>

        <div className="panel-child panel-left">

          <h3 className="mb-3">
            Steps
          </h3>

          {steps.map((step, index) => {
            return <StepForm step={step} key={index} />;
          })}

          <Button className="w-100" variant="light" onClick={addStep}>
            +
          </Button>
        </div>

        <div className="panel-child panel-right">

          <h3 className="mb-3">
            JSON output
          </h3>

          {/* <JSONTree data={toJson()} /> */}
          <div className="code-snippet">

            <pre>
              {toStringifiedJson()}
            </pre>
          </div>
        </div>
      </div>

      <Button variant="success" id="download" onClick={download}>Download</Button>
    </div>
  );

  function addStep() {
    setSteps([...steps, defaultStep]);
  }

  function download() {
    // download the json file
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(toJson())], { type: 'text/plain' });

    element.href = URL.createObjectURL(file);
    element.download = "step.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  function toJson() {
    return {
      name: "Step name",
      steps: steps.map(step => step.toJson())
    };
  }

  function toStringifiedJson() {
    return JSON.stringify(toJson(), null, 4)
  }
}

export default App;;
