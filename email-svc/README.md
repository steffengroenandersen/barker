Generate a Unique Identifier (GUID/UUID) in the User Website service
Every time the User Website service publishes a message to the queue (e.g., a request to send an email), include a unique, immutable identifier with the message. This could be a UUID generated at the moment of the email request creation.

Include the UUID with the message sent to the Email Notification Service
The message payload consumed by the Email Notification Service includes this unique ID alongside email details (recipient, subject, body, etc.).

Store processed message IDs in the Email Notification Service
In the Email Notification Service, maintain a persistent store (e.g., a MongoDB collection or Redis cache) that tracks which message IDs have already been processed.

Check incoming messages against stored IDs
When the Email Notification Service receives a message from the queue, it first checks if the message’s unique ID already exists in the store.

If the ID is found, it means the message was already processed, so the service ignores it to prevent duplicate emails.

If the ID is not found, the service processes the message (sending the email) and saves the ID in the store to mark it as processed.

Cleanup or expiration (optional)
Depending on your storage capacity and data retention needs, you may want to implement a TTL (time-to-live) on stored message IDs so that old IDs are cleaned up after a reasonable period.
