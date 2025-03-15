# Abstract

This project assesses the ability of a deep reinforcement learning neural network to build proficiency in Gymnasium’s swinging pendulum environment. A reinforcement learning algorithm uses past experiences to build an association between the environment’s current state and the next state given a certain action. Through training, the model improves score estimates, or Q values, for each potential action A in a state S, and learns which actions return the highest scores. Gymnasium is a common library used in AI applications that provides prebuilt environments that the AI model can interact with.

# Results

My project consists of several Python files as outlined in Table 1 below. When the pendulum_deep.py file is run, the deep Q agent begins training automatically until n_games have been played. The code will continuously print output including the current score, epsilon, and game/epoch number. The program saves plotted visualizations in the plots/ folder and the neural network weights in the models/ folder. The average score of the model more than doubles throughout training from a value of about -1300 to -500 (the highest possible score is 0). The best network models are saved as models/best_eval and models/best_next, respectively.
