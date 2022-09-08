// AppComponent is app’s main component. It is app’s “shell” component and usually includes a <router-outlet> directive into which 
// Angular router renders other components.

import { Component, VERSION } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './Home-Posts.html',
//   styleUrls: [ './app.component.css' ]
// })

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
