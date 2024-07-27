# Algocode-Submission-Service

---

## Overview

Algocode-Submission-Service manages the submission process of user-provided code submissions for the Algocode platform. It utilizes Fastify to ensure high performance and efficiency, enabling fast request handling and response times.

The **Algocode-Submission-Service** is connected to the **Algocode-Evaluate-Service** using Redis Queue to facilitate asynchronous communication. This setup allows for efficient handling of job submissions and ensures scalability and reliability in processing tasks.

### How It Works

1. The **Submission Service** enqueues a job in the Redis Queue upon receiving a submission.
2. The **Evaluate Service** listens to the Redis Queue, picks up the job, and processes it.

This asynchronous communication mechanism helps in decoupling the submission and evaluation logic, leading to better performance and scalability.

---

## Features

- **Fastify Framework**: Built with Fastify to optimize speed and scalability, ensuring rapid processing of code submissions.

- **BullMQ Integration**: Utilizes BullMQ for queuing user-submitted code, enabling orderly and efficient execution in a scalable manner.

---

## How to Start the Service

To run Algocode-Submission-Service locally, follow these steps:

- Start your mongoDB Atlas
- Run redis-server
- Run npm start
