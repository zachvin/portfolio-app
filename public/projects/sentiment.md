# Abstract

The purpose of this project is to build skills in natural language processing and model deployment. I have trained a DistilBERT model for sentiment analysis on a set of short entries to identify whether each entry shows sadness, joy, love, anger, fear, or surprise. The GitHub repository can be found [here](https://github.com/zachvin/sentiment-analysis).

# Technologies

- Natural language processing (BERT)
- PyTorch
- FastAPI
- Docker

# Overview

1. Training the model
2. Exporting the model
3. Hosting the model

# Training the model

To train the model, I decided to fine-tune DistilBERT, which is a BERT derivative with slightly diminished performance alongside significantly decreased model size and complexity. I made this decision because I think the size tradeoff will make it more economical to host online. I trained it on Kaggle, and you can see the training process [here](https://www.kaggle.com/code/zvincent/sentiment-analysis).

# Exporting the model

To export the model, I saved the best weights and created a short `main.py` file that loads the model and adds a `/predict` endpoint with FastAPI. I then wrote a Dockerfile to build an image with all the necessary dependencies. After testing it on my local machine, I am ready to send the Dockerfile to a cloud service for hosting.

# Hosting the model

I have not yet hosted the model.
