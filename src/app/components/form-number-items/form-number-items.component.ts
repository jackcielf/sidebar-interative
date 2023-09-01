import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-number-items',
  templateUrl: './form-number-items.component.html',
  styleUrls: ['./form-number-items.component.scss'],
})
export class FormNumberItemsComponent implements OnInit {
  valueItems: number;
  fieldInvalid = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Validação
  fnNumberItems(): void {
    if (!this.valueItems || typeof this.valueItems !== 'number') {
      this.fieldInvalid = true;
      setTimeout(() => {
        this.fieldInvalid = false;
      }, 3000);
    } else {
      this.router.navigate([`/form-name/${this.valueItems}`]);
    }
  }
}
