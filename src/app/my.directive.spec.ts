import { Directive } from '@angular/core';
import {HoverDirective  } from './my.directive';

describe('MyDirective', () => {
  it('should create an instance', () => {
    const directive = new Directive();
    expect(directive).toBeTruthy();
  });
});
