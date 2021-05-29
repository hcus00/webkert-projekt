import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MedicationAdministration } from '../shared/models/medication-administration';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: MedicationAdministration, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  get(collectionName: string): Observable<any[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('subject', 'asc');
      return query;
    }).valueChanges() as Observable<any[]>;
  }

  weakAdd(collectionName: string, data: MedicationAdministration) {
    return this.afs.collection(collectionName).add(data);
  }
}
