---
title: "Get Started"
next: false
sidebar: false
---

# Get Started

The homebrew scene for the Nintendo Switch 2 is still very much in its **infancy**. The exploits available are only <Definition term="userland">Userland applications do not have full system access, but can still execute code within their limited environment.</Definition> exploits, and require a vulnerable game as an entry point.

## Required Reading

These exploits are unstable and there have been multiple reports of these exploits <Definition term="bricking">Bricking refers to rendering a device completely unusable, as if it were a "brick".</Definition> the console. At this time, there is no way to create or restore a full system backup, meaning that there is **no chance of recovery**. It may be worth holding out and waiting for more stable and reliable methods to become available.

Nintendo are also vigilant at blocking these vulnerable games from being used. Even if you haven't updated your console, Nintendo can remotely block games from being launched over the internet, including _all_ of the currently released entry points. It is therefore crucial to keep your console **disconnected** from Nintendo's servers at all times.

## Requirements

The setup for homebrew is not simple. You will need the knowledge of how to use microcontroller boards, and command line tools such as Python. You will also need the following:

- A Nintendo Switch 2 running firmware 23.0.1 or below
- A vulnerable game required for the userland exploit
- A computer with [Python](https://www.python.org/) installed
- A microSD card for the console
- A microcontroller board such as the [Raspberry Pi Pico W](https://www.raspberrypi.com/products/raspberry-pi-pico/) or the [Raspberry Pi Pico 2 W](https://www.raspberrypi.com/products/raspberry-pi-pico-2/)

<FaqDropdown question="Do I need a Pi Pico?">

The Raspberry Pi Pico W was chosen for its low price and ease of use, however other microcontrollers can also be used for this purpose. Several users have managed to successfully set up the exploit using alternative boards such as the ESP32:
- [civswitch-esp32-s3](https://github.com/flex36ty/civswitch-esp32-s3) for typing the payload
- [CivSwitch-SerialBridge](https://github.com/jackspence7/CivSwitch-SerialBridge) for communicating with the console

The use of a microcontroller is not strictly required. At a very basic level, all that the microcontroller does is act as an automated USB keyboard, and create a local network. It is not impossible, however tedious, to simply connect the console to a keyboard and type out the payload yourself.

There are also apps such as [mac2jb](https://github.com/cpypwn/mac2jb) that will let your Mac emulate a keyboard and act in place of the microcontroller. We do not recommend using this however, as it disabling macOS's system integrity.

If you own a Nintendo Switch 1 and a Linux device, you can also send a CivSwitch payload directly to the console with [CivSwitchLDN](https://github.com/ItsNerisma/CivSwitchLDN).

The most important part is that you have a reliable way to communicate with the console over Wi-Fi without the console connecting to the internet. To do this safely, we must create a local network that tricks the console into thinking that it can connect to the internet, by faking some Nintendo server responses. Software exists for other devices to achieve this:
- [SwitchNest](https://github.com/blueshockz47/SwitchNest-Hotspot) for the Steam Deck

</FaqDropdown>

<RiskAcknowledgement />

