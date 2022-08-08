import React from "react";
import { Form } from "react-bootstrap";
import { selectablesSteps } from "../const";
import IStep from "../types/IStep";
import "./StepForm.css"

interface IProps {
    step: IStep,
    onUpdate: (step: IStep) => void
}

const StepForm = ({ step, onUpdate }: IProps) => {
    return <Form className="step-form">
        <Form.Group>
            <Form.Label>
                Step
            </Form.Label>

            <Form.Select onSelect={onSelect}>
                {selectablesSteps.map((s) => {
                    return (
                        <option value={s.getName()} key={s.getName()}>{s.getName()}</option>
                    )
                })}
            </Form.Select>

            {step.getForm(onUpdate)}
        </Form.Group>
    </Form>

    function onSelect(e: any) {
        throw new Error("Not implemented");
        // setSelectedStep(e.target.value);
    }
};

export default StepForm;