import React from "react";
import { Form } from "react-bootstrap";
import { BlockInfo } from "../types/BlockInfo";

interface IProps {
    blockInfo: BlockInfo,
    onUpdate: (blockInfo: BlockInfo) => void,
    groupLabelName: string
}

const BlockInfoForm = ({ blockInfo, onUpdate, groupLabelName }: IProps) => {
    return <>
        <Form.Group>
            <Form.Label>
                {groupLabelName}
            </Form.Label>

            {/*  TODO: create a specific class instead of reusing this class */}
            <div className="accounts-form">
                <Form.Group>
                    <Form.Label>
                        Timestamp
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={blockInfo.blockTimestamp}
                        onChange={(e) => { blockInfo.blockTimestamp = parseInt(e.target.value); onUpdate(blockInfo) }
                        } />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Nonce
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={blockInfo.blockNonce}
                        onChange={(e) => { blockInfo.blockNonce = parseInt(e.target.value); onUpdate(blockInfo) }
                        } />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Round
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={blockInfo.blockRound}
                        onChange={(e) => { blockInfo.blockRound = parseInt(e.target.value); onUpdate(blockInfo) }
                        } />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Epoch
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={blockInfo.blockEpoch}
                        onChange={(e) => { blockInfo.blockEpoch = parseInt(e.target.value); onUpdate(blockInfo) }
                        } />
                </Form.Group>
            </div>
        </Form.Group>
    </>;
}

export default BlockInfoForm;