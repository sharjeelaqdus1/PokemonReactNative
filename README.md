# Pokemon App

Welcome to the Pokemon App! This project is a React Native application that allows users to browse a list of Pokemon and view their details.

## Features

- View a list of Pokemon
- View details of each Pokemon

## Key Concepts Used

- **React Navigation**: Used for navigation between screens in the application.
- **Redux Toolkit**: Utilized for state management in the application.
- **Redux Persist**: Used for persisting the Redux store across app restarts.
- **Custom Hooks**: Implemented custom hooks for managing state and logic.
- **React Native Query**: Utilized for data fetching and caching in the application.

## Project Structure

The project follows a modular structure to ensure code separation, clean code, readability, and maintainability. Here's an overview of the directory structure:

- **src/**: Main source code directory
  - **common/**: Common components used throughout the application
  - **navigation/**: React Navigation stacks
  - **screens/**: Screens of the application
  - **constants/**: Constants used across the application
  - **helpers/**: Common helper functions
  - **types/**: Common TypeScript types
  - **hooks/**: Custom hooks

# Preview
![Output](https://github.com/sharjeelaqdus1/PokemonReactNative/assets/61380326/5fa13ade-cfa4-41d6-b3bf-da28aae5565b)

# Changing API Base URL
You can change the API base URL by running the following command:
```bash
npm run start_url your-api-base-url.com
```
or you can create .env file at root and add the API_URL env variable

# Test Coverage Results
<img width="622" alt="TestCoverage" src="https://github.com/sharjeelaqdus1/PokemonReactNative/assets/61380326/382a431f-2706-41ef-b4a6-8b22a3e516e6">

You can check unit, integration and snapshot test coverage :
```bash
npm run test:coverage
```

# Basic Intsrutions

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?


- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
