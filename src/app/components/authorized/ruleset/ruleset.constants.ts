export const RuleTypeList = [{
    label: 'Data Type',
    value: 'DataType'
}, {
    label: 'Length',
    value: 'Length'
}, {
    label: 'Value',
    value: 'Value'
}, {
    label: 'Reference CDE',
    value: 'ReferenceCDE'
}, {
    label: 'Formula',
    value: 'Formula'
}];


export const Operators = {
    ShouldBe: {
        label: 'Should be',
        value: 'Shouldbe'
    },
    ShouldNotBe: {
        label: 'Should not include',
        value: 'shouldnotinclude'
    },
    EqualTo: {
        label: '=',
        value: 'equalto'
    },
    CompareOperator: [{
        label: '>=',
        value: 'greaterthanequalto'
    }, {
        label: '<=',
        value: 'lessthanequalto'
    }, {
        label: '>',
        value: 'greaterthan'
    }, {
        label: '<',
        value: 'lessthan'
    }]
}
export const RuleOperatorList = {
    DataType: [Operators.ShouldBe],
    ReferenceCDE: [Operators.ShouldBe],
    Formula: [Operators.ShouldBe],
    MinLength: [Operators.EqualTo],
    MaxLength: [Operators.EqualTo],
    Length: [Operators.EqualTo].concat(Operators.CompareOperator),
    Value: [Operators.ShouldBe].concat(Operators.ShouldNotBe)
}

export const RuleValueList = {
    DataType: [{
        label: 'Alpha',
        value: 'alpha'
    }, {
        label: 'Alphanumeric',
        value: 'Alphanumeric'
    }, {
        label: 'Integer',
        value: 'Integer'
    }, {
        label: 'Numeric',
        value: 'Numeric'
    }, {
        label: 'Date',
        value: 'Date'
    }, {
        label: 'DateTime',
        value: 'DateTime'
    }],   
    ReferenceCDE: []
};

export const RuleFormatList = {
    date: [{
        label: 'YYYYMMDD',
        value: 'YYYYMMDD'
    }, {
        label: 'DD-MMM-YYYY',
        value: 'DDMMMYYYY'
    }, {
        label: 'DD-MMM-YY',
        value: 'DD-MMM-YY'
    }],
    datetime: [{
        label: 'YYYYMMDD HH:MM',
        value: 'YYYYMMDD'
    }, {
        label: 'DD-MMM-YYYY HH:MM',
        value: 'DDMMMYYYY'
    }, {
        label: 'DD-MMM-YY HH:MM',
        value: 'DD-MMM-YY'
    }],
    amount: [{
        label: '2 Decimals',
        value: '2 Decimals'
    }, {
        label: '3 Decimals',
        value: '3 Decimals'
    }]
};

export const RuleDimenstionList = [{
    label: 'Accuracy',
    value: 'Accuracy'
}, {
    label: 'Consistency',
    value: 'Consistency'
}, {
    label: 'Integrity',
    value: 'Integrity'
}, {
    label: 'Uniqueness',
    value: 'Uniqueness'
}, {
    label: 'Validity',
    value: 'Validity'
}];