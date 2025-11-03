# NichiDoku
Hamming codes felt like sudoku so I made puzzle game out of it.

## TODO
- [ ] Add hitboxes to the grid
- [ ] Add visual help grid, when checking for even numbers of 1s
- [ ] Generate random message
- [ ] "Create check bit" part of the game is done.
- [ ] "Find faulty bit" part of the game is done.

## Game Sequence
In the first step, the players job is to create the correct check bits.
To do this they follow a visual guide which shows where to count all ones,
and if there is an uneven number of ones flip the check bit (green box) which
is inside this group.

When the player have all checkbits and also presses CHECK, the player enters
the next step.

In the second step, the player gets a filled out board, and is supposed to
do a manual check to see if there is any bits flipped in the message, if
a flipped bit is found the player clicks on that square to flip it.

When the player have checked the whole board and presses CHECK, the player
is returned to step one.
