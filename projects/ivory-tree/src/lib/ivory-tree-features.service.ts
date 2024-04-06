import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class IvoryTreeFeaturesManager {
  private enableSelection = new BehaviorSubject<boolean>(false);

  constructor() { }

  public set selectable(value: boolean) {
    this.enableSelection.next(value);
  }

  public get selectable(): Observable<boolean> {
    return this.enableSelection.asObservable();
  }
}