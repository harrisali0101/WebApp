# Intro

This project performs CRUD operations for a Applicant. It has two main components for listing all the applicants and adding/editing an applicant.
There is a applicant-details model and details service class in a shared folder. 
All the communication with the backend are done using the service class.

The Applicant has the following validations which must be followed in order to insert any data:
1.Name – at least 5 Characters 
2.FamilyName – at least 5 Characters 
3.Address – at least 10 Characters 
4.CountryOfOrigin – must be a valid Country – Validated using restcountries.eu api.
EmailAddress – must be an valid email 
Age – must be between 20 and 60
Hired – If provided should not be null

To run the app Run ng serve in the terminal of the project the app will start listening to http://localhost:4200/


# ApplicantWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
