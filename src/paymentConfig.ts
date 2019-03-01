import { PaymentRequestParams } from 'react-payment-request-api';

// const detail: PaymentDetailsInit = {
//     displayItems: [{
//         amount: { currency: 'JPY', value: '65.00' },
//         label: 'Original donation amount',

//     }, {
//         amount: { currency: 'JPY', value: '-10.00' },
//         label: 'Friends and family discount',

//     }, {
//         amount: { currency: 'JPY', value: '10.00' },
//         label: 'Delivery tax',
//         pending: true,

//     }],
//     total: {
//         amount: { currency: 'USD', value: '55.00' },
//         label: 'Total due',

//     },
// };

const getConfig = (paymentDetail: PaymentDetailsInit) => ({
    details: paymentDetail,

    methodData: [
        {
            data: {
                supportedNetworks: ['visa', 'mastercard', 'diners', 'jcb'],
            },
            supportedMethods: ['basic-card'],
        },
        {

            data: {
                allowedCardNetwork: ['AMEX', 'MASTERCARD', 'VISA', 'DISCOVER', 'JCB'],
                environment: 'TEST',
                merchantId: 'fake',
                paymentMethodTokenizationParameters: {
                    parameters: {
                        'gateway': 'stripe',
                        'stripe:publishableKey': 'fake',
                        'stripe:version': '2016-07-06'
                    },
                    tokenizationType: 'GATEWAY_TOKEN',

                },
            },
            supportedMethods: ['https://android.com/pay'],
        },
        {

            data: {
                countryCode: 'JP',
                merchantCapabilities: ['supportsDebit'],
                merchantIdentifier: 'merchant.com.example',
                supportedNetworks: ['masterCard', 'visa', 'jcb'],
                version: 3,
            },
            supportedMethods: 'https://apple.com/apple-pay',
        },
    ],

    onShowFail: (error) => null,

    onShowSuccess: (result, resolve, reject): void => {
        /* tslint:disable-next-line:no-console */
        console.log('Result:', result);
        // make the payment
        setTimeout(resolve, 2000);
    },
    /* tslint:disable-next-line:no-console */

    options: {
        requestPayerEmail: false,
        requestPayerPhone: false,
        requestShipping: false,
    },
}) as PaymentRequestParams;

export default getConfig;