---
title: "Disconnecting from Internet"
---

# Disconnecting from Internet

To avoid being blacklisted by Nintendo and losing access to homebrew, it is very important to keep your console disconnected from Nintendo's online services at all times. This is due to Nintendo's "FunctionBlackList".

If the console has connected to Nintendo's servers after **12th November 2026**, it will lose the ability to use homebrew.

The safest way to ensure the console remains disconnected is to use a network setup that is completely isolated from the internet. This guide will cover how to use a **Raspberry Pi Pico 1 or 2 W** to achieve this.

::: warning

Do not connect the console to normal Wi-Fi, an internet-enabled phone hotspot, or any network that has not been verified to isolate Nintendo traffic.

:::

## Instructions

1. Ensure that any networks that the console may automatically connect to are powered off or out of range.
1. Power on your console
1. Disable Airplane Mode if it is enabled.
1. Open **System Settings** -> **Internet** -> **Internet Settings**.
1. Under **Registered Networks**, select each network and choose **Clear Settings** to remove it from the console.
1. Choose **Delete** to confirm and remove the saved network
1. Repeat this process for all registered networks.

Later in the guide, we will show how to create an isolated network to communicate with the console without connecting to the internet.