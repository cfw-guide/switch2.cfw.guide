---
title: Installing kaiHEN (CivSwitch)
prev: false
next: false
---

# Installing kaiHEN (CivSwitch)

CivSwitchFS-kaiHEN extends the previous CivSwitch loader with more capabilities, including filesystem access, and integrates with kaiHEN for homebrew support. It is semi-untethered, meaning that it can be activated without a computer and will remain active until the console is restarted.

This process is experimental and can permanently damage the console. It is especially important not to reboot or close Civilization VII while the payload is running.

::: danger

Before continuing, read the [brick risk information](https://github.com/s8n/CivSwitchFS-kaiHEN/blob/slop/BRICK_RISKS.md). If you are not comfortable with this, you should wait for a more mature release.

- Multiple people have reported that this exploit has caused their console to brick.
- Never reboot or close Civilization VII while the payload is running.
- If a log line begins with `STATE IS UNSAFE`, hard-reboot by holding the power button for 15 seconds.
- If the log reports `STATE IS UNKNOWN`, a crash, or no result, assume the worst and hard-reboot before retrying.
- Use this only on firmware 23.0.1. The upstream project has only tested exFAT firmware; FAT32 should work but is less tested.

:::

## Requirements

- A Switch 2 running firmware **23.0.1**
- Civilization VII v1.0.0
- The [CivSwitch Remote JS Loader](https://github.com/Gezine/CivSwitch) running on the console
- [Node.js 20](https://nodejs.org/) or later and [npm](https://www.npmjs.com) on the PC
- A FAT32 or exFAT microSD card
    - A system update is required for exFAT support. If you have not completed the update, you must use FAT32.
    
## Prepare the PC

Clone the `slop` branch, because the repository's active development branch is not `main`:

```sh
git clone --branch slop --single-branch https://github.com/s8n/CivSwitchFS-kaiHEN.git
cd CivSwitchFS-kaiHEN
npm install
```

Keep this repository folder available and update it whenever the project is updated.

## Prepare the microSD card

1. Insert the microSD card into the PC.
1. Format the microSD card as FAT32 or exFAT, depending on your system update status.
1. Download the latest `.zip` file from [CivSwitchFS-kaiHEN](https://github.com/s8n/CivSwitchFS-kaiHEN/releases/latest) 

Extract the ZIP contents onto the root of the microSD card and safely eject it. The card should contain:

```text
/hbmenu.nro
/kaihen/bin/bootstrap.bin
/kaihen/bin/ro/main
/kaihen/bin/hen/main
/kaihen/bin/game/main
/switch/ounceshell/ounceshell.nro
```

Insert the microSD card into the console before starting.

## Start the persistence installer

1. Open Civilization VII.
2. From the main menu, select **Load Game**.
3. Wait until the CivSwitch console reports `Awaiting payload`.
4. Find the Switch 2's current IP address in the console's network settings.
5. On the PC, run this command from the cloned repository folder:

```sh
npm run persist:chain -- <console-ip>
```

Replace `<console-ip>` with the console's IP address. Do not include angle brackets.

Wait for the save setup to finish. It normally takes about one minute.

::: warning

Do not close Civilization VII, start another application, or reboot the console during installation. If the console crashes or the installer hangs, follow the [brick risk instructions](https://github.com/s8n/CivSwitchFS-kaiHEN/blob/slop/BRICK_RISKS.md) before retrying.

:::

Once the installer succeeds, close Civilization VII normally. Every later start of Civilization VII -> **Load Game** will acquire filesystem privileges and run kaiHEN automatically.

## Launch kaiHEN

1. Start Civilization VII and select **Load Game**.
1. Wait for the payload to finish and kaiHEN to run.
    - If it fails to run, reboot your console and try again.
1. Close Civilization VII normally.

Now our homebrew environment should be installed, and you can start using kaiHEN to run homebrew applications on your Switch 2.