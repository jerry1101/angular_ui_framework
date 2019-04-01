import { State } from './state';
import { Vendor } from './vendor';

export const vendorList: Vendor[] = [
    { code: '001', name: 'John-Wine-FL' },
    { code: '002', name: 'Mary-Wine-FL' },
    { code: '003', name: 'Kevin-Asso-FL' }
];
export const stateList: State[] =
    [{ code: 'MD', name: 'Maryland' },
    { code: 'FL', name: 'Florida' },
    { code: 'NY', name: 'New York' },
    {
        name: 'Alabama',
        code: 'AL'
    },
    {
        name: 'Alaska',
        code: 'AK'
    },
    {
        name: 'American Samoa',
        code: 'AS'
    },
    {
        name: 'Arizona',
        code: 'AZ'
    },
    {
        name: 'Arkansas',
        code: 'AR'
    },
    {
        name: 'California',
        code: 'CA'
    },
    {
        name: 'Colorado',
        code: 'CO'
    },
    {
        name: 'Connecticut',
        code: 'CT'
    },
    {
        name: 'Delaware',
        code: 'DE'
    },
    {
        name: 'District Of Columbia',
        code: 'DC'
    }
    ];

