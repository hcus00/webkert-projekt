export interface MedicationAdministration {
    id?: string;
    identifier?: Identifier[];
    instantiates?: string[];
    partOf?: string[];
    status: string;
    statusReason?: CodeableConcept[];
    category?: CodeableConcept;
    medication: string;
    subject: string;
    context?: string;
    supportInformation?: string[];
    effective: string;
    performer?: Perfomer[];
    reasonCode?: CodeableConcept[];
    reasonReference?: string[];
    request?: string;
    device?: string[];
    note?: Annotation[];
    dosage?: Dosage;
    eventHistory?: string[];
}

export interface Identifier {
    use?: string;
    type?: CodeableConcept;
    system?: string;
    value?: string;
    period?: Period;
    assigner?: string;
} 

export interface CodeableConcept {
    coding?: Coding[];
    text?: string;
}

export interface Coding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}

export interface Period {
    start: string;
    end: string;
}

export interface Perfomer {
    function?: CodeableConcept;
    actor: string;
}

export interface Dosage {
    text?: string;
    site?: CodeableConcept;
    route?: CodeableConcept;
    method?: CodeableConcept;
    dose?: SimpleQuantity;
    rate?: Ratio;
}

export interface Annotation {
    author?: string;
    time?: string;
    text: string;
}

export interface SimpleQuantity {
    value?: number;
    unit?: string;
    system?: string;
    code?: string;
}

export interface Ratio {
    numerator: SimpleQuantity;
    denominator: SimpleQuantity;
}
