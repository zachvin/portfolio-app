# Abstract

The purpose of this project is to build skills in natural language processing and model deployment. I have currently trained a DistilBERT model for sentiment analysis on a set of short entries to identify whether each entry shows sadness, joy, love, anger, fear, or surprise. My next steps are to wrap it in a Docker container and an API and deploy it online.

# Technologies

- Natural language processing (BERT)
- PyTorch
- Docker
- ONNX

# Overview

1. Training the model
2. Exporting the model
3. Hosting the model

# Training the model

To train the model, I decided to fine-tune DistilBERT, which is a BERT derivative with slightly diminished performance alongside significantly decreased model size and complexity. I made this decision because I think the size tradeoff will make it more economical to host online. I trained it on Kaggle, and you can see the training process [here](https://www.kaggle.com/code/zvincent/sentiment-analysis).

# Exporting the model

# Hosting the model
