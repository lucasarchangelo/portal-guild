import { WeekStringPipe } from './week-string.pipe';

describe('WeekStringPipe', () => {
  it('create an instance', () => {
    const pipe = new WeekStringPipe();
    expect(pipe).toBeTruthy();
  });
});
