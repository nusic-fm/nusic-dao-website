// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { fetchAndActivate, getRemoteConfig } from "firebase/remote-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE,
  appId: process.env.REACT_APP_FB_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const remoteConfig = getRemoteConfig(app);

remoteConfig.defaultConfig = {
  title: "ENCRYPTED MUSIC COPYRIGHT",
  subTitle:
    "A multidimensional approach to audio encoding and metadata enciphering for the age of AI, enabling supercharged, superfan engagement",
  headerOne: "Torrent Monetization",
  headerTwo: "Apps & Games",
  headerThree: "AI Training Data",
  contentOne:
    "Of the millions of music files available on Torrent protocols, many are never monetized.The Tributary extension introduces monetization to Torrent networks, including full attribution data.Designed around musical standards that track consumption for settlement on the internet of value.",
  subContentOne:
    "The next generation of torrenting, micropayment integration ensures rights holders are compensated when their music is torrented.",
  contentTwo:
    "Music is customizable, just like a photo or video edit, anyone now has the power to create a custom remix.Deepening fan engagement, and unlocking powerful new economic models around music creativity.Serve music upstream to an ecosystem enabling collaboration between artists and fans alike.",
  subContentTwo:
    "Customizable musical experiences that facilitate fan engagement through multi-channel audio encoding for realtime interaction.",
  contentThree:
    "AI is training on publicly available music! It’s no secret that AI requires masses of data to create outputs.Predictably enough, this has led to some blockbuster lawsuits, however it doesn’t have to be this way.By coupling music metadata with source audio, new distribution rails enable consensual AI training.",
  subContentThree:
    "Machine-readable musical metadata for AI model training, including attribution, analytics and encrypted instant remittence engine.",
};
(async () => await fetchAndActivate(remoteConfig))();
