import { MyPipeNamePipe } from './my-pipe-name.pipe';

describe('MyPipeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
