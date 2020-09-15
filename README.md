# DealerOn-Assessment

## Problem Statement
NASA intends to land robotic rovers on Mars to explore a particularly curious-looking plateau. The rovers must
navigate this rectangular plateau in a way so that their on board cameras can get a complete image of the
surrounding terrain to send back to Earth.  


A simple two-dimensional coordinate grid is mapped to the plateau to aid in rover navigation. Each point on the
grid is represented by a pair of numbers X Y which correspond to the number of points East or North, respectively,
from the origin. The origin of the grid is represented by 0 0 which corresponds to the southwest corner of the
plateau. 0 1 is the point directly north of 0 0, 1 1 is the point immediately east of 0 1, etc. A rover’s current
position and heading are represented by a triple X Y Z consisting of its current grid position X Y plus a letter Z
corresponding to one of the four cardinal compass points, N E S W. For example, 0 0 N indicates that the rover is
in the very southwest corner of the plateau, facing north.  


NASA remotely controls rovers via instructions consisting of strings of letters. Possible instruction letters are L,
R, and M. L and R instruct the rover to turn 90 degrees left or right, respectively (without moving from its current
spot), while M instructs the rover to move forward one grid point along its current heading.
Your task is write an application that takes the test input (instructions from NASA) and provides the expected
output (the feedback from the rovers to NASA). Each rover will move in series, i.e. the next rover will not start
moving until the one preceding it finishes. 



# Problem statement summary

* The given problem statement states that given a Rover along with its starting co-ordinate , the moves that rover has to follow and the exploration area. We have to return the final position and direction of the Rover after it has executed all the moves.

## Intuition to Solve the problem

* The changes in the moves of the rover depends on the direction in which the rover is currently facing. 
* X and Y co-ordinates has to be changed based on the direction of the rover
* Suppose the rover is facing North or South direction then only X co-ordinates will change.
* Similarly, when rover is facing West or East then only Y co-ordinates will change.
* Depending upon the direction the value of X and Y co-ordinates would be incremented or decremented.
* For example: For North and East direction the value will be always incremented
and for South and West the value will be always decremented.

**Note**: The code description is give in the code for the marsRover in the comments
To run the code use the following command.


```
npx ts-node mars.ts
```
