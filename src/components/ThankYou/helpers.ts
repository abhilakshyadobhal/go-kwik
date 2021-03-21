export type faqType = {
    question: string,
    imgSrc: string,
    answer: string
}

export const faqs: faqType[] = [
    {
        question: "Where will I get the gift card?",
        answer: "You will receive it on Whatsapp/SMS on you mobile",
        imgSrc: "http://pngimg.com/uploads/whatsapp/small/whatsapp_PNG21.png"
    },
    {
        question: "When will I receive the gift card?",
        answer: "Within 48 hours, when your Man Matters order is delivered.",
        imgSrc: "http://icons.iconseeker.com/png/fullsize/sticker-pack-1/package-2.png"
    },
    {
        question: "What if I cancel the order?",
        answer: "The voucher will not delivered if you cancel the order.",
        imgSrc: "https://www.flaticon.com/svg/vstatic/svg/753/753345.svg?token=exp=1616307607~hmac=a0e74ddff420721468d249b7a74574a2"
    },
]