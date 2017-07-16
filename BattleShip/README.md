# Rules for BattleShip

#### sizes A-G  => 1-8
- min 3
- N x M
 * Carrier - 5
 * BattleShip -4
 * Cruiser -3
  35 %
  cant be

#### Rules for placing Ships:
  * place each ship in any horizontal or vertical position, but not diagonally
  * Dont place a ship so that any part of it overlaps letters, numbers,
    the edge of the grid or another ship
  * Dont change the position of any ship once the game has begun.


  Rules of the game:

  The game is be played on a 10x10 grid.
  Each competitor will place each of 5 ships (of lengths 2, 3, 3, 4, 5) on their grid.
  No ships may overlap, but they may be adjacent.
  The competitors then take turns firing single shots at their opponent.
  A variation on the game allows firing multiple shots per volley, one for each surviving ship.
  The opponent will notify the competitor if the shot sinks, hits, or misses.
  Game play ends when all of the ships of any one player are sunk.

  Rules of the competition:

  The spirit of the competition is to find the best Battleship algorithm.
  Anything that is deemed against the spirit of the competition will be grounds for disqualification.
  Interfering with an opponent is against the spirit of the competition.
  Multithreading may be used under the following restrictions:
  No more than one thread may be running while it is not your turn. (Though, any number of threads may be in a "Suspended" state).
  No thread may run at a priority other than "Normal".
  Given the above two restrictions, you will be guaranteed at least 3 dedicated CPU cores during your turn.
  A limit of 1 second of CPU time per game is allotted to each competitor on the primary thread.
  Running out of time results in losing the current game.
  Any unhandled exception will result in losing the current game.
  Network access and disk access is allowed, but you may find the time restrictions fairly prohibitive. However, a few set-up and tear-down methods have been added to alleviate the time strain.
  Code should be posted on stack overflow as an answer, or, if too large, linked.
  Max total size (un-compressed) of an entry is 1 MB.
  Officially, .Net 2.0 / 3.5 is the only framework requirement.
  Your entry must implement the IBattleshipOpponent interface.

  Scoring:

  Best 51 games out of 101 games is the winner of a match.
  All competitors will play matched against each other, round-robin style.
  The best half of the competitors will then play a double-elimination tournament to determine the winner. (Smallest power of two that is greater than or equal to half, actually.)
  I will be using the TournamentApi framework for the tournament.
  The results will be posted here.
  If you submit more than one entry, only your best-scoring entry is eligible for the double-elim.
