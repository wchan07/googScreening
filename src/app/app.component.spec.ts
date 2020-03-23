import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NumberStream } from './numberStream';
import { toArray } from 'rxjs/operators';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('test app is running!');
  });

  it('should emit true for numbers', () => {
    const testInput = from([null, '', 0, 'abc', 3, 'def', 1.5, 'xyz', 200]);
    const testStream = new NumberStream(testInput);

    testStream.isNumber().pipe(toArray()).subscribe(output => {
      console.log(output);
      expect(output).toEqual([false, false, true, false, true, false, true, false, true])
    })
  });
});
