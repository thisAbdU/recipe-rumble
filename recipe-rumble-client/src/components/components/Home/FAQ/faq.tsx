"use client";
import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import Image from 'next/image';

const FAQ = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const handleAccordionClick = (value: any) => {
        if (expandedItem === value) {
            setExpandedItem(null);
        } else {
            setExpandedItem(value);
        }
    };

    return (
        <div id='faq' className="flex flex-wrap gap-20 justify-between mt-20 mb-20 p-5 sm:pl-40 sm:pr-40">
            <div className='faq-container flex justify-center w-full md:w-auto'>
                <div style={{ position: 'relative' }} className="bg-primary h-70 w-60 text-white p-5 rounded-lg shadow-md flex-3">
                    <Image style={{ position: 'absolute', top: '-20px', right: '-50px', width: '400px' }} src="/assets/faq2.png" alt="FAQ Image" width={400} height={300} />
                    <p className='text-2xl mb-3 mt-32'>Still no luck? We can help!</p>
                    <p>Contact us and we will get back to you as soon as possible.</p>
                    <button className="bg-gray-500 text-white py-2 px-4 rounded mt-4">Submit a Request</button>
                </div>
            </div>
            <div className="flex-1">
                <h2 className="text-primary text-2xl font-bold mb-4 mt-6 sm:mt-0">Common Questions</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-1' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-1')}
                        >
                            What is Recipe Rumble?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            Recipe Rumble is a food website where people can purchase a variety of dishes. It also offers exciting cooking challenges for users to participate in and showcase their culinary skills.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-2' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-2')}
                        >
                            How can I participate in cooking challenges on Recipe Rumble?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            To participate in cooking challenges on Recipe Rumble, you need to sign up on our platform. Once registered, you can join any ongoing challenges and submit your entries for a chance to win exciting prizes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-3' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-3')}
                        >
                            What types of food can I purchase on Recipe Rumble?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            Recipe Rumble offers a wide variety of dishes ranging from appetizers, main courses, desserts, and beverages. You can explore different cuisines and order your favorite meals directly from our website.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-4' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-4')}
                        >
                            How do I place an order on Recipe Rumble?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            Placing an order on Recipe Rumble is simple. Browse through our menu, select the dishes you want to order, add them to your cart, and proceed to checkout. You can choose your preferred payment method and delivery option during checkout.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger
                            className={`py-2 px-4 rounded cursor-pointer mb-2 ${expandedItem === 'item-5' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-primary'}`}
                            onClick={() => handleAccordionClick('item-5')}
                        >
                            How can I contact Recipe Rumble for support?
                        </AccordionTrigger>
                        <AccordionContent className="bg-gray-100 text-black py-2 px-4 rounded mb-2">
                            If you need support, you can contact Recipe Rumble through our 'Submit a Request' form available on the website. Our support team will get back to you as soon as possible to assist with your queries.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
