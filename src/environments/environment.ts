// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://us-central1-firestore-chart-3380f.cloudfunctions.net',
  firebase: {
    apiKey: "AIzaSyAOzrzB8cLy7IO2hG3LDpLSATALcpVEjYg",
    authDomain: "firestore-chart-3380f.firebaseapp.com",
    databaseURL: "https://firestore-chart-3380f.firebaseio.com",
    projectId: "firestore-chart-3380f",
    storageBucket: "firestore-chart-3380f.appspot.com",
    messagingSenderId: "104205113941",
    appId: "1:104205113941:web:705769bf65c3b1138cd2dc"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
