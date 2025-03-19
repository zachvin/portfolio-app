# Abstract

This is an ongoing project that I'm working on with a Notre Dame professor that uses webcam input to predict gaze direction. I use PyTorch for the neural networks and facial features from MediaPipe to select regions of interest. I developed the entire application. Because the code is for research purposes, the repository is currently private.

# Technologies

- PyTorch
- OpenCV
- MediaPipe
- Convolutional neural networks

# Overview

1. MediaPipe implementation
2. Data collection and preprocessing
3. Model selection
4. Training and performance

# MediaPipe implementation

In order to get landmarks from images of a face (eye locations, etc.) I used Google's MediaPipe. I used OpenCV to get image data from the user's webcam, which is then put into MediaPipe's face landmark detector to extract cropped images of the left eye.

# Data collection and preprocessing

I then moved on to creating `collection.py`, a user-friendly Python-powered interface that asks the user to track a circle that moves across the screen. The program takes a picture of the face at each frame and bundles these pictures under a single unique tag. I collected 4,500 images from a group of volunteers.

`preprocess.py` preprocesses this image data. This is where MediaPipe is implemented to extract cropped regions of the face and eye.

# Model selection

I created two PyTorch models for this purpose. The first is a simple two-layer convolutional neural network with a fully connected final layer with two output neurons to estimate the x and y gaze direction of the left eye in radians. The second model is an implementation of RESNET-18 with a similar final layer.

# Training and performance

I trained these models on Notre Dame's high performance computing cluster. The best achieved performance had an average MSE of 0.05 radians.
