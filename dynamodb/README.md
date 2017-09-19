# Database model

Q: What do you want to query?
A: 
Phase 1:
 - All runlog events from specific user.

Phase 2:
- Ranged runlog events from specific user.

## Table "runlog"

Partition key: userid, same user data resides on same partition
Sort key: datetime, epoch time of the event

## Table "authorization"

Primary key: username --> unique username. Must always be checked when registering user if exists

# Examples

## Create table via commandline to local db

```
aws dynamodb create-table --cli-input-json file://g:/github/sportbook/dynamodb/runlog/tables/runlog.json --endpoint-url http://localhost:8000
```