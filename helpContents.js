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

    </style>
  </head>
  <body>
  <h1>ASCIINK</h1>
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
    title:  title: Example Game
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
    title:      title: My Funky Game
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

  The "@" character is also special. It signifies the player starting location.<br><br>

  All <b>lower-case</b> Latin letters from a to z and the colon are also special. You can use them
  to put markers on the map. For example:

  <pre>
  .......
  .cat:..
  .......
  .......
  </pre>

  This puts a marker called "cat" right under the colon.
  When the player walks on this marker, we go the Ink knot called "cat"
  and display the text and choices defined there.
  So markers basically let you trigger dialogue.
  Refer to the <a href="https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md">Ink</a>
  docs to learn more. It's a great scripting language!

  You can also put the colon at the beginning to put the marker on the other side:

  <pre>
  .......
  .:cat..
  .......
  .......
  </pre>

  <h2>Customizing markers</h2>

  You can change the look of markers in the first block:

  <pre>
    giant: show: #, color: #f0f
  </pre>

  And you can make invisible markers:

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

  </body>
</html>
`