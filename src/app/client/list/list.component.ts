import { ClientService } from './../service/client.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Clients } from '../model/clients';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: Observable<Clients[]>;
  searchValue:string;
  currentDate:  Date  =  new Date();
  showAlert = false;
  public paginaAtual = 1;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.clients = this.clientService.getClientsList();
    this.clients.pipe(take(1)).subscribe(clients => {
      return clients;
    });
  }

  clientDetails(id: string) {
    this.router.navigate(['getid', id]);
  }

  deleteClient(id: string, name: string) {
    this.showAlert = true;
    if (this.showAlert == true) {
      this.clientService.deleteClient(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
    } else {
      this.showAlert = false;
    }
  }
}
