---
title: Setup
---

[Video explaining the full setup process](https://youtu.be/nc7B6FNi-r8)

## Resources

Most resources are also available from the leaderboard’s resources section.

Source Unpack (required for oob/inbounds/no sla, recommended for glitchless, Demo Auto-recorder and SPT already included)
An older version of the game where certain glitches are easier, load times are shorter, and there are no random stutters.

Demo Auto-recorder plugin (required for top 10 runs, recommended otherwise)
VDF file for auto-loading the plugin (right-click, save as)
A plugin that automatically records demos for your runs.
Download the 2007 version for unpack, or the 2013 version for the steam version. Installation instructions are available on the github page, or below in the installation section.

Livesplit (required)
A timer with an autosplitter included.

Vault Save (recommended)
A save file and a demo file that you need to use if you want to skip the intro.

Pre-made Splits (optional)
An empty splits file for the autosplitter.

UntitledParser (Older Portal Demo Timer) (optional)
Times demos, giving you an exact time for your runs.
Note: Livesplit time may display a different time and should be used when submitting runs with video.

Source Pause Tool (optional, included in Source Unpack 2.4)
Has a number of useful features, including a saveglitch overlay (to see where you’re actually aiming your portals during a saveglitch).

Listdemo+ (optional)
Times single demos with ticks for ILs.

## Instalation

After downloading Source Unpack, extract it somewhere like Documents or Desktop. Do NOT put it in your steam library or in system folders! This version does not require the Steam version, but you do need to own Portal on Steam and have Steam running in order to play.

Once installation is complete, simply go to your chosen folder and double-click on Portal.bat to launch the game. You may also choose to create a shortcut to this file on your Desktop for convenience.

When you first launch your game, you will want to at very least enable the developer console (options->keyboard->advanced->enable developer console) as it makes key bindings much easier and allows the use of the demo recorder plugin. You can then open the console by pressing the key under the Escape key (usually ~ or `).

The Demo Auto Recorder should come pre-installed with Source Unpack and you can check this by opening the console in-game. You should see a green message in the console saying “Speedrun*demorecord Loaded” and have access to the various speedrun* commands. If you do still need to install this for any reason, you can use the tutorial here.

Should you decide to use the Vault Save, download it and unzip it into Source Unpack/portal/SAVE/. Go to the “Keybinds” section of this guide to see the different binds you need to actually start the run. Be aware that if you want to skip the Vault, you are required to use this specific file; making your own file is not acceptable.

Next, download, install, and launch LiveSplit if you have not done so already.
Though there are other speedrun timers out there, Livesplit is required for Portal as it provides accurate load screen removal. Pre-made splits are available here.

In Livesplit, make sure to right click and select the Edit Splits option, then click on the Activate button to ensure that the autosplitter is active. Once you’re done, close the edit splits window, then right click the main window again and go to Compare Against and choose Game Time to select the correct timing method. This will ensure that load times are removed from your final time. And finally, always be sure to save your splits when you are done using Livesplit.

Linux Installation Guide Video | Text

### In-game Settings

Video
Some routes use texture lineups, so set Texture Detail to at least High and ensure that you’re running on DX9 (in the developer console, ensure mat_dxlevel is set to 90). Note that texture quality barely affects framerate, even if your system is lacking. Make sure vertical sync is disabled. The rest of the graphical settings are not important. If you’re struggling to get a decent frame rate, you can try: turning down antialiasing and filter; lowering your resolution; setting the game’s priority to High in Task Manager. If you’re still having issues with performance, you can try using DirectX 8 by using the command mat_dxlevel 80.

It is also strongly recommended that you set your field of view to 90, rather than the default 75. Most people will much prefer this as it feels less claustrophobic.

### Keybinds

From here on, we will use the console to change key bindings and other settings.
The basic command to bind things is bind [key] [command] without the brackets. You can use any key for any command, but this guide will show examples with commonly used keys. You can find a list of key names here.

If you ever forget the full name of a command, you can search for it using the find command. For example, if you forgot the command to move left, “find left” will give you results including +left and +moveleft, with +moveleft the correct keybind.

First, we need to bind our save and load keys. This can be done with bind # “save quick” and bind # “load quick”. Next, we need +jump bound to our scroll wheel. Type bind mwheelup +jump and/or bind mwheeldown +jump into the console. This allows us to buffer jumps as we land, which is essential for consistent bunnyhopping / ABH movement.

For easier save glitching (inbounds/out of bounds only), you can make a save-load bind separate from the normal Quick Save and Quick Load buttons (which can be set up from the menu). This is one of two exceptions to the “only one action per key” rule. Type bind # "save glitch;load glitch”, replace # with your preferred key. Note the quotes here: commands with spaces and/or semicolons have to be surrounded with quotes so the game knows the whole thing is part of the keybind (semicolons are used to run two commands in a row). It is also recommended that you bind a key to load from this save: bind # "load glitch". This way, you can try again quickly if you miss a save glitch shot. If you’re lowering fps anywhere (used in advanced routes), you also want to have your bind raise the fps again so you can press it to go back to normal: bind # "save glitch;load glitch;fps_max 300".

Unless you’re running glitchless, we also probably want to bind toggle_duck, which lets us auto-uncrouch on the next jump. This is mainly useful in inbounds/nosla, where a few strats need it, and it can be used in advanced movement techniques. You will want to bind this to a key that is close by, but it is strongly recommended to NOT bind toggle_duck to either Ctrl or Shift as you will run into issues later on when trying to perform advanced movement tech.
You may also want binds to turn on/off portal funnelling, which is a setting that pulls you into floor portals. Type bind # "sv_player_funnel_into_portals 1" and bind # "sv_player_funnel_into_portals 0".

To actually start runs, we want a speedrun_start bind. This should be made harder to reach than your other binds, so you don’t reset by accident! Type e.g. bind # speedrun_start and press that key whenever you want to start a new run. You’ll also want bind # speedrun_stop since you want to stop recording after GLaDOS dies. You don’t need to press this to reset, since speedrun_start automatically stops the previous run.

You may also want to make a separate directory for your demos to be stored in - you can do this by typing speedrun_dir "./run_demos/", although this is preference.

Another optional command is cl_showpos 1 - this is allowed in runs and shows you your location in coordinates in the top right corner of the screen, and can be used to make some more precise tricks easier.

Unless you want to use the Vault Save you are ready to go! For the Vault Save we need one more step, and that is to tell speedrun_start to not start from the beginning, but from the premade save file we installed before. For that, simply type speedrun_save vault into the console and your run start bind should now start your run from the Vault Save instead.

Command Summary
(Note: using example keys as above)

bind mwheelup +jump
bind mwheeldown +jump
bind q “save quick”; bind f “load quick”
bind v “save glitch;load glitch;fps_max 300” (or fps_max 30 to lower)
bind r toggle_duck
bind t “load glitch”
bind 1 “sv_player_funnel_into_portals 1”
bind 2 “sv_player_funnel_into_portals 0”
bind p speedrun_start
bind [ speedrun_stop
cl_showpos 1 (shows your position/angles in the top corner of the screen)

Cheat commands (for use in practice, disable before doing runs!!!):
sv_cheats 1 - enable cheats (0 to disable)
noclip - fly around the map without colliding with any walls (toggle)
host_timescale 0.5 - change the game speed. 1 is default, 0.5 is 50% speed, etc
god - infinite health (toggle)
ai_disable - disable turrets, glados (toggle)

## Rules & Timing

Rules for Out of Bounds:
Beat the game as fast as possible.
Beat the game in one sitting, quicksaves and quickloads are allowed.

Rules for Inbounds:
Beat the game without having any props, your camera, placed portals or traveling portals leave the map.
Beat the game in one sitting, quicksaves and quickloads are allowed.
If any of those conditions are broken, you need to reload a save (however, shooting a portal through oob space that doesn’t land anywhere or accidentally doing clipping glitch in maps like 10 is OK).

Rules for Glitchless:
Beat the game in one sitting, quicksaves and quickloads are allowed.
To see all currently banned strats click on the link.

Rules for Inbounds No SLA - Unrestricted
Same rules as Inbounds with the addition that you are NOT allowed to do any glitch/trick/route that requires you to utilize loading saves (this includes autosaves and map transitions). You're still allowed to use quicksaves, but everything in your run needs to be theoretically possible without using saving/loading.

Rules for Inbounds No SLA - Legacy
Same rules as Inbounds No SLA Unrestricted with the addition that obtaining AGSG state is only allowed as long as your next portal shot cancels this state. Vertical Angle Glitches are banned. Vault Skip is banned.

Click on the link to see the most updated ruleset for each category

Version:
Source Unpack is the main version used. You can do runs on the latest Steam version, but note that not all tricks will be usable (mainly saveglitch & edgeglitch)

Timing:
Timing begins when the crosshair appears and ends when it disappears after GLaDOS' death.
Timing is done using in game time - LiveSplit is highly recommended due to its auto-start/stop and load removal.
You are allowed to use the official save (resource section) to skip the vault.
You have to set livesplit to show game time if you use the vault save.
Pauses have to be timed (Engine Ticks with Pauses)

Proof:
All runs HAVE to be submitted with some sort of proof in form of a video or demos. In case of suspicion demos can be requested by the mods.
Videos have to show the full run from start to finish.
Demos can automatically be recorded with Maxxuss' demo plugin (see resources).
As a result of the save implementation, screenshots are no longer a valid proof and will get rejected (as they should've always been...).
Top 10 runs HAVE to be submitted with a live recording with livesplit showing and demos.

Allowed commands/bindings:
-Any bind that is accessible from the menu
-sv_player_funnel_into_portals binding (checkbox in the menu)
-toggle_duck binding (default controller bind)
-cl_showpos 1
-r_drawviewmodel 0
-binds for sensitivity
-save/load on one key binding
-save, fps_max [fps], load on one key binding
-custom named save binds
-demo plugin related binds
-toggle binds

## Basic Movement

[Video showing off the basic movement options]
[alternate video]

### ABH

Accelerated Backwards Hopping or ABH is the main movement mechanic used in all Portal categories with the exception of Glitchless. Glitchless uses normal bunnyhopping and you can see a video guide on how to do those here.
To ABH, it is highly recommended to have +jump bound to your mouse wheel.
While it is possible to ABH without the mouse wheel, it is very precise and inconsistent to perform. The mouse wheel allows you to spam jump inputs much faster than pressing a button, so we spend as little time on the floor as possible.

To initiate an ABH, you need a certain starting velocity. We can achieve this by jumping forwards and turning 180 degrees in mid-air. You may also start an ABH by jumping backwards, and releasing S after you jump. At the same time, you want to start holding your crouch key and let go of W. When you’re about to land, start scrolling your mouse wheel. You want to keep scrolling in small controlled bursts every time you get close to the ground. Don’t scroll too fast, or the game will ignore your inputs. Do NOT hold S or the ABH will not work.

This will build up your speed with every hop you perform. This is because of how Valve tried to patch out bunnyhopping from the engine. Whenever the game detects that you’re going above the speed limit (300 hu/s), it will push you in the opposite direction of where you’re facing. This is why you need to be facing backwards for an ABH to work. (There are workarounds for this, which are explained in the AFH section).

Adding air strafes using the A and D key and moving your mouse in the opposite direction midair will increase your acceleration. The parking lot in escape_02 is a great place to mess around with this and practice ABH in general, and can be accessed using the noclip cheat.

### AFH

Accelerated Forwards Hopping or AFH is a variant of ABH, and isn’t used as often.
AFH requires an even higher starting velocity to work.
To AFH, you need to be facing the direction you want to go. Hold the S key in midair and start scrolling every time you are about to hit the ground.
The game now thinks you are going backwards, and using the same logic as before, will try to slow you down by applying forwards velocity. This requires a higher initial velocity, since otherwise it will just slow you down like intended.
AFHing is used in Chamber 07 and Chamber 10, and also in some more advanced strats, like the starting AFH in Chamber 11.
While those chambers give you enough initial velocity to AFH right away, if you want to do it without the starting velocity, you need to either use an “S tap” (which is just pressing and holding S the moment you hit the ground) or use the +strafe key. Here is a video by Asherza documenting both techniques. Whichever one you decide to do is entirely your preference. If you decide to use +strafe, it is strongly recommended to bind it to your side mouse buttons if you have them.

### ASH

Accelerated Sideways Hopping, or ASH, is not needed in Portal at all, and is more commonly used in Half-Life 2. You can see where you’re going, with an ASH, and you don’t need a high velocity to start one off, however it can be hard to control. You can use it in certain places to cover short walking distances quickly, and it can be used to pre-aim for the next portal shot by more advanced players. This is considered more of an optimisation than a required strat.

To perform an ASH, start a forwards jump similar to the start to an ABH, but instead of turning 180 degrees, turn about 45 degrees to the left or right.
If you turned 45 degrees left, you want to hold down both S and D, as you continue jumping whenever you hit the ground. Exchange D with A if you’re facing right.

All movement options can transition into each other.

Other Movement Tech
Check out this video guide from Reassagressta here on some other important movement tech that may come in handy for optimizing your times! Includes methods such as toggle_duck ABHing, QCE, and more.

Quirks:
-You can interact with objects using +use (bound to e by default), throw them by using +attack (bound to mouse1 by default) or super throw by holding down mouse1 and then pressing e. You can do this multiple times if you want, but it is currently most common with a singular keypress. Here is a video by inflame showing the differences in throw length between the three main throwing techniques.

## Glitches

### Edgeglitch

Edgeglitch is performed by standing on top or next to the edge of a portal, often it is required that you get stuck for it.
This will cause your camera to dislocate from your body, allowing you to shoot portals on the opposite portal from where you are.
Here is an example using the chamber 18 edgeglitch route:

On the lower left you see the player standing in edgeglitch position above and very slightly away from the orange portal. On the blue side the “True Position” is facing towards the floor because the blue portal is on the ceiling and facing a different way than the orange portal. Looking up would cause the “True Position” to actually face towards the wall on the right instead.
However since the blue portal and the target shot are separated by a wall, which adds a certain distance, you will have to move a tiny bit forwards away from the orange portal without exiting the “bubble” that counts as being Edgeglitched.
This now places the “True Position” directly above the door, allowing you to place a portal in front of it and continuing the route using the same system again.
The blue portal will now be on the floor, once again at a different angle than orange and the previous blue. This will change the way the “True Position” faces again.

To get the next shot you notice how the player has to look up onto the ceiling.

Meanwhile the “True Position” looks similar to this.

Your “True Position” and the view you see will do the same movements according to how either sides portal is facing, everything is exactly mirrored.

### Saveglitch

Saveglitch starts off the same as the Edgeglitch, while standing on top or next to the edge of a portal your camera gets dislocated from your body, the difference is that if you now save and then load that save you will be stuck in this state even if you move away from the portal.

Collision while in the save glitch state is determined by what we call “Portal Physics Bubbles.” These bubbles exist to provide very basic physics calculations while a player is passing through a portal, before it is quickly updated to use the normal physics. The 2 key differences with these physics bubbles compared to normal physics are:

Collision with the floor, walls and ceiling is only rendered in a small area around the portal you have save glitched on (hence the term “bubble”)

Only Props positioned in FRONT of the save glitched portal have collision
This means that props such as doors can be walked through like they don’t exist if positioned behind the save glitched portal

Saveglitches get canceled by passing through a portal or getting too close to one.
Overall every action you perform is exactly mirrored for the “True Position” just like with a normal Edgeglitch.

[Saveglitch collision video by jukspa]

### LAG/AAG/VAG

LAG, AAG, and VAG (Large, Acute , and Vertical angle glitches) are all variations of the same exploit, abusing a bug in the way teleports are executed. All of these give the same effect: the player is teleported 3 times in a single tick, once from the entry portal to the exit portal, and twice from the exit portal to the entry portal. The first two teleports cancel each other out, but the third places the player the same distance away from the entry portal as to the exit portal, but in a different direction.

Now, despite all versions of this glitch having the same end result, each version has different activation methods and requirements.

LAG/AAG: to trigger these angle glitches, you must enter a portal that is facing down and come out of a portal facing up. In addition, you must enter the portal standing and one of the two portals must not be facing exactly up or down. There are some more specific requirements on which angles of portals this trick will work for, but that's the general idea.

VAG: the activation of this is different from LAG/AAG, it requires the player to stand exactly on a portal boundary (usually precise to 6-8 total decimal places). This trick should be possible on any orientations of portals, including wall, floor, and angled portals. However, this is not guaranteed to work for any particular pair of portals, in fact the majority of the time it will not. Due to the nature of the exploit, it is effectively impossible to predict when it will work on a specific portal pair, and it is extremely sensitive to many conditions including but not limited to: the orientation and locations of both portals, the portal placement order, and where the portals were shot from. Unlike LAG/AAG, VAG is also possible to perform on props.

\*Saveglitch from angle glitches - after some angle glitches, the player will get a modified form of saveglitch. This modified saveglitch has different prop interactions than regular saveglitch and can be cancelled simply by shooting the saveglitch portal. Saveloading while in this modified saveglitch state will give the player regular saveglitch.

### Vertical Wall Warp

Vertical Wall Warp is an out of bounds exclusive glitch, allowing you to warp either to the top or the bottom of a wall located in out of bounds space.
The first step is to place a portal on the wall you want to warp up or down on. Next you position yourself in this portal. Make sure that you are actually peeking out of the portal on the target wall. Once you’ve done that crouch down, you will not get warped if you are standing up in the portal.
Now, if you want to warp downwards, you simply save and load. Warping upwards requires an extra step. Jump and while you are still in your upwards motion save and load.
Warping upwards is used in the OoB speedrun, but warping downwards generally isn’t (currently).
