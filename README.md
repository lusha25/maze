Labirint 

![image](https://github.com/user-attachments/assets/25a0d24a-30c7-43bb-8458-026790763347)

# Maze Game

## Overview
This project is a web-based maze-solving game that allows players to select different difficulty levels and attempt to solve a maze within a given time. The game also features an automated solution visualization that animates the path to solving the maze.

## Features
- Three difficulty levels: Easy, Medium, and Hard
- Countdown timer for added challenge
- Solution animation to visualize the correct path
- Clear solution option to restart the game
- Instructions and credits pop-ups

## Technologies Used
- HTML
- CSS
- JavaScript (Canvas API, Event Listeners, and Intervals)
- SweetAlert2 for pop-up messages

## How to Play
1. Choose a difficulty level by clicking the respective button:
   - Easy
   - Medium
   - Hard
2. The game timer will start based on the difficulty selected.
3. Navigate the maze to find the correct path.
4. If stuck, the automated solution can be triggered.
5. Click the "Clear" button to reset the solution.

## Code Structure
- `canvas` and `ctx` are used for drawing the solution path.
- `solutions` contains pre-defined paths for each difficulty level.
- `setIntervalAwaitable` manages the animation of the solution drawing.
- `drawSolution()` animates the correct path over time.
- `startGame(duration)` initializes the game timer.
- `clearSolution()` resets the canvas for a new attempt.
- SweetAlert2 provides user instructions and credits.

## Author
Developed by **Luka Dragan**

## Future Enhancements
- Add user-controlled movement through keyboard or touch controls.
- Implement a scoring system based on time taken to complete the maze.
- Introduce randomized maze generation for varied gameplay.

Enjoy solving the maze!
