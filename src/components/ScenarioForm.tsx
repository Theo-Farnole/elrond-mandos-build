import React from "react"
import { Button, Form } from "react-bootstrap";
import { defaultStep } from "../const";
import Scenario from "../types/Scenario";
import StepForm from "./StepForm";
import "./ScenarioForm.css"

interface IProps {
    scenario: Scenario
    onUpdate: (scen: Scenario) => void
}

const ScenarioForm = ({
    onUpdate,
    scenario
}: IProps) => {

    return <>
        <h3 className="mb-3">
            Scenario
        </h3>

        <input type="file" name="file" id="file" className="inputfile" accept=".json" onChange={loadFile} />
        <label htmlFor="file">Load scenario</label>

        <h3 className="mb-3">
            Scenario info
        </h3>

        <Form className="step-form">
            <Form.Group>
                <Form.Group>
                    <Form.Label>
                        Scenario Name
                    </Form.Label>
                    <Form.Control type="text" value={scenario.name} onChange={(e) => { scenario.name = e.target.value; onUpdate(scenario) }} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Scenario Comment
                    </Form.Label>
                    <Form.Control type="text" value={scenario.comment} onChange={(e) => { scenario.comment = e.target.value; onUpdate(scenario) }} />
                </Form.Group>
            </Form.Group>
        </Form>

        <h3 className="mb-3">
            Steps
        </h3>
        {
            scenario.steps.map((step, index) => {
                return <StepForm
                    step={step}
                    key={index}
                    onUpdate={(step) => { scenario.steps[index] = step; onUpdate(scenario) }}
                    onDelete={() => { scenario.steps.splice(index, 1); onUpdate(scenario) }}
                />;
            })
        }

        <Button className="w-100" variant="light" onClick={addStep}>
            Add step
        </Button>
    </>;

    function addStep() {

        scenario.steps.push(defaultStep);
        onUpdate(scenario);

    }

    async function loadFile(event: any) {
        let file = event.target.files[0] as File;
        console.log(file);

        if (file) {
            const text = await file.text();
            onUpdate(Scenario.load(text));
        }
    }
};

export default ScenarioForm;