/**
 * Union Game Bridge
 * Include this in each game HTML to sync scores back to the Union shell.
 * 
 * Usage: call unionScore(key, value) whenever score updates
 * 
 * Score keys:
 *   Block Blast  -> 'blockBlastHigh'
 *   2048         -> '2048High'
 *   Snake        -> 'snakeHigh'
 *   Pac-Man      -> 'pacmanHigh'
 *   Minesweeper  -> 'minesweeperWins'
 *   Sugar Blast  -> 'sugarBlastLevel'
 */
function unionScore(key, value) {
  // Save locally
  localStorage.setItem(key, value);
  // Notify parent shell
  try {
    window.parent.postMessage({ type: 'unionScore', key, value }, '*');
  } catch(e) {}
}
