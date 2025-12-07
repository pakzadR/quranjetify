# quranjetify

Lightweight Quran reading app built with React Native + Expo (prebuilt to native).

## Features
- Dark theme with Arabic font support
- Surah list and per-surah verse reader
- Word-by-word Quran data (from `assets/data/quran.json`)

## Run locally (native build without Expo Go)

1. Install dependencies

```bash
cd quranjetify
npm install
```

2. (Optional) Install EAS CLI for managed builds

```bash
# Install globally (may require sudo)
sudo npm install -g eas-cli
```

3. Prebuild native projects (generates `android/` and `ios/`)

```bash
npx expo prebuild
```

4. Prerequisites for Android
- Android Studio and SDK (set `ANDROID_HOME` to your SDK path)
- Java JDK 17 (Zulu or AdoptOpenJDK)

Make sure environment variables are set (zsh example):

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```

5. Build & install on Android device/emulator

```bash
# Build and install a dev client / debug APK
npx expo run:android
```

## Notes
- The first native build downloads Gradle and Android components; it can take several minutes.
- If you prefer not to use SSH for Git pushes, switch remote to HTTPS:

```bash
git remote set-url origin https://github.com/<your-username>/quranjetify.git
```

## License
- MIT (adjust as needed)

Enjoy — open an issue or PR for changes.
