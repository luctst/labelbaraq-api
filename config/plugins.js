module.exports = ({ env }) => {
    console.log(process.env);
    return {
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
                cloud_name: process.env.CLOUDINARY_NAME,
                api_key: process.env.CLOUDINARY_KEY,
                api_secret: process.env.CLOUDINARY_SECRET,
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
    }
};