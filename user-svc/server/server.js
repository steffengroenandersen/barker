import dotenv from "dotenv";
import { consumeMessages } from "./rabbitmq/rabbitmq.js";

dotenv.config();

const QUEUE_NAME = "user-svc";

// Start consuming messages and log them
consumeMessages(QUEUE_NAME, (message) => {
  console.log(`[x] Received: ${message}`);

  const parsedMessage = JSON.parse(message);
  console.log(parsedMessage.method);
});

// Keep the process running
console.log("Message consumer is running...");
