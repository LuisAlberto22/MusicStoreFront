import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimiter',
  standalone: true
})
export class TextLimiterPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    const limit = args.length > 0 ? args[0] : 50
    return value.length > limit ? value.slice(0, limit) + '...' : value
  }

}
