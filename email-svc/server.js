import amqp from "amqplib";
import dotenv from "dotenv";

import { emailSignups } from "./sendgrid/sendgrid.js";

dotenv.config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;

async function startConsumer() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  const queue = "user.created";

  await channel.assertQueue(queue, { durable: false });

  console.log(`Listening for messages on "${queue}"...`);
  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString());
      console.log("Received event:", content);

      // Send message
      emailSignups(content.data.email);

      // Acknowledge message
      console.log("Signup email successfully sent to", content.data.email);

      channel.ack(msg);
    }
  });
}

startConsumer().catch(console.error);

function scanContent(content) {
  return Math.random() < 0.5;
}
