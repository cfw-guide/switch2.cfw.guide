---
title: Preparing SmileBasic 4
prev: false
next: false
---

# Preparing SmileBasic 4

SmileBasic 4 can be used as an alternate entry point to kaiHEN. This section covers flashing a Raspberry Pi Pico so it can enter the SmileBasic exploit payload.

You will need:

- A compatible Raspberry Pi Pico 1 (W) or Pico 2 (W).
- A USB cable that supports data.
- A PC running Windows, macOS, or Linux.
- SmileBasic 4 v4.4.9 or the compatible demo version.
- More than 20 MiB of free space in a SmileBasic save.

## Download the firmware

Choose the UF2 firmware that matches both your Pico board and your console's input language:

| Board | English (US) | Japanese |
|------|--------------|----------|
| Raspberry Pi Pico 1 / RP2040 | [sm4-pico1.uf2](/files/sm4-pico1.uf2) | [sm4-pico1-jis.uf2](/files/sm4-pico1-jis.uf2) |
| Raspberry Pi Pico 1 W / RP2040 | [sm4-pico1_w.uf2](/files/sm4-pico1_w.uf2) | [sm4-pico1_w-jis.uf2](/files/sm4-pico1_w-jis.uf2) |
| Raspberry Pi Pico 2 / RP2350 | [sm4-pico2.uf2](/files/sm4-pico2.uf2) | [sm4-pico2-jis.uf2](/files/sm4-pico2-jis.uf2) |
| Raspberry Pi Pico 2 W / RP2350 | [sm4-pico2_w.uf2](/files/sm4-pico2_w.uf2) | [sm4-pico2_w-jis.uf2](/files/sm4-pico2_w-jis.uf2) |

Do not use JIS firmware unless the Switch is configured for a JIS keyboard layout.

## Flash the Pico

1. Disconnect the Pico from all devices.
2. Hold the Pico's **BOOTSEL** button.
3. Connect the Pico to the PC with a USB data cable while continuing to hold **BOOTSEL**.
4. Release **BOOTSEL** once a removable drive named `RPI-RP2` or `RP2350` appears.
5. Copy the selected `.uf2` file onto that drive.
6. The drive will disconnect and the Pico will reboot automatically.

The Pico is now ready to act as a USB keyboard and enter the SmileBasic payload.

## Configure the console

Before using the payload:

1. Set **System Language** to **English (US)**.
2. In **System Settings → Controllers & Accessories**, set **Change the USB Keyboard Layout** to **English (US)**.
3. Keep the console disconnected from Nintendo's servers.
4. Open SmileBasic 4.

These settings can be restored after setup.

## Enter the payload

1. Press **Make a Program** in SmileBasic 4.
1. Press **X** to enter edit mode.
1. In docked mode, connect the flashed Pico to the console.
1. Wait for the Pico to enter the payload automatically.
1. Once it's finished, press **-** to open the program menu.
1. Press **Simple Save** and enter "NS2" as the filename.
    - If you're using the demo, you have to use this code to save the file instead:
    ```
    PRGEDIT 0:C$="":FOR I=0 TO PRGSIZE(0)-1:C$=C$+PRGGET$() :NEXT:SAVEV "TXT:NS2",C$
    ```
1. Exit to the HOME menu.

Do not unplug the Pico or interact with the editor while it is typing.

::: warning

Acquisition is timing-sensitive and can fail or crash a run. If it fails, close and reopen SmileBasic and retry. Restart the console if it cannot be closed normally.

:::