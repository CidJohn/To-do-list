import pygame
import time
import random

pygame.init()

# colors
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

# snake
snake_pos = [[100, 50], [90, 50], [80, 50]]
snake_speed = 10

# food
food_pos = [random.randrange(1, 49) * 10, random.randrange(1, 49) * 10]
food_spawn = True

# direction
direction = "RIGHT"
change_to = direction

# score
score = 0

# game over
game_over = False

# create display
win = pygame.display.set_mode((400, 400))
pygame.display.set_caption("Snake Game")

# create snake
snake = pygame.Surface((10, 10))
snake.fill(GREEN)

# create food
food = pygame.Surface((10, 10))
food.fill(RED)

# create scoreboard
score_font = pygame.font.Font('freesansbold.ttf', 18)

def update_snake_pos():
    for i in range(len(snake_pos) - 1, 0, -1):
        snake_pos[i] = snake_pos[i - 1]
    if direction == "RIGHT":
        snake_pos[0][0] += snake_speed
    elif direction == "LEFT":
        snake_pos[0][0] -= snake_speed
    elif direction == "UP":
        snake_pos[0][1] -= snake_speed
    elif direction == "DOWN":
        snake_pos[0][1] += snake_speed

def draw_snake():
   