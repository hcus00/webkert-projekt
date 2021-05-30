import { FormArray, FormControl, FormGroup } from "@angular/forms";

export function codeableConceptForm(): FormGroup{
    return new FormGroup({
        coding: new FormArray([
            new FormGroup({
                system: new FormControl(),
                version: new FormControl(),
                code: new FormControl(),
                display: new FormControl(),
                userSelected: new FormControl(),
            })
        ]),
        text: new FormControl()
    });
}