import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structuraldirective';

  public batches=["PPA","LB","MEAN","Python","C#"];
  public fees=[100,200,300,500,400];
}
