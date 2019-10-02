import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('should return the suported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});
