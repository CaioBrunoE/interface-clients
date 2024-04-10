import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { Clients } from '../model/clients';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  submitted:false
  id: string;
  client: Clients;
  showAlert = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientService) { }


  ngOnInit() {
    this.client = new Clients();
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
 }

  trueAlertClient() {
    this.showAlert = true;
  }

  accept() {
    this.clientService.updateClient(this.id, this.client)
      .subscribe(data => {
        console.log(data);
        this.client = new Clients();
        this.gotoList();
      }, error => console.log(error));
    this.showAlert = false;
  }



 onSubmit() {
  this.trueAlertClient();
}

 gotoList() {
  this.router.navigate(['/']);
}
close(){
  this.showAlert = false;
}

}
