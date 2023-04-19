import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  /* Controlador */
  nameField = new FormControl('Soy un control');

  constructor() { }

  ngOnInit(): void {
  }



}
