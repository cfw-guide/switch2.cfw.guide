---
title: "Get Started"
next: false
sidebar: false
---

<script setup>
import RiskAcknowledgement from '../../.vitepress/theme/components/RiskAcknowledgement.vue'
</script>

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

Other microcontrollers such as an ESP32 can also be used, however this guide only focuses on the Pico W and Pico 2 W.

<RiskAcknowledgement />

