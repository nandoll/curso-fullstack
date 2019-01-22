import { ReducerPipe } from './reducer.pipe';

describe('ReducerPipe', () => {
  it('create an instance', () => {
    const pipe = new ReducerPipe();
    expect(pipe).toBeTruthy();
  });
});
