import {Component, Renderer2, ViewChild} from '@angular/core';
import {MyInput} from "@my-stencil-project/my-stencil-project-angular";

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  myVariable : string = "";

  constructor(private rd: Renderer2) {

  }


}
