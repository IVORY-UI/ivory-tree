import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdGeneratorService {

  getUniqueId() {
    const randomness = Math.random().toString(36).slice(2, 11);
    return randomness;
  }

}
