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
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
        // provider: 'aws-s3',
        // providerOptions: {
        //     accessKeyId: env('AWS_ACCESS_KEY_ID'),
        //     secretAccessKey: env('AWS_ACCESS_SECRET'),
        //     region: 'eu-west-1',
        //     params: {
        //         Bucket: 'label-baraq',
        //     },
        // },
    },
    // ...
});