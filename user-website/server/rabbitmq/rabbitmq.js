import amqp from "amqplib";

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
 * Sends a message to the specified RabbitMQ queue.
 * @param {string} queue - The name of the queue.
 * @param {string} message - The message to send.
 */
export async function sendMessage(queue, message) {
  try {
    // Ensure the connection and channel are initialized
    await initializeRabbitMQ();

    // Assert the queue (create it if it doesn't exist)
    await channel.assertQueue(queue, { durable: false });

    const messageToSend = JSON.stringify(message);

    // Send the message to the queue
    channel.sendToQueue(queue, Buffer.from(messageToSend));
    console.log(`[x] Sent: ${message}`);
  } catch (error) {
    console.error("Error sending message to RabbitMQ:", error);
  }
}

/**
 * Closes the RabbitMQ connection gracefully.
 */
export async function closeRabbitMQ() {
  try {
    if (connection) {
      await connection.close();
      console.log("RabbitMQ connection closed");
    }
  } catch (error) {
    console.error("Error closing RabbitMQ connection:", error);
  }
}
