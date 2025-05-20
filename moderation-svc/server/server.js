import amqp from "amqplib";
import dotenv from "dotenv";

dotenv.config();

const RABBITMQ_URL = process.env.RABBITMQ_URL;

async function startConsumer() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  const queue = "bark.created";

  await channel.assertQueue(queue, { durable: false });

  console.log(`Listening for messages on "${queue}"...`);
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString());
      console.log("Received event:", content);

      // Do something useful, like moderation or logging
      channel.ack(msg);
    }
  });
}

startConsumer().catch(console.error);
