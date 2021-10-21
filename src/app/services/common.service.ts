import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CommonService {

    public getFormulaText(formulas, type) {
        let formulaText = '', rectText = '';
        if (formulas && Array.isArray(formulas)) {
            formulas.map(formula => {
                switch (type) {
                    case 'CONDITIONAL':
                        formulaText += formula.logic;
                        formula.conditions.map(condition => {
                            formulaText += condition.start + condition.cde1 + condition.operator1 + condition.cde2 +
                                condition.value + condition.end + condition.condition + condition.operator2;
                            rectText = formula.retcde1 + formula.retoperator + formula.retcde2 + formula.retvalue;
                            if (rectText) {
                                formulaText += '{' + rectText + '}';
                            }
                        });
                        break;
                    case 'ADVANCED':
                        formulaText += formula.start + formula.cde1 + formula.operator1 + formula.cde2 +
                            formula.value + formula.end + formula.condition + formula.operator2;
                        break;
                    case 'SIMPLE':
                        formulaText += (formula.operator == 'NULL' ? '' : formula.operator) + formula.cde;
                }
            });
        }
        return formulaText;
    }
}
