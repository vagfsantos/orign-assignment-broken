# [Orign](http://myorign.com) Take-Home Assignment
Important parts of this application **were intentionally deleted**.

Before that, it allowed users to type a car's [VIN number](https://www.autocheck.com/vehiclehistory/autocheck/en/vinbasics) and see it's `make`, `model`, `vehicle type` and `year of production`. We want you to rewrite the deleted parts so that the application works again and all it's tests pass.

# What needs to be done?

## VIN API Integration

The [VIN Service](src/services/vinService.ts) is broken since all functions in that file were removed, but we kept its type signatures to make it easier for you.

It's a simple TDD problem: find a VIN API you like, build an integration with it, run the [unit tests for that service](src/services/vinService.spec.ts) and make all failing ones green again. Naturally, hardcoded functions with test data won't be accepted.

The `response converter` test suit is `skipped` since we accept any VIN API integration, but you have to write similar tests for your integration. That's the only test suite that you are required to write: we care about testing and want to be sure that you know how to write them.

## Component styling
The styling for the [react components](src/components) were also removed, so that we can test your ability to write it again just from these [commited screenshots](screenhots).

We are aware that styling is not what makes you a great programmer, so you don't have to show advanced CSS tricks: just make sure the images [Cypress](https://www.cypress.io/) automatically generates when you run the end to end tests (in `/cypress/screenshots/App.spec.ts/`) are indistinguishable from the originals.

![Fetched data](screenshots/recording.gif)

## Redux-loop integration
We love functional programming, but relax: we won't force you to write any Monads here. Though this project uses [`redux-loop`](https://github.com/redux-loop/redux-loop), the command integration from our [reducer](src/store/index.ts) was removed.

Your last task is to fix that command usage and the `checkVinCmd` implementation.

# Testing
Use the `npm run test:unit` and `npm run test:e2e` to run all the application's tests and check what parts of the application are broken. 

OBS: to run the end to end tests you need the application to be started before. And don't forget to install the dependencies first!
