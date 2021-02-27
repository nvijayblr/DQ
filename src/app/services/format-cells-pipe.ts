import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCell'
})
export class FormatCellsPipe implements PipeTransform {

  transform(value: string, settings: any): any {
    const { bgSettings } = settings || [];
    const bg = bgSettings.filter(setting => (+value >= +setting.min && +value <= +setting.max));
    if (bg && bg.length) {
      return bg[0].color;
    }
    return 'transparent';
  }
}
