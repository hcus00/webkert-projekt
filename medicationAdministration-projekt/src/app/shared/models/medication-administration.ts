export interface MedicationAdministration {
    identifier?: Identifier[]; //azonosító
    instantiates?: string[]; //protokoll
    partOf?: string[]; //egy nagyobb esemény, melynek az adminisztráció a része
    status: string; //állapot: folyamatban, várakozik, kész, hibás, ismeretlen
    statusReason?: CodeableConcept[]; //állapotindoklás !!!!!!!!!!
    category?: CodeableConcept; //kategória !!!!!!!!!!!!!!!!
    medication: CodeableConcept|string; //gyógyszer neve
    subject: string; //embercsoport aki kapja a gyógyszert
    context?: string; //beteg hányszor járt orvosnál, javult, nem javult..
    supportInformation?: string[]; //plusz infók, pl magasság, testsúly stb..
    effective: string|Period; //dátum, mettől meddig tartott, nem tartott a kezelés
    performer?: Perfomer[]; //ki az orvos
    reasonCode?: CodeableConcept[]; //indok, hogy miért lett kiírva a gyógyszer !!!!!!!!!!
    reasonReference?: string[]; //állapot - megfigyelés ami indokolja a gyógyszert
    request?: string; //hivatalos igénylés
    device?: string[]; //igényléshez használt eszköz
    note?: Annotation[]; //megjegyzés !!!!!!!!
    dosage?: Dosage; //dózis, mikor, mennyit, hogyan
    eventHistory?: string[]; //mikor lett hozzáadva az adminisztráció
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
    function?: CodeableConcept; //feladat
    actor: string; //ki csinálta
}

export interface Dosage {
    text?: string; //leírás
    site?: CodeableConcept; //pl. bal kéz
    route?: CodeableConcept; //hogyan kell bevenni
    method?: CodeableConcept; //hogyan kell beadni
    dose?: SimpleQuantity; //adag
    rate?: Ratio|SimpleQuantity;
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
