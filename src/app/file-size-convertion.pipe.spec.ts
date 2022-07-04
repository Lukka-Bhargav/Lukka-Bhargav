import { FileSizeConvertionPipe } from './file-size-convertion.pipe';

describe('FileSizeConvertionPipe', () => {
  it('create an instance', () => {
    const pipe = new FileSizeConvertionPipe();
    expect(pipe).toBeTruthy();
  });
});
