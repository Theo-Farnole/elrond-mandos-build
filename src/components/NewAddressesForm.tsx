import React from "react";
import { Form } from "react-bootstrap";
import { INewAddress } from "../types/INewAddress";
import GenericArray from "./GenericArray";

interface IProps {
    newAddresses: INewAddress[],
    onUpdate: (newAddresses: INewAddress[]) => void
}

const NewAddressesForm = ({ newAddresses, onUpdate }: IProps) => {
    return <GenericArray
        array={newAddresses}
        onUpdate={onUpdate}
        getNewItem={() => { return { creatorAddress: "", creatorNonce: 0, newAddress: "" }; }}
        groupLabel="New addresses"
        renderComponent={(item, index, onUpdate) => {
            return <>
                <Form.Group>
                    <Form.Label>
                        Creator Address
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={item.creatorAddress}
                        onChange={(e) => { item.creatorAddress = e.target.value; onUpdate(item) }
                        } />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Creator Nonce
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={item.creatorNonce}
                        onChange={(e) => { item.creatorNonce = parseInt(e.target.value); onUpdate(item) }
                        } />
                </Form.Group>


                <Form.Group>
                    <Form.Label>
                        Timestamp
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={item.newAddress}
                        onChange={(e) => { item.newAddress = e.target.value; onUpdate(item) }
                        } />
                </Form.Group>

            </>;
        }
        } />;

}

export default NewAddressesForm;
