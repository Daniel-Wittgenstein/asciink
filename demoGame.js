
window.demoGame = `

// WELCOME TO THE ASCIINK DEMO GAME!
// HIT PLAY TO PLAY IT!
// OR START CHANGING STUFF! :)

// Basic colors and setup:
title:      title: Hogwarts - The Asciink Demo Game, author: Asciink
game:       color: white, bg: black
text:       color: #0f0, bg: blue
choice:     color: darkturquoise
border:     color: darkturquoise, padding: yes, border: yes
player:     color: darkturquoise, show: Д
fog:        color: #fff, show: █


// Display # as a cool unicode block that looks like a wall:
#: show: █

// And we will use $ to create fake walls. They look like walls
// but you can walk through them:
$: show: █, pass: yes

//invisible markers:
hall: show: no
secret: show: no
out: show: no
class: show: no
kitchen: show: no
lock: show: no
open: show: no
a: show: 𓊍, color: white
b: show: 𓊍, color: white
s: show: no

//snitch:
snitch: show: •, color: yellow

//vertical door closed:
!:  show: |, color: chocolate

//vertical door open:
┋:  show: ┋, color: chocolate, pass: yes

//horizontal door closed:
_: show: _, color: chocolate

//horizontal door open:
﹍: show: ﹍, color: chocolate, pass: yes

//visible markers (characters):
dobby: show: o, color: lime
winky: show: o, color: magenta
squid: show: @, color: lime
aragog: show: *, color: red
hagrid: show: +, color: tomato
hermione: show: H, color: #0f0


@NEXT-BLOCK@

MAP: map1
################################################
#:a#...............#...........................#
#.##...............#..##########.#############.#
#......:snitch.....#..#:winky..#.#...........#.#
#..............hall:..#........#.#...........#.#
#..................#..#..:dobby#.#...........#.#
#...:hall.:hall....#..#........#.#...........#.#
####.#####.#########..#........#.#.............#
#.........:hermione...$:kitchen#.#.:out......#.#
#..################################.############
#.s:@#......#...................................
#..###......#......~~~:squid..........♧.........
#..#...open:#....~~~~~~~.......♧................
#..########_#......~~~~............♣...♣♣.♣♣..♣..
#......lock:#....~~~~~.......♣.......♧♣..♣..♣...
#.###########.....~~~~....♣.......♣......♣:key♣..
#:class.....#......~~..................♣♣♣♣.♣.♣♣.
#...........#................♣♣.....♧..........♣
#...........#...............♧.....♣♣♣♣......♣♣.♣
###$#########.................♧......♧♣...♣♣♣.♣..
...:secret...............♧.......♣♣♧♣♣.♧♣♣♣♣♣.♣.
..........♣♣♣.......hagrid:.♣...♣:aragog..♣♣♣♣...
..♣♣♣............♣♣♣...♣♣⌂♣...♣..♣♣.♣♣♧♣...♧♣♣.♣.
........♧...♣♣♣.........♣♣♣....♣....♧♧♣♧......♣


MAP: upstairs
################################################
#:b#......#.......#............................#
#.##......#..end:.#............................#
#.........#.......#............................#
#.........#.......#............................#
#....lock:!:open..#............................#
###################............................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
################################################


MAP: map3
################################################
#..............................................#
#..............................................#
#..............................................#
#........2.....................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
################################################



@NEXT-BLOCK@

VAR evilness = 0
VAR elves_done = 0
VAR elves_attitude = "neutral"
VAR saved_squid = 0

VAR insulted_hermione = 0
VAR talked_to_hermione = 0
VAR hermione_arrived = 0

=== s
//Here we setup the movement sequences for the characters.

Welcome to Hogwarts!

$delay hermione 4
$seq s1 walk hermione 4 4; wait 2; walk hermione 1 2; wait 4; move_to_map hermione upstairs; move hermione 1 2; walk hermione 1 6; walk hermione 8 6; exec_ink hermione_arrives

-> DONE

=== hermione_arrives
~ hermione_arrived = 1
-> DONE



=== herm_lib_closed
Hermione: It looks like the library is closed.

+ Weird.

  Yes. I hope the librarian shows up soon. I will wait here.

+ Have you seen the librarian?

  No. But she should show up soon. I will wait here.

-
-> DONE

=== hermione

{hermione_arrived and not insulted_hermione:
	-> herm_lib_closed
}

{insulted_hermione:
	Hermione: {I won't talk to you. You are not a nice person.| Leave me alone!}
	-> DONE
}

{talked_to_hermione:
	Hermione: I need to hurry now!
  -> DONE
}

Hermione: Hi! I am headed to the library. Do you want me to bring you a book later?

+ Yeah, I need "History of Hogwarts".
	Okay, I'll bring it to you later!
  Thanks!
  Bye!
  ~ talked_to_hermione = 1

+ I really need you to bring me "The Tome of Dark Magick".
	But ... that's in the forbidden section. I can't do that.
  
  ++ Do it or we aren't friends anymore!
  	What?!
    She runs away crying.
    ~ insulted_hermione = 1
    
  ++ Fair enough.
  	Have a good read!
    Bye!
    ~ talked_to_hermione = 1

+ Get lost, stupid nerd!
	Wow, so rude!
  ~ insulted_hermione = 1
  
-

-> DONE




=== end
This is the end of the game.

+ Keep playing.
Okay.

+ End the game.
$end

-
-> DONE

=== open
Looks like the skeleton key opened the door.
//we want this message only to show up once,
//so we get rid of the marker:
$remove open
-> DONE


=== lock
This door seems locked.
-> DONE


=== key
You found a skeleton key!
//now we change all closed doors to open doors:
$change _ ﹍
$change ! ┋
//and we remove all the locked door messages:
$remove lock
//and we remove the key marker:
$remove key
-> DONE



=== snitch
A flying snitch. It must have escaped from Quidditch practice.
+ Catch it
-
It flies away.
$move snitch {RANDOM(5, 12)} {RANDOM(2, 6)}

-> DONE

=== a
A staircase.
+ Go up
$move_player_to_map upstairs
$move_player 1 3
-> DONE

=== b
A staircase.
+ Go down
$move_player_to_map map1
$move_player 1 3
-> DONE

=== secret
Looks like you found a secret entrance to Hogwarts.
Don't tell Malfoy!
-> DONE

=== class
This is a classroom. But it's currently empty.
-> DONE


=== hall

This is the Great Hall of Hogwarts. It's currently empty.

$change 1 x

+ [Eat something.]
	It's not dinner time.

+ [Sit down and relax.]
	You sit down a bit, but then you get bored and get up again.

-
What now?
-> DONE


=== out
The Hogwarts main entrance.
-> DONE



=== squid

{saved_squid:
	The Giant Squid is happily swimming in the lake.
  -> DONE
}

The Giant Squid is stranded on the beach.

+ Help it.
~ evilness--
You use a spell to levitate it back into the water.
~ saved_squid = 1

+ Let it suffer.
~ evilness++
You feel the dark power inside you rising.

-
-> DONE


=== hagrid
This is Hagrid's hut. But he does not seem to be at home.
-> DONE

=== aragog
You met Aragog. He looks hungry.

Looks like game over.

$end

-> DONE

=== dobby
{elves_attitude == "bad":
	You won't talk to stinky elves!
  -> DONE
}

Dobby: {~Good day!|Students are not supposed to be here.|I am so busy!}
-> DONE

=== winky
{elves_attitude == "bad":
	You won't talk to disgusting elves!
  -> DONE
}

Winky: I love being a slave.
-> DONE

=== kitchen
Wow! Looks like you found a secret door to the kitchens. You have never been here. There are all kinds of elves slaving away, cooking food for wizards for zero pay.

{elves_done: -> DONE}

$block

* That's awesome!
Yeah! Inferior elves. You despise them.
~ evilness++
~ elves_attitude = "bad"

* That's horrible!
Somebody should free these poor bastards.
~ evilness--
~ elves_attitude = "good"


-
$unblock

~ elves_done = 1

-> DONE

`