---
title: Installing kaiHEN (SmileBasic 4)
prev: false
next: false
---

# Installing kaiHEN (SmileBasic 4)

In this step we will use the ns2jb launcher to leverage SmileBasic 4 to acquire a filesystem exploit on the Switch 2. From there, we will launch kaiHEN. This process must be executed each time the console is restarted.

This process is experimental and can permanently damage your console. Do not reboot or close SmileBasic while the exploit is running.

::: danger

This process can permanently damage your console. If you are not comfortable with this, you should wait for a more mature release.

- Use only firmware **23.0.1**.
- The exploit is timing-sensitive and may fail several times.
- Keep the game on internal console storage, not on the microSD card.

:::

## Requirements

- A Switch 2 running firmware **23.0.1**
- SmileBasic 4 v4.4.9 or demo version
- The saved `NS2` SmileBasic program prepared in [Preparing SmileBasic 4](/guide/preparing-smilebasic/)
- A FAT32 or exFAT microSD card inserted in the console
- [Node.js 22](https://nodejs.org/) or later and [npm](https://www.npmjs.com) on your computer

The microSD card does not need to contain the files from the kaiHEN release. The `hen.cjs` launcher reads those files directly from the PC and stages its required files through the filesystem exploit.

## Prepare the PC

1. Download the [ns2jb source archive](https://gitlab.com/kurumuz/ns2jb/-/archive/main/ns2jb-main.zip) 
1. Extract the `.zip` file.
1. Open the extracted `ns2jb-main` folder in a terminal.
1. Download the latest [kaiHEN release](https://github.com/ouncebrew/kaihen/releases/latest)
1. Extract the downloaded kaiHEN release to a folder on your PC.

## Start kaiHEN

1. Insert the microSD card into the console if it is not already inserted.
1. Restart the console.
1. Open SmileBasic 4 and press "Make a Program"
1. Ensure you are in **Direct mode**.
    - This is the default mode when creating a new program in SmileBasic.
1. Leave SmileBasic open and return to the PC.
1. Connect your computer to the same network as the Switch 2.
    - Ensure you are using an [isolated network](/guide/using-90dns-on-pico-1-2-w/)
1. Find your computer's local IP address.
    - **Windows**: Open Command Prompt and run `ipconfig`. Look for the `IPv4 Address` under your active network adapter.
    - **macOS**: Open Terminal and run `ifconfig`. Look for the `inet` address under your active network interface (usually `en0` or `en1`).
    - **Linux**: Open Terminal and run `ip addr show`. Look for the `inet` address under your active network interface (usually `eth0` or `wlan0`).
1. In the ns2jb-main folder, run the launcher with your local IP address appended:
    ```sh
    node hen.cjs --dir /path/to/extracted/kaihen <ip_address>
    ```
    - Replace `/path/to/extracted/kaihen` with the extracted kaiHEN directory.
1. Note down the `V=START(...)` command printed by the launcher.
1. Press **-** in SmileBasic to open the keyboard, or connect a USB keyboard.
1. Enter the following commands in SmileBasic:
    ```basic
    LOAD "TXT:NS2"
    RUN
    REMOVE NSR,&H60000000,&H3FFFFFFF
    ```
1. You should now see the `Out of memory` message after `REMOVE`.
1. Enter the `V=START(...)` command printed by the launcher.
    - If SmileBasic reports `Wrong number of arguments`, use the second `V=START(...)` command printed by the launcher. It will contain the port and four IP numbers, followed by `,0,0,0,0`. Do not repeat `RUN` or `REMOVE`; enter only the replacement `START` command while the PC is still waiting.
1. Keep SmileBasic open and keep your computer awake until the launcher prints:
    ```text
    HEN launch completed!
    HEN PID ...
    ```

If the acquisition fails before HEN launches, keep the `runs` directory for diagnostics, close and reopen SmileBasic, and retry on the same console boot. Enter `REMOVE` only once per application process. Restart the console if the application or console cannot be closed normally.