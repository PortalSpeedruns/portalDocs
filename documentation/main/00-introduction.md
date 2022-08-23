---
title: Introduction
---

<!-- Variables for quick references -->

[source unpack]: #resources-source-unpack
[demo auto-recorder]: #resources-demo-auto-recorder
[spt]: #resources-source-pause-tool-spt
[vault save]: #resources-vault-save
[livesplit]: #resources-livesplit

**This guide will provide you with all the knowledge required to start speedrunning Portal in any category of your choice. This guide is designed to be used with [Source Unpack] but can partially be used with the plain Steam version of the game.**
<br><br>
This guide is a constant work in progress.

## Links

**Discord:**<br>https://discord.gg/g6tzujPsJj<br>
**Full Game Leaderboard:**<br>https://www.speedrun.com/portal/full_game<br>
**Community Sum of Best:**<br>https://docs.google.com/spreadsheets/d/1-2g_A-nrWZk2Bt8et-_QrV4k8ptmO1jyPUD9XyiUpQ0<br>
**Individual Level Leaderboard:**<br>https://www.speedrun.com/portal/levels<br>
**Category Extension Leaderboard:**<br>https://www.speedrun.com/portal_category_extensions<br>
**Custom Portal Gun Tutorial (Unpack Version):**<br>https://www.youtube.com/watch?v=zpQBBjDfbdE<br>
**Texture Locations:**<br>https://pastebin.com/dqZYrJzS<br>
**Doc of Extra Docs:**<br>https://docs.google.com/document/d/1mf5zgvjsYBixoRFRaa2T1J8DVbwxJz5itb0PEmUu-dI<br>

## Setup

%y https://youtu.be/nc7B6FNi-r8

## Resources

Resources are also available from the [leaderboard’s resources section](https://www.speedrun.com/portal/resources) and the `#resources` channel in the [Discord](#links).

### Source Unpack

**An older version of the game where certain glitches are easier, load times are shorter and there are no random stutters**

Download can be found **[here](https://sourceunpack.gameabusefastcomplete.com/)**

- **Required for Out of Bounds, Inbounds and Inbounds No SLA**
- **Recommended for Glitchless**
- **[Demo Auto-Recorder] and [SPT] already included**

### Demo Auto-Recorder

**A plugin that automatically records demos for your runs**<br>
**Required for top 10 runs, recommended otherwise**

Download can be found **[here](https://github.com/RedHaze/speedrun-demo-record-unified/releases) - [(Installation instructions)](https://github.com/RedHaze/speedrun-demo-record-unified#installing)**<br>
VDF file to automatically load the plugin can be found **[here](https://gist.githubusercontent.com/mikesmiffy128/8d950665bad6abb6fde815e28e7736e8/raw/e13e51c1b0d33714b57bb9cd154f4360fe2d95e5/speedrun_demorecord.vdf)**

_Download the 2007 version for Source Unpack or the 2013 version for the Steam release._

### LiveSplit

**A speedrun timer with an auto-splitter included**

Download can be found **[here](http://livesplit.org/)**<br>
Pre-made splits can be found **[here](https://www.speedrun.com/resourceasset/bx1fa)**<br>
Default category is set to Inbounds, if you are running a different category make sure to change this.

### Vault Save

**A save file and a demo file that you need to use if you want to skip the intro**

Download can be found **[here](https://www.speedrun.com/resourceasset/2e631)**

### UntitledParser

**Times demos, giving you an exact time for your runs**

Download can be found **[here](https://github.com/UncraftedName/UncraftedDemoParser/releases)**

### Source Pause Tool (SPT)

**This plugin has a number of useful features**

- Save Glitch Overlay (To see where you’re actually aiming your portals during a Save Glitch)
- HUD with extra details (Portal Bubble, OoB, etc.)
- TAS Tools (Documentation can be found **[here](https://docs.google.com/document/d/11iu9kw5Ufa3-QaiR7poJWBwfe1I56wI6fBtDgmWZ8Aw/edit)**)
- much more...

Download can be found **[here](https://github.com/YaLTeR/SourcePauseTool/releases)**

### ListDemos+

**Times single demos with ticks for ILs**

Download can be found **[here](https://www.speedrun.com/resourceasset/plujm)**

### Input HUD (IHUD)

**An input display that is viewable in-game, an alternative to Nohboard**

Download can be found **[here](https://www.speedrun.com/resourceasset/lxt0o)**

### Portal Tools

**A tool that allows you to very easily change your portal and crosshair colors in just a few clicks**

Download can be found **[here](https://github.com/wozniak/portal-tools/releases)**

### Discord Rich Presence

<img src="/images/portal_rpc.png">

Download can be found **[here](https://drive.google.com/drive/folders/1r8rtg1Ud66kj2qQ48gP_jLofQ7E4zkrg)**

## Installation

- **After downloading [Source Unpack], extract it somewhere you like (Documents or Desktop).**<br>

Do NOT put it in your Steam library or in system folders!<br>
This version does not require the Steam version, but you do need to own Portal on Steam and have Steam running in order to play.

- **Once installation is complete, simply go to your chosen folder and double-click on your `Portal.bat` to launch the game.**<br>

You may also choose to create a shortcut to this file on your Desktop for convenience.

- **When you first launch your game, enable the developer console**<br>

`Options -> Keyboard -> Advanced -> Enable Developer Console`<br>
It makes key bindings much easier and allows the use of the [Demo Auto-Recorder] plugin. You can then open the console by pressing the key under the Escape key.

- **The [Demo Auto-Recorder] should come pre-installed with [Source Unpack] and you can check this by opening the console in-game.**<br>

You should see a message in the console saying `[Speedrun] Speedrun_demorecord Loaded` and have access to the various speedrun commands.
If you do still need to install this for any reason, you can use this tutorial **[here](https://www.youtube.com/watch?v=XnUFW7licDE)**.

- **Download the [Vault Save] and unzip it into `Source Unpack/portal/SAVE/`**<br>

Go to the [Keybinds](#keybinds) section of this guide to see the different binds you need to actually start the run.<br>
Please be aware that if you want to skip the vault, you are required to use [this specific file](#resources-vault-save); making your own file is not allowed.

- **Download, install and launch [LiveSplit]**<br>

In LiveSplit, make sure to right click and select the `Edit Splits` option, then click on the `Activate` button to ensure that the autosplitter is active.<br>
Once you’re done, close the Edit Splits window, then right click the main window again and go to `Compare Against` and choose `Game Time` to select the correct timing method. This will ensure that load times are removed from your final time.<br>
Make sure to always save your splits when you are done using LiveSplit.

(Linux Installation Guide video can be found **[here](https://www.youtube.com/watch?v=S59-vTgG2yg)**)

## Keybinds

### How to bind

From here on, we will use the console to change key bindings and other settings.
The command to bind commands to a key is `bind [key] [command]` (without the brackets).
You can use any key for any command, but this guide will show examples with commonly used keys further down.

### Find command

If you ever forget the full name of a command, you can search for it using the `find` command.
Example: If you forgot the command to move left, `find left` will give you a list of all commands containing the keyword "left"

### Jump Bind

Next you need to bind the `+jump` command to your scroll wheel. This can be done with `bind mwheelup +jump` and/or `bind mwheeldown +jump`
(This allows us to buffer jumps as we land, which is essential for consistent [bhops](./movement-and-glitches#basic-movement-bunny-hopping) and [ABH movement](./movement-and-glitches#basic-movement-abh))

### Quick Save & Load Binds

First you need to bind the `save` and `load` commands to keys. This can be done with `bind [key] "save quick"` and `bind [key] "load quick"`

### Save-Load Bind

**For easier save glitching you can make a save-load bind separate from the normal Quick Save and Quick Load buttons.**

Type `bind [key] "save glitch; load glitch"` into your console, again, replace [key] with your preferred key.
**Note the quotes here:** Commands with spaces and/or semicolons have to be surrounded with quotes.

It is also recommended that you bind a key to load from this save (`bind [key] "load glitch"`).
This way, you can try again quickly in case you miss a save glitch shot.

### FPS Bind

If you have a lowering fps bind (including `fps_max 30`) (mostly used in advanced routes), you want to have a bind to raise the fps again by changing the `fps_max` value back to 300.
`bind [key] "save glitch; load glitch; fps_max 300"`

### Toggle Duck

If you're not running Glitchless, you also want to bind `toggle_duck`, which lets you automatically uncrouch on the next jump.
This is mainly useful in Inbounds & Inbounds No SLA, where a few strats need it and it can be used for advanced movement techniques.
It is strongly recommended to not bind toggle_duck to either CTRL or SHIFT as you will run into issues later on when trying to perform advanced movement techniques.

### Portal Funneling

You may also want binds to turn off/on portal funneling, which is a setting that pulls you into floor portals.
`bind [key] "sv_player_funnel_into_portals 1"` and `bind [key] "sv_player_funnel_into_portals 0"`

### cl_showpos

Another optional command is `cl_showpos 1`
This displays your location and camera angles in the top right corner of the screen and can be used to make some more precise tricks easier.

### Vault Save

For the [Vault Save] you need one more step to tell the [Demo Auto-Recorder] plugin to not start from the beginning of the first map but from the [pre-made save file](#resources-vault-save) you installed prior.
For that, simply type `speedrun_save vault` into the console and your run should now start using the Vault Save.

### Bind Summary

**Here is a list of binds commonly used for speedruns**

```
bind mwheelup +jump
bind mwheeldown +jump
bind q "save quick"
bind f "load quick"
bind v "save glitch; load glitch; fps_max 300"
bind b "save glitch; load glitch; fps_max 30"
bind t "load glitch"
bind r toggle_duck
bind 1 "sv_player_funnel_into_portals 1"
bind 2 "sv_player_funnel_into_portals 0"
bind [ speedrun_start
bind m speedrun_stop
```

**Please note:** Source Engine has media key inputs for next song, pause song and previous song on `P`, `G` and `Q` respectively.

### Practice commands

**For practicing, you may use these commands:**

```
sv_cheats 1         - Enable cheats (0 to disable)
noclip              - Fly around the map without colliding with any walls
host_timescale 0.5  - Change the game speed. 1 is 100%, 0.5 is 50%, etc.
god                 - Infinite health
ai_disable          - Disable turrets & GLaDOS
_y_spt_overlay 1    - Enable SPT overlay for save glitches
```

**Please note:** These commands are cheat protected and are not allowed in runs. Please disable them before doing runs.

### Allowed Commands / Binds

- Any bind that is accessible from the menu
- Custom named save binds
- Demo Auto-Recorder plugin related binds
- Toggle binds
- Binds for sensitivity
- `sv_player_funnel_into_portals`
- `toggle_duck`
- `cl_showpos 1`
- `r_drawviewmodel 0`
- `save`, `fps_max [fps]` and `load` on one key binding

### Timing

- Timing begins when the crosshair appears and ends when it disappears after GLaDOS' death.<br>
- Timing is done using in-game time therefore [LiveSplit] is highly recommended due to its automatic start/stop function and load removal.<br>
- You are allowed to use the [official save](#resources-vault-save) to skip the waiting time in the vault.<br>
- You have to set [LiveSplit] to show game time if you use the vault save.
- Pauses have to be timed

### Proof

- All runs have to be submitted with some sort of proof in form of a video or demos. In case of suspicion, demos can be requested by the mods.
- Videos have to show the full run from start to finish.
- Top 10 runs have to be submitted with a recording showing [LiveSplit] and demos provided.
