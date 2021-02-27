import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-source',
  templateUrl: './create-source.component.html',
  styleUrls: ['./create-source.component.scss']
})
export class CreateSourceComponent implements OnInit {

   selectedRuleColumn = '';
  ruleTypes = [{
    value: 'DataType',
    label: 'Data Type'
  }, {
    value: 'Length',
    label: 'Length'
  }, {
    value: 'MinLength',
    label: 'Min Length'
  }, {
    value: 'MaxLength',
    label: 'Max Length'
  }, {
    value: 'LessThanOrEqualTo',
    label: '<='
  }, {
    value: 'GreaterThanOrEqualTo',
    label: '>='
  }, {
    value: 'EqualTo',
    label: '=='
  }, {
    value: 'ReferenceCDE',
    label: 'Reference CDE'
  }, {
    value: 'Custom',
    label: 'Custom'
  }];

  dataTypes = [{
    value: 'Numeric',
    label: 'Numeric'
  }, {
    value: 'Text',
    label: 'Text'
  }, {
    value: 'AlhpaNumberic',
    label: 'Alhpa Numberic'
  }];

  rulesList = [];
  showCDECar = false;
  analyseData = [];
  analysisId = '';
  mode;
  rulesetId = '';
  cdeStatistics: any = {};

  // Rule Dropdowns
  ruleType = 'dataType';
  ruleOperator = '';
  ruleValue = '';
  ruleFormat = '';
  ruleDimenstion = '';

  ruleTypeList = [{
    label: 'Data Type',
    value: 'dataType',
  }, {
    label: 'Length',
    value: 'length',
  }, {
    label: 'Value',
    value: 'value',
  }];

  ruleOperatorList = {
    dataType: [{
        label: 'Should be',
        value: 'Shouldbe'
      }],
    length: [{
        label: '=',
        value: 'euqualto'
      }, {
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
      }],
    value: [{
        label: 'Should be',
        value: 'Shouldbe'
      }, {
        label: 'Should not include',
        value: 'shouldnotinclude'
      }, {
        label: 'Same as',
        value: 'sameas'
      }, {
        label: 'Should be in',
        value: 'shouldbein'
      }, {
        label: 'Reference data',
        value: 'referencedata'
      }, {
        label: 'Element',
        value: 'element'
      }]
  };

  ruleValueList = {
    dataType: [{
      label: 'Alpha',
      value: 'alpha'
    }, {
      label: 'Alphanumeric',
      value: 'alphanumeric'
    }, {
      label: 'Integer',
      value: 'integer'
    }, {
      label: 'Numeric',
      value: 'numeric'
    }, {
      label: 'Date',
      value: 'date'
    }, {
      label: 'DateTime',
      value: 'datetime'
    }],
  value: [{
      label: 'Special Characters',
      value: 'specialcharacters'
    }, {
      label: 'Amount',
      value: 'amount'
    }]
  };

  ruleFormatList = {
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

  ruleDimenstionList = [{
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

  constructor() { }

  ngOnInit() {
  }

}
