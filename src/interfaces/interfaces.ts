export interface Expense {
    readonly id:number;
    title: string;
    description: string | null;
    value: number;
    date: string;
};