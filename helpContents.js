window.helpContents = `

<html>
  <head>
    <meta charset="utf-8">
    <title>HELP</title>
    <style>
      body {
        margin: 0;
        padding: 32px;
        background: #222;
        color: white;
        font-family: monospace;
        font-size: 14px;
      }

      pre {
        border: 1px solid #ddd;
      }
      
      .mark {
        color: #0d0;
      }

    </style>
  </head>
  <body>
  <h1>ASCIINK</h1>
  
  <div>
  <b>When you click "save" or "play", asciink saves your game
  in your browser's local storage. You should still make
  backup copies of your game for safety.
  Just copy all the text into a text file, save it and
  you have yourself a backup.</b><br><br>

  <b>You can do anything you want with your games created with asciink, including
  selling them. Any commercial or non-commercial use is explicitly allowed.</b><br><br>

  </div>
  
  <div>
  Every asciink game consists of three blocks separated by a line with this special sequence:
  <br><br>
  <b>@NEXT-BLOCK@</b>
  <br><br>
  * The first block describes generic game properties.<br>
  * The second block defines the game's maps.<br>
  * The third block is an <a href="https://www.inklestudios.com/ink/">Ink</a> script
    containing all the dialogues.<br>
    
    A very simple game demonstrating all three blocks:
  </div>
  <pre>
    title:  title: Example Game, author: myself
    game:   color: aqua, bg: black
    fog:    show: no

    @NEXT-BLOCK@

    MAP: map1
    #############
    #...........#
    #....:hello.#
    #...........#
    #############

    @NEXT-BLOCK@

    === hello

    Welcome to asciink!

    + Is this a demo?
      Yes!
      
    + Alright.
      Good.

    -
    Have fun!

    -> END
  </pre>

  <h2>Changing the colors and the look of your game</h2>
  In the first block you can have these generic properties: 
  <pre>
    title:      title: My Funky Game, author: H. H. Funk
    game:       color: #fff, bg: blue
    text:       color: yellow, bg: red
    choice:     color: pink
    border:     color: green, padding: yes, border: yes
    player:     color: red, show: @
    fog:        color: #0f0, show: #
  </pre>

  (You do not have to align the properties with spaces, we just did it
  for readability.)<br>

  "title" sets the title of your game.<br>
  "game" sets the default color of map tiles (characters) and the game background color.
  The colors can be hex colors (for example: #fdc) or
  <a href="https://www.w3schools.com/colors/colors_names.asp">HTML colors names</a> like "red", "yellow" etc.<br>
  "text" sets the text color and background color of text blocks <br>
  "choice" sets the text color of choices<br>
  "border" sets the color of the text box border. You can also disable the border with "border: no"
    and disable the padding with "padding: no" (padding means the space between the border and the text).<br>
  "player" defines what color to use for the player character with "color" and what letter/character to use
    to show the player (with "show")<br>
  "fog" defines the fog color and symbol. you can also disable the fog with "show: no"<br>

  <h2>Creating Maps</h2>

  You can hit the INSERT button in the editor to toggle OVERWRITE MODE.
  This is very useful when you are editing maps!<br><br>

  Maps have a maximum size of 48 by 24 characters.<br><br>

  By default, all characters on a map are shown exactly as you type them.<br><br>

  The "." character is special. It signifies an empty space you can walk through.<br><br>

  The "@" character is also special. It signifies the player starting location.
  The player always starts on the first map (the first or top-most map in the text file), so
  the "@" should appear on the first map.<br><br>

  All <b>lower-case</b> Latin letters from a to z and the colon are also special. You can use them
  to put entities on the map. For example:

  <pre>
  .......
  .cat:..
  .......
  .......
  </pre>

  This puts an entity called "cat" right under the colon.
  When the player steps on this entity, we go to the Ink knot called "cat"
  and display the text and choices defined there.
  So entities basically let you trigger dialogue.
  Do not forget to end your knots with
  "-> DONE" or you will get an Ink error.
  Refer to the <a href="https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md">Ink</a>
  docs to learn more. It's a great scripting language!

  You can also put the colon at the beginning to put the entity on the other side:

  <pre>
  .......
  .:cat..
  .......
  .......
  </pre>

  <h2>Customizing entities</h2>

  You can change the look of entities in the first block:

  <pre>
    giant: show: #, color: #f0f
  </pre>

  And you can make invisible entities:

  <pre>
    hall: show: no
  </pre>

  <h2>Customizing tiles</h2>

  You can also customize the display of characters.
  Putting this in the first block will display all "#" characters on the map
  as red exclamation marks instead:

  <pre>
    #: show: !, color: red
  </pre>

  And this will turn dollar symbols
  into blue asterisks the player can pass (walk) through:

  <pre>
    $: show: *, color: blue, pass: yes
  </pre>

  <h2>Special Ink Commands</h2>

  You can trigger special commands from your Ink block by starting a line
  with a <b>$</b> symbol.<br><br>

  <span class="mark">$end</span>: This ends the story. The map will become invisible, but the text box
  will still be shown, so you can display one last message to the player.
  In the demo game Aragog is an example of how to end the game.<br><br>

  <span class="mark">$block</span>: This blocks player movement, forcing them to make a choice (or many choices).<br><br>

  <span class="mark">$unblock</span>: This unblocks player movement, allowing them to walk again. Look at the demo
  game for an example of how $block and $unblock can be used: when the player enters
  the kitchen for the first time, they have to choose between two options. If you don't block,
  choices are optional and the player can just walk away from them.<br><br>

  <span class="mark">$move_player_to_map mapName</span>: You have to put the name of a map after this command. The command
  moves the player to the map with the specified name.
  If you are asking yourself what a map's name is, look at the second block, where you start
  maps like this:
  <pre>
      MAP: my-map1
  </pre>
  <b>my-map1</b> would be the map's name you have to use for "jump" (not: "MAP" which is
  just a keyword).<br><br>

  <span class="mark">$move_player x y</span>: moves the player to another position.<br><br>

  <span class="mark">$move_to_map entity_name map_name</span>: moves an entity to another map.<br><br>

  <span class="mark">$move entity_name x y</span>: moves an entity to another position.<br><br>

  <span class="mark">$remove entity_name</span>: remove an entity from the game.<br><br>
  
  <span class="mark">$change old_tile new_tile</span>: changes all tiles with a character
    to another character (on all maps)<br><br>  

  <span class="mark">$delay entity_name number</span>: sets the movement delay
  of the entity (see sequences below). 1 is full speed, 2 is half as fast (roughly),
  3 is a third of the speed etc.<br><br>

  

  Note: You can have multiple entities with the same name. $move_to_map and $move
  will only affect the first entity with this name however. $remove will remove all entities
  with this name.

  <h2>Sequences</h2>

  With sequences you can change stuff in real-time while the player is moving.<br><br>

  When the player is talking however, all real-time effects stop, so
  characters won't move as long as the text box with the Ink story
  is displayed. As soon as the player moves again, the real-time effects
  restart where they left off.<br><br>

  Sequences consist of a list of commands that run in order.
  The next command in the sequence triggers only when the previous command has completed.<br><br>

  This sets the delay of entity "hermione" to 3 and lets her walk around in a circle:

  <pre>
    $delay hermione 3
    $seq s1 loop walk hermione 4 4; walk hermione 10 9
  </pre>

  A sequence is defined like this:<br><br>

  $seq a_sequence_name loop [first_instruction]; [second_instruction]; [third_instruction] etc. ...<br><br>

  or like this (identical but without the "loop" keyword):<br><br>

  $seq a_sequence_name [first_instruction]; [second_instruction]; [third_instruction] etc. ...<br><br>

  The sequence_name has to be a single word and you can use any word you like.<br><br>

  The instructions can be any of the commands mentioned above, but without
  a leading $ symbol. They can also be special sequence commands that are
  only allowed inside sequences (see below).<br><br>

  Special sequence commands:<br><br>

  <span class="mark">walk entity_name</span> destination_x destination_y<br>
  The entity walks to the given location in a smart way. Smart means
  that the entity will use pathfinding to find a path through the map
  and will not walk through walls. Once the entity reaches the location, the next step in the sequence is triggered.<br><br>

  <span class="mark">primitive_walk entity_name</span> destination_x destination_y<br>
  This is like walk, but without path-finding. You can use this if you are sure that there are no walls between the starting point and the end point anyway, or if you WANT the entity to walk through walls.<br><br>

  <span class="mark">wait</span> number<br>
  The sequence waits for <number> time steps before proceeding to the next command in the sequence.
  (Note that this does not block game play. All sequences run in parallel. It just
  delays the beginning of the next step in the sequence.) <br><br>

  <span class="mark">chase</span> entity_name duration<br>
  The specified entity will start chasing the player. 
  [duration] must be a number. It specifies how long (how many time units)
  the entity should chase the player.
  If the entity catches the player OR the duration time elapses, the
  sequence moves on to the next step in the sequence.
  You can also not specify a duration in which case the entity will never stop chasing
  the player, but the next step in the sequence will also never be executed until
  the player has been caught.<br><br>

    <span class="mark">exec_ink knot_name</span>: Goes to an Ink knot but does not display any text (and does not run any special commands inside the Ink knot either). You use this to set Ink variables inside a sequence. In the example game, when Hermione reaches the library we execute an Ink knot to set a variable. Then we use that variable when the player meets her again, so that she says something else when she is waiting in front of the library. 
  <br><br>


  </body>
</html>
`