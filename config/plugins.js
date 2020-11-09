module.exports = ({ env }) => ({
    // ...
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
            defaultFrom: 'lucas.tostee@gmail.com',
            defaultReplyTo: 'lucas.tostee@gmail.com',
        },
    },
    upload: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: 'eu-west-1',
            params: {
                Bucket: 'label-baraq',
            },
        },
    },
    // ...
});