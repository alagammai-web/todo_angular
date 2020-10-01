import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(tasklist: string[], searchtask: string): any {
    if (!searchtask) { return tasklist; }
    if (!tasklist) { return []; }

    searchtask = searchtask.toLowerCase();
 
    return tasklist.filter((task: string) => {
      return task.toLowerCase().includes(searchtask);
    });

  }

}
