import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinAuthors'
})
export class JoinAuthorsPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    if (value.length > 1) {
      const lastAuthor = value.pop();
      return value.join(", ") + " und " + lastAuthor;
    }
    return value.join(", ");
  }
}
