import React from "react"
import { Button, Form } from "react-bootstrap";
import { defaultStep } from "../const";
import Scenario from "../types/Scenario";
import StepForm from "./StepForm";

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
        <Button variant="secondary" className="w-100 mb-5">Load</Button>

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
                return <StepForm step={step} key={index} onUpdate={(step) => { scenario.steps[index] = step; onUpdate(scenario) }} />;
            })
        }

        <Button className="w-100" variant="light" onClick={addStep}>
            +
        </Button>
    </>;

    function addStep() {

        scenario.steps.push(defaultStep);
        onUpdate(scenario);

    }
};

export default ScenarioForm;