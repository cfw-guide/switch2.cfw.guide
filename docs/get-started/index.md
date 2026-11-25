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

<FaqDropdown question="Do I need a Pi Pico W?">

::: warning

The projects presented here have not been formally verified by the author of this guide. This section is here for completeness only and should not be taken as guaranteed to work.

:::

The Raspberry Pi Pico W was chosen for its low price and ease of use, however other microcontrollers and devices can be used instead. The microcontrollers are used for two main purposes:

#### Payload delivery

The microcontroller is responsible for delivering the payload to the console. This involves emulating a USB keyboard to input the necessary commands automatically.

There are several other devices that can be used for this:
- [civswitch-esp32-s3](https://github.com/flex36ty/civswitch-esp32-s3) for ESP32-S3
- [CivSwitchLDN](https://github.com/ItsNerisma/CivSwitchLDN) for Linux devices
    - Requires `prod.keys` from a hacked Switch 1
- [mac2jb](https://github.com/cpypwn/mac2jb) for devices running macOS
    - Not recommended as it requires disabling system integrity protection (SIP)
- Typing in manually with a USB keyboard (This can take a very long time)

#### Network setup

The microcontroller also hosts a local network that allows your computer to communicate with the console without it connecting to the internet. It involves setting up an access point that will emulate a Nintendo server, tricking the console's "Connection Test" into succeeding.

This section is very important to configure correctly, as an incorrect setup could lead to the console connecting to the internet and losing the ability to run homebrew.

There are several other ways to set this up:
- [90DNS Pico-less Selfhost](https://gitlab.com/a/90dns/-/blob/master/SELFHOST.md) (Advanced)
- [SwitchNest-Hotspot](https://github.com/blueshockz47/SwitchNest-Hotspot) for the Steam Deck.
- [CivSwitch-SerialBridge](https://github.com/jackspence7/CivSwitch-SerialBridge) for ESP32
    - This is a slightly different method, as the computer uses a serial connection to communicate instead.

</FaqDropdown>

<RiskAcknowledgement />

