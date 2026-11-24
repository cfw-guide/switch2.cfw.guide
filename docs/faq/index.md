---
title: Frequently Asked Questions
---

# Frequently Asked Questions

## What is homebrew?

Homebrew is software made by independent developers rather than licensed by Nintendo. It can include utilities, games, and emulators.

## Which system version does this guide support?

The kaiHEN setup covered by this guide requires **23.0.1**. The exploit has not been ported to older versions, and this guide does not support newer versions. See [Get Started](/get-started/) before updating.

## Can I downgrade to 23.0.1?

No. If your console is on a newer system version, you cannot downgrade to use this guide.

## Do I need a game?

Yes. The CivSwitch route requires a physical **Civilization VII v1.0.0** cartridge, and the SmileBasic 4 route requires an installed copy of **SmileBasic 4 v4.4.9** or the compatible demo. See [Choosing Your Entrypoint](/choosing-your-entrypoint/) for availability.

## Do I need a microSD Express card?

No. A standard microSD card can store homebrew. Any system can use a FAT32 formatted card, but you can only use an exFAT formatted card if your console has received a system update that adds exFAT support.

## Can I connect to Nintendo's servers?

Connecting to Nintendo's servers will result in any homebrew entry points being blacklisted and prevent you from launching homebrew. We strongly recommend leaving your console offline or using an [isolated 90DNS Pico network](/using-90dns-on-pico-1-2-w/).

## Can this brick my console?

Yes. The filesystem exploit is experimental and carries a risk of permanent damage. Read the warnings and linked brick risk information in [Installing kaiHEN](/installing-kaihen-(civswitch)/) before proceeding.

## Do I need to run kaiHEN again after restarting?

Yes. kaiHEN remains active only until the console restarts. Due to the risk of damage, we recommend avoiding unnecessary restarts and only running kaiHEN when needed.

## How do I open the homebrew menu?

After starting kaiHEN, hold **R** while launching a native Switch 2 game. The first R-held launch records the game's signing policy and starts the game normally; close it and repeat to open hbmenu. See [Using kaiHEN](/using-kaihen/) for details.