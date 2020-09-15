var marsRover = function (rovers) {
    console.log('str');
    var result;
    var dir = { 1: 'N', 2: 'W', 3: 'E', 4: 'S' };
    var dirVal = { N: 1, W: 2, E: 3, S: 4 };
    for (var j = 0; j < rovers.length; j++) {
        var _a = rovers[j], start = _a.start, moves = _a.moves;
        var x = void 0, y = void 0, d = void 0;
        x = start[0], y = start[1], d = start[2];
        var i = 0, currDir = dirVal[d];
        while (i < moves.length) {
            if (moves[i] == 'L') {
                currDir = checkDir(currDir, 'L');
            }
            else if (moves[i] == 'R') {
                currDir = checkDir(currDir, 'R');
            }
            else {
                if (currDir == 2 || currDir == 3) {
                    x = moveRover(currDir, x);
                }
                else {
                    y = moveRover(currDir, y);
                }
            }
            i++;
        }
        var arr = [x, y, dir[currDir]];
        result.push(arr);
    }
    console.log(result);
    return result;
};
var moveRover = function (currDir, dir) {
    if (currDir == 1)
        dir += 1;
    else if (currDir == 4)
        dir -= 1;
    else if (currDir == 2)
        dir -= 1;
    else
        dir += 1;
    return dir;
};
var checkDir = function (currDir, move) {
    if (currDir == 1) {
        currDir = move == 'L' ? 2 : 3;
    }
    else if (currDir == 2) {
        currDir = move == 'L' ? 4 : 1;
    }
    else if (currDir == 3) {
        currDir = move == 'L' ? 1 : 4;
    }
    else if (currDir == 4) {
        currDir = move == 'L' ? 3 : 2;
    }
    return currDir;
};
console.log(marsRover([
    {
        start: [1, 2, 'N'],
        moves: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
    },
    {
        start: [3, 3, 'E'],
        moves: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']
    },
]));
