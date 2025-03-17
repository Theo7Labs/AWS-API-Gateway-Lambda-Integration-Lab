exports.handler = async (event) => {
    const json_questions = [
        { question: "Can I access the infrastructure that AWS Lambda runs on?", answer: "No. AWS Lambda operates the compute infrastructure on your behalf, allowing it to perform health checks, apply security patches, and do other routine maintenance." },
        { question: "What is the AWS Lambda execution environment?", answer: "AWS Lambda provides the Amazon Linux build of OpenJDK 11." }
    ];

    const rand = Math.floor(Math.random() * json_questions.length);
    const response = {
        statusCode: 200,
        body: JSON.stringify(json_questions[rand]),
    };

    console.log(response);
    return response;
};
