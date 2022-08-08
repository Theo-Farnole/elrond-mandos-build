import React from "react";
import { Form } from "react-bootstrap";
import { selectablesSteps } from "../const";
import IStep from "../types/IStep";

interface IProps {
    step: IStep
}

const StepForm = ({ step }: IProps) => {

    const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void

    return <Form>
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

            {step.getForm(() => { forceUpdate() })}
        </Form.Group>
    </Form>

    function onSelect(e: any) {
        throw new Error("Not implemented");
        // setSelectedStep(e.target.value);
    }
};

export default StepForm;