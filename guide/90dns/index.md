---
title: "Using 90DNS"
---

# Using 90DNS

::: warning

90DNS is optional and does not replace [disconnecting from the internet](/guide/disconnecting-from-internet/) and using an isolated network. Some ISPs hijack DNS requests, which can make 90DNS ineffective.

:::

90DNS is a custom <Definition term="DNS">A DNS (Domain Name System) translates human-readable domain names into IP addresses.</Definition> service that redirects Nintendo server requests to a non-existent address.

## Testing 90DNS

Before configuring the console, test the network with another device.

1. Connect your secondary device to the network you intend to use with your Nintendo Switch 2.
1. Open your secondary device's network settings.
1. Find the **DNS settings** option.
1. Set the primary and secondary DNS addresses listed below in <Definition term="order of proximity">For example, use the French server if you live in Europe.</Definition>:
    - `207.246.121.77` (USA)
    - `163.172.141.219` (France)
1. Save the DNS settings and reconnect to the network.
1. Open [http://90dns.test](http://90dns.test) in a browser.

If the page says "You are successfully connected to 90DNS. Happy hacking!", the DNS blocking is working on that network.

If the page does not load correctly, do not use 90DNS on the console. Use an isolated local network instead.

## Entering network settings

::: warning

If you are using **Airplane Mode** to block Wi-Fi access, make sure that all registered networks are either powered off or out of range.

:::

When connecting to a new network, enter an incorrect password before configuring DNS. This prevents the console from connecting to the internet before the settings are applied.

1. On your Nintendo Switch 2, go to **System Settings** -> **Internet** -> **Internet Settings**.
1. Remove or edit any existing network connections, including Wired.
    - To edit an existing network, select it and choose **Change Settings**, then continue to [Configuring DNS and IPv6 settings](#configuring-dns-and-ipv6-settings).
1. Select the network you want to use.
    - For a network without a password, choose **Manual Setup** and enter the network name, then continue to [Configuring DNS and IPv6 settings](#configuring-dns-and-ipv6-settings).
1. Enter an incorrect password at least 8 characters long and press **OK**.
1. After the connection fails, press **OK** to close the error message and **Close** to dismiss the error details.
1. When asked to re-enter the password, choose **View Settings**.

## Configuring DNS and IPv6 settings

1. Disable **IPv6 Connection**.
1. Change **DNS Settings** to **Manual**.
1. Enter the primary and secondary DNS addresses in <Definition term="order of proximity">For example, use the French server if you live in Europe.</Definition>:
    - `207.246.121.77` (USA)
    - `163.172.141.219` (France)
1. Double-check that IPv6 is disabled.
1. Save the settings, but **do not** connect to the network yet.
1. Restart the console to refresh the DNS cache.

Only connect to the network after verification and use it in combination with an isolated network.
