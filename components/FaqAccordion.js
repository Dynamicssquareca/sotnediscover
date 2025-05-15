import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const FaqAccordion = ({ faqList = [] }) => {
  console.log(faqList)
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    setOpen(open === id ? undefined : id);
  };

  const defaultFaqs = [
    {
      title: "What types of memorials do you supply?",
      description: "We supply a wide variety of memorials tailored for wholesale partners.",
    },
    {
      title: "Where are your memorials manufactured?",
      description: "Our memorials are manufactured in trusted facilities globally.",
    },
    {
      title: "Do you supply memorials exclusively to wholesalers?",
      description: "Yes, our services are specifically catered to wholesale clients.",
    },
    {
      title: "What materials do you use for your memorials?",
      description: "We use granite, marble, and other high-quality materials.",
    },
    {
      title: "Can you customize memorials according to our specifications?",
      description: "Yes, customization is available based on your requirements.",
    },

  ];

  const validFaqList = faqList?.filter(
    item => item.title?.trim() && item.description?.trim()
  );

  const items = validFaqList && validFaqList.length > 0 ? validFaqList : defaultFaqs;

  return (
    <div className="form-left">
      <div className="accordion-one">
        <Accordion open={open} toggle={toggle}>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader targetId={`${index + 1}`}>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h3>{item.title}</h3>
                </div>
              </AccordionHeader>
              <AccordionBody accordionId={`${index + 1}`}>
                <p>{item.description}</p>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="text-right-row">
        <a href="/" className="btn btn-four m-t-30">
          Read More
        </a>
      </div>
    </div>
  );
};

export default FaqAccordion;
