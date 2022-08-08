import { FullEsdt } from "./FullEsdt";
import { CompactEsdt } from "./CompactEsdt";

export class Account {
    constructor(
        public address: string,
        public nonce: number,
        public balance: string,
        public username?: string,
        public esdt?: (CompactEsdt | FullEsdt)[],
        public comment?: string
    ) { }

    toJson(): string {
        throw new Error("Method not implemented.");
    }

    public static getDefault(): Account {
        return new Account("", 0, "0");

    }
}
