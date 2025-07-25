import { SelectOption } from "../common";

export interface TradingFormData {
    currencyUnit: SelectOption | undefined
    mainPrice: string
    highPrice: string
    lowPrice: string
}