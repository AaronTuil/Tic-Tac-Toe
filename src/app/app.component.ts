import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sign = "X";
  title = 'app';
  items = [1,2,3];
  boxes = [];

  clicked() {
    if (this.sign == "O") {
      this.sign = "X";
    } else {
      this.sign = "O"
    }

    this.checkWin();
  }

  checkWin() {
    console.log();
  }
}
