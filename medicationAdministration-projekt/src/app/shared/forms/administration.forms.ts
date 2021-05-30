import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { codeableConceptForm } from "./codeableconcept.forms";
import { simpleQuantityForm } from "./simplequantity.forms";

export function administrationForm(): FormGroup {
    return new FormGroup({
        identifier: new FormArray([]),
        instantites: new FormArray([]),
        partOf: new FormArray([]),
        status: new FormControl(),
        statusReason: new FormArray([
            codeableConceptForm()
        ]),
        category: codeableConceptForm(),
        medication: new FormControl(),
        subject: new FormControl(),
        context: new FormControl(),
        supportInformation: new FormArray([]),
        effective: new FormControl(),
        performer: new FormArray([
            new FormGroup({
                function: codeableConceptForm(),
                actor: new FormControl()
            })
        ]),
        reasonCode: new FormArray([
            codeableConceptForm()
        ]),
        reasonReference: new FormArray([]),
        request: new FormControl(),
        device: new FormArray([]),
        note: new FormArray([
            new FormGroup({
                author: new FormControl(),
                time: new FormControl(),
                text: new FormControl()
            })
        ]),
        dosage: new FormGroup({
            text: new FormControl(),
            site: codeableConceptForm(),
            route: codeableConceptForm(),
            method: codeableConceptForm(),
            dose: simpleQuantityForm(),
            rate: new FormGroup({
                numerator: simpleQuantityForm(),
                denominator: simpleQuantityForm()
            })
        }),
        eventHistory: new FormArray([])
    });
}