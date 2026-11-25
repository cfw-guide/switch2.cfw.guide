---
title: "Installing the CivSwitch Trigger"
prev: false
next: false
---

# Installing the CivSwitch Trigger

The initial USB payload is only active while the Remote JS Loader session is running. Installing the trigger makes the loader start automatically after reboot.

You will need:

- The CivSwitch Remote JS Loader running on the Switch 2.
- A computer connected to the same network as the console.
    - Ensure you are using an [isolated network](/using-90dns-on-pico-w/).
- Python 3 and Git.

## Install the trigger

On your computer, clone the CivSwitch repository and install the required dependencies:

```sh
git clone https://github.com/Gezine/CivSwitch.git
cd CivSwitch/installer-creator
npm install
```

Run:

```sh
python install.py <console-ip>
```

Replace `<console-ip>` with the console's IP address. Do not include angle brackets.

The script uploads and installs the default Remote JS Loader payload. Wait until it prints `INSTALL DONE`.

::: warning

Do not close or interrupt `install.py` until installation completes.

:::

## Verify the trigger

1. Reboot the console.
1. Launch Civilization VII.
1. From the main menu, select **Load Game**.
1. The boot trigger should start the Remote JS Loader automatically.

The trigger runs whenever you use **Load Game** after reboot.