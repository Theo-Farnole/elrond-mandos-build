import React from "react";
import { Button, Form } from "react-bootstrap";

interface IProps<T> {
    array: T[],
    onUpdate: (array: T[]) => void,
    getNewItem: () => T,
    groupLabel: string,
    renderComponent: (item: T, index: number, onUpdate: (item: T) => void) => JSX.Element
}

const GenericArray = <T extends unknown>({
    array,
    onUpdate,
    getNewItem,
    groupLabel,
    renderComponent
}: IProps<T>) => {
    return <>
        <Form.Group >
            <Form.Label>
                {groupLabel} ({array.length})
            </Form.Label>

            <div className="accounts-form">
                {array.map((item, index) => {
                    return renderComponent(item, index, (newAccount) => {
                        array[index] = newAccount;
                        onUpdate(array);
                    });
                })}

                <Button className="w-100 mt-4" variant="light" onClick={add}>
                    Add
                </Button>
            </div>
        </Form.Group>
    </>;

    function add() {
        array.push(getNewItem());
        onUpdate(array);
    }
};

export default GenericArray;