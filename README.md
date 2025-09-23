# MacLike Visual Studio Code Theme

![Version](https://img.shields.io/badge/version-1.0.0-blue)   ![Requires Custom UI Style](https://img.shields.io/badge/Requires-Custom%20UI%20Style-yellow)   [![Discord](https://img.shields.io/badge/Discord-WAM_Project-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/MyxaEQxjFT)   ![Supports Cursor IDE](https://img.shields.io/badge/Supports-Cursor_IDE-28a745)

A clean, minimalist Visual Studio Code theme aiming to create a more native, macOS-like experience.

---

## Preview
![MacLike Theme Preview](https://github.com/syryz/MacLike-VSCode/blob/main/assets/Preview.png?raw=true)

## Features

* **Native Window Controls**: macOS-style "traffic light" window controls (close, minimize, maximize)
* **Translucency**: Incorporates a subtle background blur (mica/acrylic effect) on various UI elements
* **Mac-style Sidebar**: Replicates a native macOS app look
* **Rounded Corners**: Consistent use of corner radii for buttons and popups

---
## Installation

[Custom UI Style Extension](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) is required.

**External Loading**: Quicker, but requires Internet connection and can break on updates (not recommended).
1.  Install Custom UI Style.
2.  Open your `settings.json` (can be opened by opening Command Palette `Ctrl/Cmd+Shift+P`)
3. Add the following to settings
```json
  "custom-ui-style.external.imports": [
    // main files
    "https://raw.githubusercontent.com/syryz/MacLike-VSCode/refs/heads/main/src/main.js",
    "https://raw.githubusercontent.com/syryz/MacLike-VSCode/refs/heads/main/src/css/maclike.css",
    // EXPERIMENTAL TABS - comment out if unwanted
    "https://raw.githubusercontent.com/syryz/MacLike-VSCode/refs/heads/main/src/css/tabs.css",
    // my personal changes - comment out if unwanted
    "https://raw.githubusercontent.com/syryz/MacLike-VSCode/refs/heads/main/src/css/tweaks.css",    
  ],
  "custom-ui-style.electron": {
    "frame": false,
    "backgroundMaterial": "acrylic",
    "titleBarStyle": "hidden",
    "backgroundColor": "#00000000",
    "vibrancy": "fullscreen-ui",
    "--window-button-size": "12px",
  },
  "custom-ui-style.stylesheet": {
    ":root": {
      "--main-app-bg_light": "#ffffff00",
      "--main-app-bg_dark": "#1e1e1e00",
    },
  },
```
4. Open Command Palette again and run `Custom UI Style: Reload`
5. It should automatically restart VSCode and apply changes; if not, fully restart VSCode

**Local Loading**: More customizable
1. Download the `MacLike.zip` file from the [latest release](https://github.com/syryz/MacLike-VSCode/releases/latest).
2. Extract the file and move it to a stable location.
3. Follow steps 1-3 of External Loading.
4. Under `"custom-ui-style.external.imports":` in settings.json, remove all pre-filled entries there.
5. Get the absolute file path to each file (ending in `.js` and `.css`), and convert it to the format ``file:///path/to/file`` (append a `file:///` to the start and change all backslashes to forward slashes)
6. Paste each file link to `"custom-ui-style.external.imports":`
	- On Windows, it should look something like this: 
```json
"custom-ui-style.external.imports": [
  "file:///C:/Users/john/Desktop/MacLike/main.js",
  ... 
],
```
7. Continue on with steps 4-5 of External Loading

*NOTE*: After every change to Custom UI Style, VSCode must be restarted through `Custom UI Style: Reload`
## Customization
- Basic (for External Loading):
	- Comment out unwanted CSS modules
	- Edit the CSS variables under `"custom-ui-style.stylesheet"` in settings.json
- Advanced
	- Follow Local Loading installation
	- Locally edit CSS files to your liking
### Enable Translucency
Choose option 1, option 2, or both!

**Option 1** (Recommended): Allows for granular control of Acrylic colors.
1. Install [DWMBlurGlass](https://github.com/Maplespe/DWMBlurGlass).
2. Configure Acrylic (remember to download symbol files, save, and install)
3. Restart VSCode if blur does not immediately appear.

**Option 2**
1. Install [MicaForEveryone](https://github.com/MicaForEveryone/MicaForEveryone).
2. Add new rule > Add process rule.
3. Enter `Code`.
4. Set the Backdrop Type to `Acrylic` and switch on `Extend frame into client area` and `Enable blur behind`.
5. Restart VSCode

---
## Planned Features
- [ ] **Extension**: Publish as VSCode extension
- [ ] **Animations**: Replicate macOS-style UI animations and transitions

### Known Issues
- Layout broken when `WorkBench > Activity Bar: Orientation` is set to `horizontal`

### Credits
- Inspiration from macOS apps
- Part of the WAM project

Created by *syrys*
