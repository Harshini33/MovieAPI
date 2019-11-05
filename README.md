# Angular project to retrieve movie data

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Generate component

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##Explain

//How to start code

ng new simple      // This create new angular project

npm install --save bootstrap    //This add bootstrap to angular project

Then root/app/styles.css
add this code @import "~bootstrap/dist/css/bootstrap.css" to use bootstrap css

Then run command "npm install @ngrx/schematics --save-dev" // This is for ngrx
"npm install @ngrx/{store,effects,entity,store-devtools} --save"


There are two components (home and profile)

HomeComponent : src/app/home
ProfileComponent : src/app/profile

There are 4 files for using ngrx.

news.actions.ts : Action
news.model.ts : Model for data
news.reducer.ts : Reducer
app.efffects.ts : Effect(This is for getting json data from the api)




