import {Clients } from '../model/clients';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  client: Clients = new Clients();
  submitted = false;
  check = false;
  showAlert=false;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {}

  newClient(): void {
    this.submitted = false;
    this.check = false;
    this.client = new Clients();
  }

  save() {
    this.clientService.createClient(this.client).subscribe(
      (data) => {
        console.log(data);
        this.client = new Clients();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  toggleCheckbox() {
    this.check = !this.check;
  }

  onSubmit() {
    if (this.check) {
      this.submitted = true;
      this.save();
    } else {
      this.showAlert = true;
    }
  }

  closeAlert() {
    this.showAlert = false;
  }

  gotoList() {
    this.router.navigate(['/']);
  }
}

