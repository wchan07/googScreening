import { from } from 'rxjs';
import { NumberStream } from './numberStream';
import { toArray } from 'rxjs/operators';

describe('NumberStream', () => {
  fit('should emit true for numbers', (done: DoneFn) => {
    const testInput = from([null, '', 0, 'abc', 3, 'def', 1.5, 'xyz', 200]);
    const testStream = new NumberStream(testInput);

    testStream.isNumber().pipe(toArray()).subscribe(output => {
      console.log(output);
      expect(output).toEqual([false, false, true, false, true, false, true, false, true]);
      done();
    })
  });
});
