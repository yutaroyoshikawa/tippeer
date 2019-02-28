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

    methodData: [{
        data: {
            supportedNetworks: ['visa', 'mastercard', 'diners', 'jcb'],
        },
        supportedMethods: ['basic-card'],
    }],

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