interface NumberForDirection {
	[label: number]: string;
}

interface DirectionForNumber {
	[label: string]: number;
}

/**
 * marsRover accepts the rovers i.e array of object
 * object consist of the start co-ordinate and the moves that
 * rover has to follow.
 * @param rovers
 */
const marsRover = function (rovers): (number | string)[] {
	/** result array will hold final value of X and y co-ordinate and the final direction.
	 * Initially intialized to be empty.
	 */
	let result: (number | string)[] = [];

	/** dir is an object in which Numbers are assigned to Directions as a key value pair */
	let dir: NumberForDirection = { 1: 'N', 2: 'W', 3: 'E', 4: 'S' };

	/** Similar to above object dirVal is used to get the respective number for the given direction */
	let dirVal: DirectionForNumber = { N: 1, W: 2, E: 3, S: 4 };

	/** Iterate through all the rovers in the rovers array */
	for (let j = 0; j < rovers.length; j++) {
		// destructure the rovers to extract start co-ordinate and moves for the rover
		let { start, moves } = rovers[j];

		// variable to get x, y co-ordinate and also the current direction.
		let x: number, y: number, d: string;
		[x, y, d] = start;

		// currDir has the current direction of the rover
		let i = 0,
			currDir = dirVal[d];

		// Iterate through all the moves in the move array
		while (i < moves.length) {
			// Based on the current move the rover is moved and new direction is obtained.

			// checkDirection function gives the next direction based on the current direction and on the move i.e Left or Right
			if (moves[i] == 'L') {
				currDir = checkDirection(currDir, 'L');
			} else if (moves[i] == 'R') {
				currDir = checkDirection(currDir, 'R');
			} else {
				// Here 2 and 3 implies West and East respectively
				// If it is West and East then X will be modified else Y will be modified
				if (currDir == 2 || currDir == 3) {
					x = moveRover(currDir, x);
				} else {
					y = moveRover(currDir, y);
				}
			}
			i++;
		}

		// finially after executing all the moves the value of the x , y, and direction is stored in an array
		// and that array is stored in the result;
		let arr: any = [x, y, dir[currDir]];
		result.push(arr);
	}
	return result;
};

/**
 * MoveRover functions helps in moving the rover one unit at a time
 * Based on the direction it either subtracts or add the move to the rover
 * Following number indicates their respective directions
 * 1-> North, 2-> West, 3-> East, 4-> South
 * If the direction is North(1) or East(2) the respective co-ordinate will be incremented
 * If the direction is South(4) or West(3) the respective co-ordinate will be decremented
 * @param currDir
 * @param dir
 */
const moveRover = function (currDir, coordinate): number {
	if (currDir == 1 || currDir == 3) coordinate += 1;
	else coordinate -= 1;
	return coordinate;
};

/**
 * CheckDirection function helps with modifiying the direction
 * of the rover.
 *
 */
const checkDirection = function (currDir, move): number {
	// If the current Direction is North and next move is Left then rover will direct to West else on right it will direct to East
	if (currDir == 1) currDir = move == 'L' ? 2 : 3;
	// If the current Direction is West and next move is Left then rover will direct to South else on right it will direct to North
	else if (currDir == 2) {
		currDir = move == 'L' ? 4 : 1;
	}
	// If the current Direction is East and next move is Left then rover will direct to North else on right it will direct to South
	else if (currDir == 3) {
		currDir = move == 'L' ? 1 : 4;
	}
	// If the current Direction is South and next move is Left then rover will direct to East else on right it will direct to West
	else if (currDir == 4) {
		currDir = move == 'L' ? 3 : 2;
	}

	// return the current direction
	return currDir;
};

// Calling the function marsRover and console logging the output
console.log(
	marsRover([
		{
			start: [1, 2, 'N'],
			moves: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
		},
		{
			start: [3, 3, 'E'],
			moves: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
		},
	])
);
