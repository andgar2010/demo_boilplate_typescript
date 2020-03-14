import { hello } from './hello';

class App {
  constructor() { }

  public static start() {
    console.log(hello('world'));
  }
}

App.start();