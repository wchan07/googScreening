// Comment Mandatory prescreen questions:
// 1. Interface Using Typescript, define an interface for a class that has one public property `valueStream`
//     and one public member function `isNumber`. `valueStream` is an Observable that emits either a string or
//     number. `isNumber` has no arguments and returns an Observable that emits a boolean.
// 2. Implementation Implement the interface defined in (1). The `valueStream` property should be initialized
//     as a constructor parameter. The Observable returned by `isNumber` should emit true if `valueStream`
//     emits a number, otherwise it should emit false.
// 3. Testing Write a test case for the implementation in (2).

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

interface INumberStream {
  valueStream: Observable<string|number>;
  isNumber: () => Observable<boolean>
}

export class NumberStream implements INumberStream {
  valueStream: Observable<string|number>;
  constructor (vStream: Observable<string|number>) {
    this.valueStream = vStream;
  }

  isNumber() {
    return this.valueStream.pipe(
      map(v => typeof v === 'number')
    )
  }
}
