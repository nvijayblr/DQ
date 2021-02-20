import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileformat'
})
export class FileFormatPipe implements PipeTransform {

  transform(path: string): any {
    if (!path) {
      return false;
    }
    if (path.indexOf('.jpg') > 0 || path.indexOf('.jpeg') > 0 || path.indexOf('.png') > 0 || path.indexOf('.gif') > 0
        || path.indexOf('.jfif') > 0 || path.indexOf('.webp') > 0 || path.indexOf('.heif') > 0 || path.indexOf('.tiff') > 0) {
      return 'images';
    } else {
      return 'docs';
    }
  }
}
