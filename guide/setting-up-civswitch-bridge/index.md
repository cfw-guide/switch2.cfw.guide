---
title: "Using the CivSwitch Bridge"
---

# Using the CivSwitch Bridge

A serial bridge creates an isolated Wi-Fi network for the Switch 2 and allows a PC to send payloads without placing the console on its normal internet connection.

This setup provides no internet forwarding. The bridge communicates with the Switch 2 over Wi-Fi and communicates with the PC by USB serial.

You will need:

- Python 3 installed on a PC.
- The `pyserial` Python package.
- CivSwitch configured on the Switch 2, with its Remote JS Loader running on port `9026`.
- A supported USB data cable.

<Tabs>
<Tab title="Pico 2 W">

Use this option with a Raspberry Pi Pico 2 W.

### 1. Flash the bridge

1. Download [`firmware/pico2w-bridge.uf2`](https://github.com/favas0/CivSwitch-Pico2W-SerialBridge/blob/main/firmware/pico2w-bridge.uf2) from the [Pico 2 W project](https://github.com/favas0/CivSwitch-Pico2W-SerialBridge).
1. Hold **BOOTSEL** on the Pico 2 W while connecting it to the PC with a USB data cable.
1. Release **BOOTSEL** when the removable drive named `RP2350` appears.
1. Copy `pico2w-bridge.uf2` to the drive.
1. The Pico 2 W will disconnect and reboot automatically.

The open Wi-Fi network `Switch2Bridge` will start automatically. It has no password.

### 2. Configure the Switch 2

1. Connect the Switch 2 to `Switch2Bridge`.
1. Open **System Settings** -> **Internet** -> **Internet Settings**.
1. Select `Switch2Bridge` and open its settings.
1. Automatic addressing works with this network. If you need to configure IPv4 manually, use:
    - IP address: `192.168.4.2`
    - Subnet mask: `255.255.255.0`
    - Gateway: `192.168.4.1`
    - Primary DNS: `192.168.4.1`
    - Secondary DNS: blank or `0.0.0.0`
1. Confirm that the console's displayed IP address is on the `192.168.4.x` network.

Do not use `192.168.4.2` manually if another device has already received that address.

### 3. Install the Python sender

Download the [Pico 2 W project](https://github.com/favas0/CivSwitch-Pico2W-SerialBridge). From the repository directory, install its dependencies:

```sh
python -m pip install -r requirements.txt
```

Close any Serial Monitor or other program using the Pico 2 W's serial port.

### 4. Test the bridge

Start CivSwitch's Remote JS Loader on the Switch 2.

Run the hello test from the project directory, replacing the serial port and Switch IP address with your values:

```sh
python send_serial.py 192.168.4.2 payload.js
```

If serial-port auto-detection does not work, specify the port:

- Windows: `python send_serial.py --port COM3 192.168.4.2 payload.js`
- macOS: `python send_serial.py --port /dev/cu.usbserial-0001 192.168.4.2 payload.js`
- Linux: `python send_serial.py --port /dev/ttyUSB0 192.168.4.2 payload.js`

`COM3`, `/dev/cu.usbserial-0001`, `/dev/ttyUSB0` are examples of serial ports for Windows, macOS, and Linux respectively. Replace them with the actual port your Pico 2 W is connected to.

If successful, the PC terminal should display:

```text
Hello from Switch via Pico 2 W!
```

</Tab>
<Tab title="ESP32">

Use this option with an ESP32 development board.

### 1. Prepare Arduino IDE

1. Install [Arduino IDE](https://www.arduino.cc/en/software).
1. Install the ESP32 board package for your board in Arduino IDE.
1. Download or clone the [CivSwitch Serial Bridge project](https://github.com/jackspence7/CivSwitch-SerialBridge).

### 2. Flash the bridge

1. Open `esp32-bridge/esp32-bridge.ino` from the downloaded project.
1. Connect the ESP32 to the PC with a USB data cable.
1. Select **ESP32 Dev Module** or the exact board variant you are using.
1. Select the ESP32's serial port.
1. Upload the sketch.

Open Serial Monitor at `115200` baud after rebooting. It should show the Wi-Fi network details.

### 3. Configure the Switch 2

1. Connect the Switch 2 to `Switch2Bridge`.
1. Open **System Settings** -> **Internet** -> **Internet Settings**.
1. Select `Switch2Bridge` and open its settings.
1. The ESP32 provides DHCP, so automatic addressing should work.
1. Check the Switch 2's displayed IP address. It is usually `192.168.4.2`.

The ESP32 uses the open, unprotected network `Switch2Bridge` by default.

### 4. Install the Python sender

From the downloaded project directory, install `pyserial`:

```sh
python -m pip install pyserial
```

Close Serial Monitor and any other program using the ESP32 serial port before sending payloads.

### 5. Test the bridge

From the project directory, run:

```sh
python send_serial.py 192.168.4.2 payload.js
```

If serial-port auto-detection does not work, specify the port:

- Windows: `python send_serial.py --port COM3 192.168.4.2 payload.js`
- macOS: `python send_serial.py --port /dev/cu.usbserial-0001 192.168.4.2 payload.js`
- Linux: `python send_serial.py --port /dev/ttyUSB0 192.168.4.2 payload.js`

`COM3`, `/dev/cu.usbserial-0001`, `/dev/ttyUSB0` are examples of serial ports for Windows, macOS, and Linux respectively. Replace them with the actual port your ESP32 is connected to.

A working bridge prints the sent-byte count and then relay status similar to:

```text
Sending 123 bytes via COM3 -> 192.168.4.2:9026
[RELAY] Connecting to 192.168.4.2:9026 (123 bytes)...
[RELAY] Sent. Reading response...
END
```

The expected response depends on `payload.js`. The Relay lines confirm that the ESP32 reached the Remote JS Loader, while output printed between `[RELAY] Sent. Reading response...` and `END` is the loader's response. If the loader or payload is configured to print a result, that result should appear there. A successful test should always end with `END`.

If the terminal instead reports:

```text
[RELAY] ERROR: connection failed
END
```

Check that the Switch is connected to `Switch2Bridge`, verify its IP address, and confirm that CivSwitch's Remote JS Loader is running on port `9026`.

</Tab>
</Tabs>