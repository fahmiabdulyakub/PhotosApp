# How to start app locally

## Environment set for React Native

Official doc for environment set-up: [https://reactnative.cn/docs/environment-setup](https://reactnative.cn/docs/environment-setup)

**Supported node version is >= 16.0.0**

## Install JavaScript dependencies

```bash
$ yarn install
```

## Install IOS dependencies

<br/>

### **Install the pod files**

<br/>

```bash
$ yarn pod
# If you get the error
# "error: SDK "iphoneos" cannot be located"
# just run the command
sudo xcode-select --switch /Applications/Xcode.app
# to make `pod install` succeed.
```

### **Run IOS (cocoapods version 1.12.1)**

<br/>

```bash
$ yarn ios
# If you build fail, open ios project with xcode, check left tab "Buildtime"
# ensure there is no buidtime issues
```

## **Run Android**

<br />

```bash
$ yarn android
```
## **Screen Record**

https://github.com/fahmiabdulyakub/Nanovest/assets/47190955/dd48c926-0ad5-4319-9d47-8323eaaf9c04

<br />

