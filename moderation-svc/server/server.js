import amqp from "amqplib";
import dotenv from "dotenv";
import { sendMessage } from "./rabbitmq/rabbitmq.js";

dotenv.config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;

async function startConsumer() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  const queue = "bark.created";

  await channel.assertQueue(queue, { durable: false });

  console.log(`Listening for messages on "${queue}"...`);
  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString());
      console.log("Received event:", content);

      const isClean = scanContent(content);
      if (!isClean) {
        try {
          await sendMessage("bark.flagged", {
            type: "bark.flagged",
            data: content,
            timestamp: new Date().toISOString(),
          });
        } catch (err) {
          console.error("Failed to send RabbitMQ message", err);
        }
      }
      channel.ack(msg);
    }
  });
}

startConsumer().catch(console.error);

function scanContent(content) {
  return Math.random() < 0.5;
}
