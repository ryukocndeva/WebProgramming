import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProject8';
  content = 'Welcome';

  TestEvent() {
    console.log('One Way Data Binding.');
  }

}
