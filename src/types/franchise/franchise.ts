export interface FinancialValue {
    Amount: number;
    Currency: string;
}

export interface FranchiseMeta {
    LastUpdated: string;
    Currency: string;
    Language: string;
}

export interface FinancialEntry extends FinancialValue {
    Name?: string;
    Description?: string;
}

export interface FranchiseEstimatedCostData {
    FranchiseCosts: FinancialEntry[];
    Meta: FranchiseMeta;
}

export interface FranchiseExpectedProfitContent {
    Revenue: FinancialEntry;
    Costs: FinancialEntry[];
    Profit: FinancialEntry;
}

export interface FranchiseExpectedProfitData {
    FranchiseExpectedProfit: FranchiseExpectedProfitContent;
    Meta: FranchiseMeta;
}

export interface FranchiseOnboardingStep {
    Id: number;
    Index: number;
    Title: string;
    Description: string;
    Icon?: string;
}

export interface FranchiseBenefit {
    Id: number;
    Title: string;
    Description: string;
    Icon?: string;
}
