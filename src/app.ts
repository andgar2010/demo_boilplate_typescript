import { hello } from './hello';

class App {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public static start(): void {
    console.log(hello('world'));
  }
}

App.start();
