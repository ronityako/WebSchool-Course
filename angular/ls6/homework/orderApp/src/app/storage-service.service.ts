import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }

  saveInStorage(key, val){
    sessionStorage.setItem(key, val);
  }

  getFromStorage(key){
    return sessionStorage.getItem(key);
  }
}
