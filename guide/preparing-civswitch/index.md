---
title: Preparing CivSwitch
prev: false
next: false
---

# Preparing CivSwitch

CivSwitch uses the Civilization VII v1.0.0 game cartridge to gain <Definition term="userland">Userland applications do not have full system access, but can still execute code within their limited environment.</Definition> code execution on the Nintendo Switch 2.

This section covers preparing and flashing a Raspberry Pi Pico so it can send the CivSwitch payload. You will need:

- A compatible Raspberry Pi Pico 1 (W) or Pico 2 (W).
- A USB cable that supports data.
- A PC running Windows, macOS, or Linux.
- A Civilization VII v1.0.0 game cartridge.

## Download the firmware

Download the latest [CivSwitch release](https://github.com/emiyl/CivSwitch/releases/latest) and extract the ZIP file.

Choose the UF2 firmware that matches both your Pico board and your console's input language:

| Board | English (US) | Japanese |
|------|--------------|----------|
| Raspberry Pi Pico 1 / RP2040 | `civ7-pico1.uf2` | `civ7-pico1-jis.uf2` |
| Raspberry Pi Pico 1 W / RP2040 | `civ7-pico1_w.uf2` | `civ7-pico1-jis.uf2` |
| Raspberry Pi Pico 2 / RP2350 | `civ7-pico2.uf2` | `civ7-pico2-jis.uf2` |
| Raspberry Pi Pico 2 W / RP2350 | `civ7-pico2_w.uf2` | `civ7-pico2-jis.uf2` |

Do not use the JIS firmware unless the Switch is configured for a JIS keyboard layout.

## Flash the Pico

1. Disconnect the Pico from all devices.
2. Hold the Pico's **BOOTSEL** button.
3. Connect the Pico to the PC with a USB data cable while continuing to hold **BOOTSEL**.
4. Release **BOOTSEL** once a removable drive named `RPI-RP2` or `RP2350` appears.
5. Copy the selected `.uf2` file onto that drive.
6. The drive will disconnect and the Pico will reboot automatically.

The Pico is now ready to act as both a USB keyboard and controller macro.

## Configure the console

Before using CivSwitch:

1. Set **System Language** to **English (US)**.
2. In **System Settings → Controllers & Accessories**, set **Change the USB Keyboard Layout** to **English (US)**.
3. Do not connect the console to any network.
4. Insert the Civilization VII v1.0.0 cartridge and launch the game.

The language and keyboard layout can be restored after the boot-persistent trigger has been installed.

## Send the initial payload

1. From the Civilization VII main menu, select **Multiplayer**.
2. Select **Wireless**.
3. Create a lobby and host it.
4. Open the lobby **Chat** screen and place the focus in the chat text box.
5. In docked mode, connect the flashed Pico to the console.
6. Wait for the Pico's LED to illuminate. The macro starts shortly after boot and types the payload automatically.

The payload takes about 20 minutes to type. Do not unplug the Pico or interact with the chat field while it is running.

Once it finishes, the Remote JS Loader should appear on the console and listen on TCP port `9026`.

We will now leave the console with the loader running while we set up an isolated network so the PC and console can communicate safely.