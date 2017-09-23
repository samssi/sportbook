exports.putRunlogItemForUsername = (username, length) => {
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
                N: length.toString()
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