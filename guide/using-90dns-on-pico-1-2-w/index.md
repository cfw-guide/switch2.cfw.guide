---
title: "Using 90DNS on the Raspberry Pi Pico 1/2 W"
prev: false
next: false
---

# Using 90DNS on the Raspberry Pi Pico 1/2 W

A Raspberry Pi Pico 2 W can run 90DNS and create a private Wi-Fi network for your Switch 2. This is the safest setup as it prevents Nintendo and the rest of the internet from reaching the console.

The Pico has two roles:

- It provides a local Wi-Fi network that your computer and console can use to communicate.
- It answers connection checks and blocks Nintendo domains.

::: warning

Do not connect the Switch 2 to the internet through a normal Wi-Fi network or phone hotspot during this process. The network created by the Pico contains no internet forwarding.

:::

## What you need

- A Raspberry Pi Pico 1/2 W
- A USB data cable
- A computer
- A browser on your computer or phone

## Download the firmware

Download the firmware for your device below:
- **Pico 1 W:** [90dnspico-v0.1.0-pico-w.uf2](https://gitlab.com/a/90dns/-/releases/pico-v0.1.0/downloads/90dnspico-v0.1.0-pico-w.uf2)
- **Pico 2 W:** [90dnspico-v0.1.0-pico-2-w.uf2](https://gitlab.com/a/90dns/-/releases/pico-v0.1.0/downloads/90dnspico-v0.1.0-pico-2-w.uf2)

## Flash the Pico 2 W

1. Disconnect the Pico 2 W from USB.
1. Hold **BOOTSEL** on the Pico.
1. Connect the Pico to your computer with a USB data cable.
1. Release **BOOTSEL** after a removable drive named `RP2350` appears.
1. Copy `90dnspico-v0.1.0-pico-2-w.uf2` onto the drive.
1. Wait for the Pico to disconnect and reboot.

Flashing again preserves existing settings. To erase the settings completely, erase the flash and flash the UF2 again.

## Configure the own-network mode

On first setup, or after resetting the firmware, the Pico creates an open Wi-Fi network named `90DNSpico-init`.

1. On your computer or phone, connect to `90DNSpico-init`.
1. Open `http://192.168.90.1/` in a browser.
1. If the browser does not open the setup page automatically, use the IP address shown above.
1. Select **own network** mode.
1. Enter a network name, or keep the default name `90DNSpico`.
1. Enter a password of at least eight characters.
1. Save the settings.
1. Wait for the Pico to restart. The `90DNSpico-init` network will disappear.

The Pico will now host `90DNSpico` with:

- Pico IP address: `192.168.90.1`
- Switch DHCP addresses: `192.168.90.10` through `192.168.90.41`
- No internet forwarding

## Verify 90DNS

On your computer or phone connected to `90DNSpico`, open [http://90dns.test](http://90dns.test).

If the page says **"You are successfully connected to 90DNS. Happy hacking!"**, the Pico is blocking Nintendo's DNS requests correctly.

Do not continue if the 90DNS test page does not load. Recheck the Wi-Fi connection, IPv6 setting, and Pico setup.

## Connect the Switch 2

1. Connect the Switch 2 to `90DNSpico`.
1. Open **System Settings** -> **Internet** -> **Internet Settings**.
1. Select `90DNSpico` and open **Change Settings**.
1. Disable **IPv6 Connection**.
1. Set **DNS Settings** to **Automatic**.
1. Leave the IP address on automatic DHCP settings.
1. Save the settings.
1. Restart the console.

The Pico responds to Nintendo connection tests, and it deliberately answers Nintendo DNS requests with non-routable addresses. The own-network mode does not provide internet access.

To find the Switch 2 IP address, open the network settings and check the connected network's details. It will normally be between `192.168.90.10` and `192.168.90.41`.

## Connect your computer

Connect your computer to the same `90DNSpico` Wi-Fi network. The computer and Switch 2 can then communicate with each other directly without connecting to the internet.

In a terminal, use the Switch 2's displayed IP address whenever a command asks for `<console-ip>`.

For example:

```sh
python install.py 192.168.90.10
```

Replace `192.168.90.10` with the Switch 2's actual IP address.

## Open the Pico settings page

When connected to `90DNSpico`, open [http://90dnspico.local/](http://90dnspico.local/) or [http://192.168.90.1/](http://192.168.90.1/) to view the settings.

The settings page can show:

- The firmware status
- The current Wi-Fi settings
- The devices receiving DHCP leases
- Whether the Pico's own watchdog restarted it

For uninstalling 90DNS on the Pico, refer to the official [documentation](https://gitlab.com/a/90dns/-/tree/master/PicoW)

## LED status

| LED | Meaning |
| --- | --- |
| Slow blink | Waiting for first-time setup |
| Fast blink | Connecting or trying to reconnect to Wi-Fi |
| On | Pico is running normally |
| Fast flicker | A console just ran a connection test |
| Double blink | An update is available |
| Off, then flickering | BOOTSEL reset is in progress |
