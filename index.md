---
layout: home
title: "Switch 2 Guide"

hero:
  name: "Switch 2 Guide"
  text: "The complete guide to homebrew"
  actions:
    - theme: brand
      text: Get Started
      link: ./guide/get-started/
---

# What is homebrew?

Homebrew applications are unlicensed software made for closed systems such as the Nintendo Switch 2. These applications can include utilities, ports, custom games, emulators, and other software not officially supported by Nintendo.

Homebrew can be run for free on Nintendo Switch 2 consoles running firmware version **23.0.1**. You will require a compatible entry point and a microSD card. While the Switch 2 requires an "Express" microSD card to store games, homebrew applications can be stored on a standard microSD card.

# Compatible Entry Points

The following games are usable as an entry point to homebrew:

- **Civilization VII** (v1.0.0)
- **SmileBasic 4** (v4.4.9)
- **Seedsow Lullaby** (v1.1.0)

The demo versions of these games are also compatible.

# FunctionBlackList

If your console has connected to Nintendo's servers after 12th November 2026, you will no longer be able to use homebrew.

The FunctionBlackList is a feature that allows Nintendo to remotely block certain versions of games on the Nintendo Switch 2. This can prevent homebrew from being launched through affected entry points. By connecting your console to the internet, you risk losing access to these entrypoints, as they are blacklisted by Nintendo.

To avoid being affected by this, it is recommended to **keep your console disconnected from the internet** if you intend to use homebrew. DNS solutions such as [90DNS](https://gitlab.com/a/90dns) can block internet access, however some ISPs will hijack these DNS requests, rendering this method ineffective. Use another device to test whether 90DNS is working correctly before relying on it for your Switch 2 console. It may be worth creating an isolated network with an access point dedicated to your Switch 2 console.

# Risk of damage

Enabling homebrew requires the use of an "FS" (filesystem) exploit. While this exploit gives a greater level of access to the system, there is a small but very real risk of **permanently bricking** your system, as in, "as useful as a brick".

By using homebrew, you accept this risk. You and you alone are responsible for any damage that may occur to your console as a result of running homebrew.