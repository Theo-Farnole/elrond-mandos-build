import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Scenario from '../types/Scenario';
import ScenarioForm from '../components/ScenarioForm';

function App() {

  // Trust me, I really dislike those forceUpdate; but I don't know how to do it better. If you have any ideas, please let me know.
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void

  const [scenario, setScenario] = React.useState<Scenario>(new Scenario("Scenario Name", "", []));

  return (
    <div className="App">
      <div className='panel-container'>

        <div className="panel-child panel-left">
          <ScenarioForm scenario={scenario} onUpdate={(s) => { setScenario(s); forceUpdate() }} />
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


  function download() {
    // download the json file
    const element = document.createElement("a");
    const file = new Blob([toStringifiedJson()], { type: 'text/plain' });

    element.href = URL.createObjectURL(file);
    element.download = "step.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  function toStringifiedJson() {

    if (!scenario) throw new Error("Scenario is undefined");

    return JSON.stringify(scenario.toJson(), null, 4)
  }
}

export default App;;
