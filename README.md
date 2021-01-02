# react-native-monorepo
ReactJS &amp; React Native Monorepo

<a href="https://ibb.co/zfvZ8CR"><img src="https://i.ibb.co/2K4d8Rt/tn-ZEOjm-Cx-D.png" alt="tn-ZEOjm-Cx-D" border="0"></a>

## Installation
```
git clone https://github.com/heriawanfx/react-native-monorepo.git <project_folder>
cd <project_folder>
yarn
```
To start WebApp
```
yarn web
```
To start Native android app
```
yarn android
```
To start Native ios App
```
yarn ios
```
Example to import shared component or other element from @main/common
```
import WelcomeText from "@main/common/src/WelcomeText";
```
if you use statement like this:
```
import WelcomeText from "../../common/src/WelcomeText";
```
it will throw webpack scooped error
