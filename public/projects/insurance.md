# Abstract

This is a machine learning classification project meant to predict whether an individual is approved or not. It uses several columns of categorical and numerical data and includes missing rows, incomplete data, and inconsistent data types. See the code on Kaggle [here](https://www.kaggle.com/code/zvincent/ps4e7-xgboost-klib-optuna-submission).

# Overview

1. Data preprocessing
2. Model selection
3. Training

# Data preprocessing

For this project, I did some basic preprocessing to prepare the dataset for training, including encoding categorical variables.

# Model selection

I decided to use XGBoost's random forest regressor due to the categorical nature of the predictions and its optimized approach.

# Training

I trained the model using Optuna, Python's automated model optimization library. I achieved a score of 0.81 using the set of optimized parameters that Optuna found. The linked notebook above is the final-product submission that includes the exact parameters for reproducible results.
