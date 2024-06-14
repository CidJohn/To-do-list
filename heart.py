import turtle

class Face:
    def __init__(self, position):
        self.position = position
        self.eyes = []
        self.nose = None
        self.mouth = None

class Face:
    # ...
    def add_eyes(self, left_eye, right_eye):
        self.eyes.append(left_eye)
        self.eyes.append(right_eye)

class Face:
    # ...
    def add_nose(self, nose_position):
        self.nose = nose_position

class Face:
    # ...
    def add_mouth(self, mouth_position, mouth_size):
        self.mouth = (mouth_position, mouth_size)

def draw_face(face):
    # Draw the eyes
    for eye in face.eyes:
        pygame.draw.circle(screen, BLACK, eye, 5)

    # Draw the nose
    pygame.draw.circle(screen, BLACK, face.nose, 5)

    # Draw the mouth
    pygame.draw.ellipse(screen, BLACK, face.mouth[0], face.mouth[1])

face = Face

