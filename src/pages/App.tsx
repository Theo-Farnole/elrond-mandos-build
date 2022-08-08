import React from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap';
import IStep from '../types/IStep';
import StepForm from '../components/StepForm';
import { defaultStep } from '../const';

function App() {

  const [steps, setSteps] = React.useState<IStep[]>([
    defaultStep
  ]);
  const [scenarioName, setScenarioName] = React.useState<string>("Scenario Name");
  const [scenarioComment, setScenarioComment] = React.useState<string>("");

  return (
    <div className="App">
      <div className='panel-container'>

        <div className="panel-child panel-left">


          <h3 className="mb-3">
            Scenario
          </h3>
          <Button variant="secondary" className="w-100 mb-5" onClick={download}>Load</Button>

          <h3 className="mb-3">
            Scenario info
          </h3>

          <Form className="step-form">
            <Form.Group>
              <Form.Group>
                <Form.Label>
                  Scenario Name
                </Form.Label>
                <Form.Control type="text" value={scenarioName} onChange={(e) => setScenarioName(e.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Scenario Comment
                </Form.Label>
                <Form.Control type="text" value={scenarioComment} onChange={(e) => setScenarioComment(e.target.value)} />
              </Form.Group>
            </Form.Group>
          </Form>

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

          <div >

            <Button variant="success" className="w-100 mb-5" onClick={download}>Download</Button>

            <pre className="code-snippet">
              {toStringifiedJson()}
            </pre>
          </div>
        </div>
      </div>

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
      name: scenarioName,
      comment: scenarioComment,
      steps: steps.map(step => step.toJson())
    };
  }

  function toStringifiedJson() {
    return JSON.stringify(toJson(), null, 4)
  }
}

export default App;;
