---
title: Using kaiHEN
---

# Using kaiHEN

kaiHEN allows you to open the homebrew menu and launch homebrew applications while it is running.

## Start kaiHEN

kaiHEN lasts until the console is restarted.

1. Launch **Civilization VII**.
2. From the main menu, select **Load Game**.
3. Wait for the persisted payload to start kaiHEN.
4. Close Civilization VII normally.

If the payload does not run, fully restart the console and try again.

## Open the homebrew launcher

1. Hold **R** while launching any native Switch 2 game.
2. On the first R-held launch, kaiHEN only records the game's signing policy. The game should start normally.
3. Close the game, then hold **R** while launching the game again.
4. The second R-held launch should open hbmenu.

If hbmenu does not open, close the game and try another R-held launch. Keep Civilization VII payload active before the R-held launch.

## Launch homebrew

Place Switch 2 homebrew applications in the `/switch/` folder on the microSD card. Each application needs a `.nro` file.

::: danger

Malicious homebrew applications can **permanently damage** your console. Only download and run homebrew from trusted sources.

:::

In hbmenu:

1. Navigate to the **switch** folder.
2. Select a homebrew application.
3. Press **A** to launch it.

You can also use OunceShell from `/switch/ounceshell/ounceshell.nro` to browse and manage files.

## Using OunceShell

OunceShell is a file manager for the Switch 2 that allows you to browse and manage files on the microSD card. You can also create an FTP server to transfer files between the console and a PC.

## Restart or exit

Closing an application normally returns you to hbmenu or the game environment. Reopen hbmenu with the R-held launch method while kaiHEN is still running.

When the console restarts, load the exploit again to activate kaiHEN and regain homebrew access.
