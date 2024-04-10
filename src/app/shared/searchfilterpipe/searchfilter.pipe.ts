import { Pipe, PipeTransform } from '@angular/core';
import { Clients } from 'src/app/client/model/clients';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(clients: Clients[], searchValue:string): Clients[] {

    if(!clients || ! searchValue) {
      return clients;
    } else {
      return clients.filter(client => client.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
  }
}
