const AWS = requre("aws-sdk")


const fetchTodo = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient()

    let todo
    try {
        const results = await dynamodb.scan({TableName: "TodoTable"}).promise()

        todos = results.items

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(todos)
    }

}


module.exports = {
    handler: fetchTodo
}