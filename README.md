# Todo List using React Native, Expo and Redux
Sample project presenting a react native App for iOS and Android using Redux arquitecture.

## Version

0.1

## Build and Runtime Requirements
+ Xcode 8.0 or later
+ iOS 10.0 or later
+ OS X v10.11 or later


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

First clone the Repo:

```
$ git clone https://github.com/noelcperez/reactnativewithfluxtodoapp.git
$ cd reactnativewithfluxtodoapp
```

### Available scrips

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

And follow expo instructions to run the App on iOS/Android simulators or devices

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Sharing and Deployment

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

```
$ npm i -g exp
$ exp publish
```


## Built With

* [React Native](https://facebook.github.io/react-native/) - React Native Documentation
* [Redux](https://redux.js.org/) - Redux Documentation
* [Firebase](https://firebase.google.com/) - Google Firebase
* [Visual Studio Code](https://code.visualstudio.com/) - IDE
* [Native Base](https://docs.nativebase.io) - Component Suite
* [Expo](https://docs.expo.io/versions/latest/index.htmlo) - Development Environment
* [Create React Native App](https://github.com/react-community/create-react-native-app) - Bootstrapper


## Author

**Noel Perez**
* GitHub (https://github.com/noelcperez)
* LinkedIn (https://www.linkedin.com/in/noelcarlosperezdieguez/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Dan Abramov's awesome videos about redux (https://egghead.io/courses/getting-started-with-redux)
* Building the Facebook F8 App (http://makeitopen.com/)
* Many other sources that are impossible to mention here.
