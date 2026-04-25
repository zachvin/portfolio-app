# Abstract

Testify is a web application I built in college that lets you deploy a neural network to the cloud in a single click. The user first wraps their model in a FastAPI app with a `/predict` endpoint, then uploads that project to Testify. The backend containerizes it and deploys it to Google Kubernetes Engine, giving the user a live endpoint they can query directly from the app. The goal was to remove the infrastructure barrier between training a model and sharing it.

# Technologies

- React, CSS
- Python, FastAPI
- Docker
- Google Kubernetes Engine (GKE)
- Google Cloud Build, Google Container Registry

# Overview

1. Wrapping the model in FastAPI
2. Containerization and registry push
3. Kubernetes deployment
4. Live API interaction

# Wrapping the model in FastAPI

Before uploading, the user wraps their model in a FastAPI app with a `/predict` endpoint that accepts a JSON payload and returns the model's output. Testify expects this structure — the upload is a self-contained Python project with a `main.py` entry point and a `requirements.txt`. This keeps Testify's deployment logic simple and gives the user full control over their inference logic.

# Containerization and registry push

The uploaded project is bundled into a Docker image along with its dependencies. The backend triggers a Google Cloud Build job that builds the image remotely and pushes it to Google Container Registry. This avoids needing Docker installed on the server and keeps the build pipeline entirely within Google Cloud.

# Kubernetes deployment

Once the image is in the registry, the backend applies a Kubernetes deployment and service manifest to a GKE cluster using the Google Cloud client libraries. The service is exposed via a LoadBalancer, which provisions an external IP. The deployment completes in under two minutes from the time the user hits upload.

# Live API interaction

The app polls for the external IP and surfaces it in the UI once it's available. The user can then send test requests directly from the browser — entering a JSON payload and seeing the model's prediction returned in real time. The endpoint is persistent and can be shared or called from any HTTP client.
