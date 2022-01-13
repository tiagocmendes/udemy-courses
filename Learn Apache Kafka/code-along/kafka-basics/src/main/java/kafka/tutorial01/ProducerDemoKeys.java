package kafka.tutorial01;

import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;
import java.util.concurrent.ExecutionException;

public class ProducerDemoKeys {

    public static void main(String[] args) throws ExecutionException, InterruptedException {

        Logger logger= LoggerFactory.getLogger(ProducerDemoKeys.class);

        String bootstrapServers = "localhost:9092";

        // create Producer properties
        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        // create the producer
        KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);


        for(int i = 0; i < 10; i++) {

            String topic = "first_topic";
            String value = "hello world " + Integer.toString(i);
            String key = "id_" + Integer.toString(i);

            // create a producer record
            ProducerRecord<String, String> record = new ProducerRecord<String, String>(topic, key, value);

            logger.info("Key: " + key);

            // send data
            producer.send(record, new Callback() {
                @Override
                public void onCompletion(RecordMetadata recordMetadata, Exception e) {
                    // executes every time a record is successfully sent or an exception is thrown

                    if (e == null) {
                        StringBuilder sb = new StringBuilder();
                        sb.append("Received new metadata \n");
                        sb.append("Topic: " + recordMetadata.topic() + "\n");
                        sb.append("Partition: " + recordMetadata.partition() + "\n");
                        sb.append("Offset: " + recordMetadata.offset() + "\n");
                        sb.append("Timestamp: " + recordMetadata.timestamp() + "\n");

                        // the record was successfully sent
                        logger.info(sb.toString());
                    } else {
                        logger.error("Error while producing", e);
                    }
                }
            }).get();

            producer.flush();
        }


        producer.close();

    }
}
