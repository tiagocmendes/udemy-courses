# Learn Apache Kafka for Beginners

## Command Line Interface 101

### Useful commands:

#### List all topics  
```console
$ kafka-topics --bootstrap-server localhost:9092 --list
```  

#### Create a topic  

```console
$ kafka-topics --bootstrap-server localhost:9092 --topic topic_name --create --partitions 3 --replcation-factor 1
```  

**Note:** The replication factor can not be higher than the number of brokers running.  

#### Describe a topic  

```console
$ kafka-topics --bootstrap-server localhost:9092 --topic topic_name --describe
```  

#### Delete topics  

```console
$ kafka-topics --bootstrap-server localhost:9092 --topic topic_name --delete
```

#### Send messages to topics

```console
$ kafka-console-producer --broker-list localhost:9092 --topic first_topic
> Hello
> How are you?
```

#### Producer with properties

```console
kafka_2.13-3.0.0 kafka-console-producer --broker-list localhost:9092 --topic first_topic --producer-property acks=all
> Some message that is acked
> Acked is awesome
```

#### Consume messages in realtime from topic

```console
kafka-console-consumer --bootstrap-server localhost:9092 --topic first_topic
```

#### Consume messages from beginning

```console
$ kafka-console-consumer --bootstrap-server localhost:9092 --topic first_topic --from-beginning
```

#### Consume from specific group  

```console
$ kafka-console-consumer --bootstrap-server localhost:9092 --topic first_topic --group my-group
```

#### List consumer groups  
```console
$ kafka-consumer-groups --bootstrap-server localhost:9092 --list
```  

#### Describe group

```console
$ kafka_2.13-3.0.0 kafka-consumer-groups --bootstrap-server localhost:9092 --group my-group --describe
```