import React, { useState } from 'react';
import ModelBox from '@/components/ModelBox';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const FaqAccordion = ({ faqList = [] }) => {
  // console.log(faqList)
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    setOpen(open === id ? undefined : id);
  };

  const defaultFaqs = [
    {
      title: "Are you a granite headstone manufacturer or trader?",
      description: "Stone Discover India is a direct granite headstone manufacturer in India. We operate our own granite processing facilities and export factory-made granite headstones directly to international B2B buyers and retailers.",
    },
    {
      title: "Do you supply granite headstones on a wholesale basis?",
      description: "We specialize exclusively in wholesale granite headstone supply for cemeteries, monument dealers, funeral homes, memorial parks, and granite distributors. We mostly prefer bulk orders and long-term supply contracts.",
    },
    {
      title: "Which countries do you export granite headstones to?",
      description: "We export granite headstones worldwide. Speaking specifically, we are currently serving  USA, Canada, UK, Germany, France, Australia & New Zealand, with other parts of the world as well.",
    },
    {
      title: "Do you manufacture black granite headstones?",
      description: "Yes, we manufacture and export premium black granite headstones along with other Indian granite varieties. Our black granite headstones are widely supplied to overseas cemetery dealers and monument markets.",
    },
    {
      title: "What different varieties of Headstones do you offer?",
      description: "We specialize exclusively in granite headstones, including upright monuments, angel memorials, vases, bench memorials, columbariums, and custom-designed memorial products.",
    },
    {
      title: "Can you supply granite blank headstones for local engraving?",
      description: "Yes, we supply granite blank headstones in bulk, allowing overseas buyers to perform local engraving while benefiting from cost-effective manufacturing and consistent quality from India.",
    },
    {
      title: "What is your minimum order quantity (MOQ)?",
      description: "Minimum order quantity depends on the product type, size, and customization requirements. We primarily handle container-based wholesale orders and want buyers to contact us for MOQ details.",
    },
    {
      title: "How are granite headstones packed for export?",
      description: "Granite headstones are securely packed in fumigated wooden crates with internal protective materials like bubble wrapping to prevent damage during ocean transit and ensure safe international delivery.",
    },
    {
      title: "How can I request wholesale pricing or a product catalog?",
      description: "You can contact us directly through our website to request wholesale pricing, product catalogs, or to discuss custom granite headstone manufacturing and bulk supply requirements.",
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
      {/* <div className="text-right-row">
        <a href="/" className="btn btn-four m-t-30">
          Read More
        </a>
      </div> */}
      <div className="text-center" style={{paddingTop:'30px'}}>
        <ModelBox className="btn-three" headerText="Scale Your Store!" buttonText="More Enquiry" />
      </div>
    </div>
  );
};

export default FaqAccordion;
