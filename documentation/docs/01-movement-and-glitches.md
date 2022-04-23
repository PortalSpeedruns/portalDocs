---
title: Movement & Glitches
---

## Basic Movement
<iframe width="560" height="315" src="https://www.youtube.com/embed/zMob4eflmpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Bunny Hopping
<iframe width="560" height="315" src="https://www.youtube.com/embed/YkayoUTJ0w0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### ABH

**Accelerated Backwards Hopping** or **ABH** is the main movement mechanic used in all Portal categories with the exception of Glitchless.<br>
For ABH, it is highly recommended to have `+jump` bound to your mouse wheel.<br>
While it is possible to ABH *without* the mouse wheel, it is very precise and inconsistent to perform. The mouse wheel allows you to spam jump inputs much faster than pressing a key, this enables you to spend as little time on the floor as possible.

To initiate an ABH, you need **a certain starting velocity**. You can achieve this by jumping forwards and turning 180 degrees mid-air. You may also start an ABH by **jumping backwards and releasing S** after you jump.<br>
At the same time you want to start holding your crouch key and let go of W. When you’re about to land, start scrolling your mouse wheel. You want to keep scrolling **in small controlled bursts** every time you get close to the ground.<br>
**Don’t scroll too fast**, or the game will ignore your inputs. Do not hold S or the ABH will not work.

If done correctly, this will build your speed up with every hop you perform.<br>
This is because of how Valve tried to patch out bunnyhopping from the engine. Whenever the game detects that you’re going above the speed limit (300 hu/s), it will push you in the **opposite direction** of where you’re facing.<br>
This is why you need to be facing backwards for an ABH to work. (There are workarounds for this, which are explained in the [AFH section](#basic-movement-afh)).

Adding air strafes using the A and D key and moving your mouse in the opposite direction mid-air will increase your acceleration.

### AFH

**Accelerated Forwards Hopping** or **AFH** requires an even higher starting velocity to work.<br>
To AFH, you need to be facing the direction you want to go. Hold the S key in midair and start scrolling every time you are about to hit the ground.<br>
The game now thinks you are going backwards, and using the same logic as before, will try to slow you down by applying forwards velocity. This requires a higher initial velocity, since otherwise it will just slow you down like intended.<br>
AFHing is used in Chamber 07 and Chamber 10, and also in some more advanced strats, like the starting AFH in Chamber 11.<br>
While those chambers give you enough initial velocity to AFH right away, if you want to do it without the starting velocity, you need to either use an “S tap” (which is just pressing and holding S the moment you hit the ground) or [use a `+strafe` key](https://www.youtube.com/watch?v=z2uA7j7EGlA).

### ASH

**Accelerated Sideways Hopping** or **ASH**, is not needed in Portal at all and is more commonly used in Half-Life 2.<br>
You can see where you’re going, with an ASH and you don’t need a high velocity to start one off, however it can be hard to control. You can use it in certain places to cover short walking distances quickly, and it can be used to pre-aim for the next portal shot by more advanced players.<br>
This is considered more of an optimisation than a required strat.

To perform an ASH, start a forwards jump similar to the start to an [ABH](#basic-movement-abh), but instead of turning 180 degrees, turn about 45 degrees to the left or right.<br>
If you turned 45 degrees left, you want to hold down both S and D, as you continue jumping whenever you hit the ground. Exchange D with A if you’re facing right.

### Other Movement Tech
**Check out this video guide from Reassagressta on some other important movement tech:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/jqExEAB68-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Glitches

### Super Throw
- You can interact with objects using `+use` (Default Bind: `E`)
- Throw them by using `+attack` (Default Bind: `Mouse1`)
- Super throw by holding down `mouse1` and then pressing `e`.

**Here is a video by Inflame showing the differences in throw length between the three main throwing techniques:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/RTZ_7FX-pGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Edge Glitch

**Edge Glitch** or **EG** is performed by standing on top or next to the edge of a portal, often it is required that you get stuck for it.
This will cause your camera to dislocate from your body, allowing you to shoot portals on the opposite portal from where you are.<br><br>
**Here is an example using the chamber 18 Edge Glitch route:**

<img src="/images/edge_glitch_explaination.png" width="700" height="400">

On the lower left you see the player standing in Edge Glitch position above and very slightly away from the orange portal.
On the blue side the “True Position” is facing **towards the floor** because the blue portal is on the ceiling and facing a different way than the orange portal. Looking up would cause the “True Position” to actually face towards the wall on the right instead.<br>
However since the blue portal and the target shot are separated by a wall, which adds a certain distance, you will have to move a tiny bit forwards away from the orange portal without exiting the “bubble” that counts as being Edge Glitched.
This now places the “True Position” directly above the door, allowing you to place a portal in front of it and continuing the route using the same system again.
The blue portal will now be on the floor, once again at a different angle than orange and the previous blue. This will change the way the “True Position” faces again.

**To get the next shot you notice how the player has to look up onto the ceiling:**
<img src="/images/edge_glitch_explaination_2.png" width="700" height="400">

**Meanwhile the “True Position” looks similar to this:**
<img src="/images/edge_glitch_explaination_3.png" width="700" height="400">

Your “True Position” and the view you see will do the same movements according to how either sides portal is facing, everything is exactly mirrored.

### Save Glitch

**Save Glitch** or **SG** starts off the same as the [Edge Glitch](#glitches-edge-glitch), while standing on top or next to the edge of a portal your camera gets dislocated from your body, the difference is that if you now save and then load that save you will be stuck in this state even if you move away from the portal.

Collision while in the save glitch state is determined by what we call “Portal Physics Bubbles.” These bubbles exist to provide very basic physics calculations while a player is passing through a portal, before it is quickly updated to use the normal physics. The 2 key differences with these physics bubbles compared to normal physics are:

- Collision with the floor, walls and ceiling is only rendered in a small area around the portal you have save glitched on (hence the term “bubble”)<br>
<br>
- Only Props positioned in FRONT of the save glitched portal have collision<br>
This means that props such as doors can be walked through like they don’t exist if positioned behind the save glitched portal

Save Glitches get cancelled by passing through a portal or getting too close to one.
Overall every action you perform is exactly mirrored for the “True Position” just like with a normal [Edge Glitch](#glitches-edge-glitch).

<iframe width="560" height="315" src="https://www.youtube.com/embed/VSaYzZ7EQyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### LAG/AAG/VAG

**LAG**, **AAG** and **VAG** (**Large, Acute and Vertical angle glitches**) are all variations of the same exploit, abusing a bug in the way teleports are executed. All of these give the same effect: the player is teleported 3 times in a single tick, once from the entry portal to the exit portal, and twice from the exit portal to the entry portal. The first two teleports cancel each other out, but the third places the player the same distance away from the entry portal as to the exit portal, but in a different direction.

Now, despite all versions of this glitch having the same end result, each version has different activation methods and requirements.

**LAG/AAG:**<br>
To trigger these angle glitches, you must enter a portal that is facing down and come out of a portal facing up. In addition, you must enter the portal standing and one of the two portals must not be facing exactly up or down. There are some more specific requirements on which angles of portals this trick will work for, but that's the general idea.

**VAG:**<br>
The activation of this is different from LAG/AAG, it requires the player to stand exactly on a portal boundary (usually precise to 6-8 total decimal places). This trick should be possible on any orientations of portals, including wall, floor, and angled portals. However, this is not guaranteed to work for any particular pair of portals, in fact the majority of the time it will not. Due to the nature of the exploit, it is effectively impossible to predict when it will work on a specific portal pair, and it is extremely sensitive to many conditions including but not limited to: the orientation and locations of both portals, the portal placement order, and where the portals were shot from. Unlike LAG/AAG, VAG is also possible to perform on props.

**Save Glitch from angle glitches**<br>
After some angle glitches, the player will get a modified form of [Save Glitch](#glitches-save-glitch). This modified [Save Glitch](#glitches-save-glitch) has different prop interactions than regular [Save Glitch](#glitches-save-glitch) and can be cancelled simply by shooting the [Save Glitch](#glitches-save-glitch) portal. [Saveloading](./introduction#key-binds-save-load-bind) while in this modified Save Glitch state will give the player regular [Save Glitch](#glitches-save-glitch).

### Vertical Wall Warp

**Vertical Wall Warp** or **VWW** is an Out of Bounds exclusive glitch, allowing you to warp either to the top or the bottom of a wall located out of bounds space.<br>
The first step is to place a portal on the wall you want to warp up or down on. Next you position yourself in this portal. Make sure that you are actually peeking out of the portal on the target wall. Once you’ve done that crouch down, you will not get warped if you are standing up in the portal.
Now, if you want to warp downwards, you simply save and load. Warping upwards requires an extra step. Jump and while you are still in your upwards motion save and load.<br>
Warping upwards is used in OoB speedruns but warping downwards generally isn’t (currently).
