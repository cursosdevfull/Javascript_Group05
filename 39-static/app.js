class App {
  static title = "My App";

  static getApplicationID() {
    return this.generateID();
  }

  static generateID() {
    return "ID-2345";
  }

  static getId() {
    return this.generateID();
  }

  getDescription() {
    this.getId();
    return "Description";
  }
}

console.log(App.title);
//console.log(App.generateID());
//console.log(App.getApplicationID());
console.log("App.getId()", App.getId());
const app = new App();
app.getDescription();

//const app = new App();
//console.log(app.title);
