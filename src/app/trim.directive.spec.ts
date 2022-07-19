import { TrimDirective } from './trim.directive';

describe('TrimDirective', () => {
  it('should create an instance', () => {
    const directive = new TrimDirective();
    expect(directive).toBeTruthy();
  });

  it('should trim value', () => {
    const directive = new TrimDirective();
    let el = {value: '   123   '}
    let value = '   123   '
    directive.onBlur(el, value)
    expect(el.value).toEqual('123');
  });
});
