import amqp from "amqplib";
import dotenv from "dotenv";

dotenv.config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;

let connection = null;
let channel = null;

/**
 * Initializes the RabbitMQ connection and channel.
 */
async function initializeRabbitMQ() {
  if (!connection) {
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    console.log("RabbitMQ connection and channel established");
  }
}

/**
 * Consumes messages from the specified RabbitMQ queue.
 * @param {string} queue - The name of the queue.
 * @param {function} onMessage - Callback to handle received messages.
 */
export async function consumeMessages(queue, onMessage) {
  try {
    await initializeRabbitMQ();
    await channel.assertQueue(queue, { durable: false });
    console.log(`[*] Waiting for messages in queue: ${queue}`);
    channel.consume(queue, (msg) => {
      if (msg !== null) {
        const messageContent = msg.content.toString();
        onMessage(messageContent); // Pass the message to the callback
        channel.ack(msg); // Acknowledge the message
      }
    });
  } catch (error) {
    console.error("Error consuming messages from RabbitMQ:", error);
  }
}
