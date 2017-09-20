exports.putRunlogItemForUsername = (username) => {
    const epochNow = (new Date()).getTime();
    return {
        Item: {
            "username": {
                S: username
            },
            "datetime": {
                N: epochNow.toString()
            },
            "length": {
                N: "10"
            }
        },
        TableName: "runlog"
    }
}

exports.getRunlogByUsername = (username) => {
    return {
        TableName: "runlog",
        ExpressionAttributeValues: {
            ":v1": {
                S: username
            }
        },
        KeyConditionExpression: "username = :v1",
        ScanIndexForward: true
    }
};