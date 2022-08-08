import { FullEsdt } from "./FullEsdt";
import { CompactEsdt } from "./CompactEsdt";

export class Account {
    constructor(
        public address: string,
        public nonce: number,
        public balance: string,
        public storage: { [key: string]: string } = {},
        public code: string = "",
        public username: string = "",
        public comment: string = "",
        public esdt: (CompactEsdt | FullEsdt)[] = [],
    ) { }

    toJson() {
        return {
            comment: this.comment ?? "",
            nonce: this.nonce,
            balance: this.balance,
            "esdt": {},
            username: this.username ?? "",
            storage: this.storage,
            code: this.code,
        };
    }

    public static getDefault(): Account {
        return new Account("", 0, "0");

    }
}
