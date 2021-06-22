# chat-app
A native app for mobile devices allowing users to chat but also share images, take pictures and share their location.

# Key Features
- Users can enter their name and choose a background colour for the chat screen.
- The chat room displays the conversation, an input field (to write a message) and an action button (allowing the user to share image, take a photo and share their geolocation)
- Data is stored on the client-side and available when the user is offline.

# Technologies
- React Native
- Expo
- Google Firestore Database
- Gifted Chat

# Getting Started
### What you need
- Node.js
- Expo Command Line Interface
```
npm install expo-cli --global
```
- Expo account
- To run the app on your mobile device: the Expo mobile app from your device's app store
- To run the app on your machine via a simulator/emulator: 
     - [Android Studio](https://docs.expo.io/workflow/android-studio-emulator/)
     - [iOS Simulator](https://docs.expo.io/workflow/ios-simulator/) (MacOS only)

# Setup
Start by downloading/cloning this repository
Install dependencies in the project's root directory
```
npm install
```
To start the project, run the following in your terminal:
```
expo start
```

### Running on Mobile Device
After starting the app, use your mobile to scan the QR code with the Expo app (Android) or the device's camera (iOS). Alternatively, click on 'Send link with email' in the Expo Developer Tools that opens automatically in the browser.

### Running on Simulator/Emulator
After starting the app, type 'a' in your CLI to run the app on an Android emulator, and 'i' to run it on an iOS simulator. Alternatively, click the appropriate option in the Expo Developer Tools in the browser.
