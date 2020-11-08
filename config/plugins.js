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
    // ...
});