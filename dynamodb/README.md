# Database model

Q: What do you want to query?
A: 
Phase 1:
 - All runlog events from specific user.

Phase 2:
- Ranged runlog events from specific user.

## Table "runlog"

Primary key: eventId --> composite key of uuid:userId:date
Sort key: date
Secondary index: TBD

## Table "authorization"

Primary key: username --> unique username. Must always be checked when registering user if exists

# Examples

## Create table via commandline to local db

```
aws dynamodb create-table --cli-input-json file://g:/github/sportbook/dynamodb/tables/runlog.json --endpoint-url http://localhost:8000
```