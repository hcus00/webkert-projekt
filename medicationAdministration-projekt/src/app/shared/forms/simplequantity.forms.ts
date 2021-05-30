import { FormControl, FormGroup } from "@angular/forms";

export function simpleQuantityForm(): FormGroup{
    return new FormGroup({
        value: new FormControl(),
        unit: new FormControl(),
        system: new FormControl(),
        code: new FormControl()
    });
}