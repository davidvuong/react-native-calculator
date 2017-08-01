# react-native-calculator

**Welcome to react-native calculator!**

This is meant to be a project to introduce you to JavaScript (ES6), ReactJS, and React Native. The project is to build a calculator app (simplified version of the native iOS calculator). You'll learn about how to write JavaScript using ES6, ReactJS (with JSX) and how to use React Native to create pseudo-native apps.

**NOTE:** Although the main advantage of using React Native is to build a cross-platform app, the only environment we're going to be targeting is iOS. Android devices won't be supported.

## Installation

1. Clone this project from GitHub:

    ```bash
    git clone git@github.com:davidvuong/react-native-calculator.git
    cd react-native-calculator
    ```

1. Install NodeJS and `watchman`:

    ```bash
    nvm install 6.10.3
    brew install watchman
    ```

1. Make sure you are on the latest version of Xcode.

1. Clear your NPM cache because it can cause problems:

    ```bash
    npm cache clean
    ```

1. Download and install all project dependencies:

    ```bash
    npm install
    ```

1. Run the `react-native` development process:

    ```bash
    npm start
    ```

    This essentially starts a process that connects the code you write inside your Mac to the iPhone simulator.

1. Build the iOS application:

    Make sure to open a new terminal tab in the same directory before running the command.

    ```bash
    npm run build
    ```

    This command will open up the `simulator.app` and do a bit of funky magic to convert the code you wrote into an iOS app.

1. Open the `calculator` app inside your simulator

## Development

After you've built the iOS app, you don't need to rebuild it unless you make a change to native code (ObjectiveC for iOS and Java for Android). However, you still need to make sure you start the react-native process with `npm start` and open `simulator.app` to access the calculator app.

If you take a look at the [`index.ios.js`](./index.ios.js) file, you'll see that we have a very basic app called `Calculator`. It has a few buttons for numbers and a couple more for operations. Try to read and understand how it's implemented. I've written plenty of comments to help guide you through the code. Ask if you need help.

Once you have an understanding, you to extend app by adding additional features, refactoring code, handling edge cases etc. See the next section (`Tasks`) for more details.

### Tasks

Below are a few tasks you could do to improve this app. You can do them in any order you like.

1. Add the ability to clear the calculation. For example, I just press `1 + 1` but realised, I really wanted to perform `2 + 1`. I want to clear `1 + 1` and start again.
1. Add support for numbers with a decimal place (`1.1 * 5 =`)
1. Add a square root operation (making sure to handle edge cases like -1)!
1. Improve the application UI (experiment with Flexbox, learn about styles)!
1. Add the ability to use the previous calculation in the next calculation. After I've pressed `=`, I want to use the result of that calculation as the left hand side of the next calculation. Perhaps some kind of `runningTotal` variable to keep track of previous calculations would be useful here.
1. Refactor the `render` function inside `Calculator` to use some form of loop to display buttons. They all look very similar with the exception of `title=` and the argument passed into the various `onPress` functions.
1. Refactor the `style={}` objects by moving them into the `styles` object. Generally, you should try to keep all your styling inside a `styles` object. Otherwise, the `render` function gets crowded pretty quickly.

These are only a few examples, feel free to add your own tasks.

## Further documentation

### What is JavaScript (ES6)?

JavaScript is a programming language mainly used to build simple websites. However, recently people have developed an obsession with the language and started using it to build heavy web applications. Eventually JavaScript became popular in backend development (NodeJS), ugly mobile development (Cordova/PhoneGap), desktop application development (Electron) and now, not so ugly but still ugly mobile development (React Native).

Over the years, the language has changed and more features have been added (e.g. classes). As of writing this, the version of JavaScript most people use is ES6.

### What is ReactJS?

ReactJS (created by Facebook) is a "view" library (the V in MVC). It's essentially a library (collection of related classes and functions) used to help you structure your code a certain way so that you can efficiently write the frontend part of your application.

You write small isolated "components" then combine them together to create larger "components". For example, I want to build a navigation bar on the top of my website. The navigation has a logo and 4 links (home, careers, about-us, app) that when clicked take me to different parts of the website.

```js
import { Component } from 'react';
import { View } from 'react-native';

class LinkComponent extends Component {
  // stuff here...
}

class LogoComponent extends Component {
  // stuff here...
}

class NavigationComponent extends Component {
  render() {
    return (
      <View>
        <LogoComponent image="./my-logo.jpg" />
        <LinkComponent url="/home">Home</LinkComponent>
        <LinkComponent url="/careers">Careers</LinkComponent>
        <LinkComponent url="/about">About Us</LinkComponent>
        <LinkComponent url="/app">App</LinkComponent>
      </View>
    );
  }
}
```

In the example above, I create 2 components and 1 larger component (the larger uses the 2 smaller components). The `LinkComponent` is a component that accepts a url that when clicked will navigate to the specified url. The `LogoComponent` accepts image and simply displays it. Finally, I have a `NavigationComponent` that uses the 2 smaller components to create a navigation.

This is basically the whole idea behind using ReactJS. You build little components and then use them build larger components. You can then use those larger components to build even larger components. Eventually you'll have one really big component called `<App />` and that is your app.

It's a really nice way to organise your code. What you end up with are lots of components that do a specific thing which you can reuse in other places.

ReactJS was specifically made to help create websites. As more people used ReactJS, this style of building websites became more and more popular. Eventually Facebook adapted this style to allow people to create iOS and Android apps with ReactJS. React Native was what became after all of this.

### What is React Native?

TODO

### Generated code from React Native CLI

TODO

### Package management via NPM

NPM stands for Node Package Manager. This is the tool you use to add dependencies to JavaScript projects. A dependency is code written by somebody else that you use in your own app. For example, React Native is a dependency for this app (Facebook wrote it and we need it to build this iOS app).

The main problem package (or dependency) management tools like NPM are trying to solve is how to keep of the dependencies your app needs. This includes what dependencies you need and also the specific version too. For this, NPM requires that you have a `package.json` file that stores all of this information.

```json
{
  "dependencies": {
    "react": "16.0.0-alpha.6",
    "react-native": "0.43.4"
  }
}
```

As you can see, this project depends on `react version 16.0.0-alpha.6` and `react-native version 0.43.4`. In NPM, dependencies are separated into 2 groups: dependencies and devDependencies. `dependencies` are things that are required for the app the run. `devDependencies` are things that are only needed during development. For example, we might be using test frameworks and various build/validation tools to test/build/validate our code but at the end of the day, they're not needed to run the app.

You can install a dependency by running:

```bash
npm install --save --save-exact name_of_your_dependency
```

If you want to specify that this is a `devDependency`:

```bash
npm install --save --save-exact --dev name_of_your_dependency
```
