import React from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import ExternalStep from '../types/ExternalSteps';
import IStep from '../types/IStep';
import { JSONTree } from 'react-json-tree';

function App() {


  const selectablesSteps: IStep[] = [
    new ExternalStep(""),
  ];

  const [selectedStep, setSelectedStep] = React.useState<IStep>(selectablesSteps[0]);
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void

  return (
    <div className="App">
      <div className='panel'>

        <div className="panel-child panel-left">

          <Form>
            <Form.Group>
              <Form.Label>
                Step
              </Form.Label>

              <Form.Select onSelect={onSelect} >
                {selectablesSteps.map((step) => {
                  return (
                    <option value={step.getName()} key={step.getName()}>{step.getName()}</option>
                  )
                })}
              </Form.Select>

              {selectedStep.getForm(() => { forceUpdate() })}
            </Form.Group>
          </Form>
        </div>

        <div className="panel-child panel-right">
          <JSONTree data={selectedStep.toJson()} />

        </div>
      </div>

      <Button variant="success" id="download" onClick={download}>Download</Button>
    </div>
  );

  function download() {
    // download the json file
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(selectedStep.toJson())], { type: 'text/plain' });

    element.href = URL.createObjectURL(file);
    element.download = "step.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


  function onSelect(e: any) {
    setSelectedStep(e.target.value);
  }
}

export default App;
