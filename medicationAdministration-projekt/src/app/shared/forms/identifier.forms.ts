import { FormControl, FormGroup } from "@angular/forms";
import { codeableConceptForm } from "./codeableconcept.forms";

export function identifierForm(): FormGroup {
    return new FormGroup({
        use: new FormControl(),
        type: codeableConceptForm(),
        system: new FormControl(),
        value: new FormControl(),
        period: new FormGroup({
            start: new FormControl(),
            end: new FormControl
        }),
        assigner: new FormControl()
    });
}