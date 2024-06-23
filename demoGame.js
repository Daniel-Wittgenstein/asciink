
window.demoGame = `
// WELCOME TO THE ASCIINK DEMO GAME!
// HIT PLAY TO PLAY IT!
// OR START CHANGING STUFF! :)

// Basic colors and setup:
title:      title: Hogwarts - The Asciink Demo Game
game:       color: white, bg: black
text:       color: white, bg: black
choice:     color: darkturquoise
border:     color: darkturquoise, padding: yes, border: yes
player:     color: darkturquoise, show: Д
fog:        color: #333, show: █


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


//visible markers (characters):
dobby: show: o, color: lime
winky: show: o, color: magenta
squid: show: @, color: lime
aragog: show: *, color: red
hagrid: show: +, color: tomato

@NEXT-BLOCK@

MAP: map1
################################################
#..................#...........................#
#..................#..##########.#############.#
#..................#..#:winky..#.#...........#.#
#..............hall:..#........#.#...........#.#
#..................#..#..:dobby#.#...........#.#
#...:hall.:hall....#..#........#.#...........#.#
####.#####.#########..#........#.#.............#
#......@..............#kitchen:$.#.:out......#.#
#..################################.############
#..#........#...................................
#..#........#......~~~:squid..........♧.........
#..#........#....~~~~~~~.......♧................
#..########-#......~~~~............♣...♣♣.♣♣..♣..
#......lock:#....~~~~~.......♣.......♧♣..♣..♣...
#.###########.....~~~~....♣.......♣......♣...♣♣..
#:class.....#......~~..................♣♣♣♣.♣.♣♣.
#...........#................♣♣.....♧..........♣
#...........#...............♧.....♣♣♣♣......♣♣.♣
###$#########.................♧......♧♣...♣♣♣.♣..
...:secret...............♧.......♣♣♧♣♣.♧♣♣♣♣♣.♣.
..........♣♣♣.......hagrid:.♣...♣:aragog..♣♣♣♣...
..♣♣♣............♣♣♣...♣♣⌂♣...♣..♣♣.♣♣♧♣...♧♣♣.♣.
........♧...♣♣♣.........♣♣♣....♣....♧♧♣♧......♣

@NEXT-BLOCK@

VAR evilness = 0
VAR elves_done = 0
VAR elves_attitude = "neutral"
VAR saved_squid = 0

=== secret
Looks like you found a secret entrance to Hogwarts.
Don't tell Malfoy!
-> DONE

=== class
This is a classroom. But it's currently empty.
-> DONE

=== lock
This door seems locked.
-> DONE


=== hall

This is the Great Hall of Hogwarts. It's currently empty.

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

* That's awesome!
Yeah! Inferior elves. You despise them.
~ evilness++
~ elves_attitude = "bad"

* That's horrible!
Somebody should free these poor bastards.
~ evilness--
~ elves_attitude = "good"


-
~ elves_done = 1

-> DONE
`