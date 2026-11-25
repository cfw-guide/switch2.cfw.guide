---
title: Updating to 23.0.1
---

# Updating to 23.0.1

::: tip

Always keep your console disconnected from Nintendo's servers to avoid being blacklisted and losing the ability to use homebrew.

:::

While 23.0.1 is not the latest firmware version, Nintendo offers a feature called "Match Version with Local Users" that is intended to allow users to update their game to the same version as another console nearby. Luckily for us, it also works for updating the system firmware itself.

This does not require an internet connection. It is worth noting that neither a blacklist status nor exFAT license will be transferred over.

::: warning

Remember that it is **not required** to update to 23.0.1. The exploit used in 23.0.1 still exists on older firmware versions and may be ported to older versions in time. Furthermore, **more powerful exploits** may be present in older firmware versions, which you could miss out on if you update.

:::

## Requirements

- A recipient console running 23.0.0 or below.
- A donor console running 23.0.1.
- A game cartridge or a game installed on both the recipient and donor consoles.
  - The donor console must have a game update that requires a newer system version than the one installed on the recipient console.

This requirement can be difficult to meet. For example, suppose the recipient console is on 22.5.0 and the donor console is on 23.0.1 with Ocarina of Time v1.1.1 installed. Because that game version requires a newer firmware than 22.5.0, the recipient will be prompted to update to 23.0.1 during the local match.

### Known Compatible Game Versions

| Title | Version |
|-------|---------|
| Ocarina of Time | 1.1.1 |
| Mario Kart World | 1.8.0 |
| Minecraft | 1.26.62 |

## Updating via Local Match

Complete the following steps on both consoles:

1. Power on the console.
1. Navigate to the HOME menu.
1. Highlight the game you want to use (do not launch it).
1. Press the **+** or **-** button.
1. Select **Software Update** -> **Match Version with Local Users**.
1. Select **Next**.

Now on individual consoles:

1. On the donor console, select **Create Group**.
1. On the recipient console, select **Join Group**.
1. Once connected, select **Start Communication** on the donor console.

The consoles will now update the recipient console to match the system firmware version of the donor console.