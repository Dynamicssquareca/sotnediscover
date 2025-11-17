"use client";
import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap";
import classnames from "classnames";

export default function VerticalTabs() {
  const [tabsData, setTabsData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/tabsData.json", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data?.tabs?.length) {
          setTabsData(data.tabs);
          setActiveTab(data.tabs[0].id); // Set first tab as active
        }
      })
      .catch(() => setError("Failed to load data"));
  }, []);

  const toggle = (id) => setActiveTab(id);

  const activeContent =
    tabsData.find((tab) => tab.id === activeTab)?.cards ?? [];

  return (
    <>
      <Row>
        {/* Left Tabs */}
        <Col md="3" className="mb-md-0 g-0">
          <Nav pills vertical>
            {tabsData.map((tab) => (
              <NavItem key={tab.id}>
                <NavLink
                  className={classnames({ active: activeTab === tab.id })}
                  onClick={() => toggle(tab.id)}
                >
                  {tab.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>

        {/* Right Content */}
        <Col md="9" className="g-0">
          <TabContent activeTab={activeTab} className="bg-grays">
            <TabPane tabId={activeTab}>
              <div className="my-row">
                {activeContent.map((card, index) => (
                  <div key={index} className="cards cards-new">
                    <a href={card.href}>
                      <img src={card.img} alt={card.title} />
                      <div className="info-sec">
                        <h3>{card.title}</h3>
                      </div>
                    </a>
                  </div>
                ))}
                {activeContent.length === 0 && (
                  <div className="p-3 text-muted">No items for this tab.</div>
                )}
              </div>
            </TabPane>
          </TabContent>
        </Col>
      </Row>

      <style jsx global>{`
        .nav-pills .nav-link {
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          cursor: pointer;
        }
        .nav-pills .nav-link.active {
          background-color: #0d6efd;
        }
          .my-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.my-row .cards.cards-new {
  position: relative;
}
.my-row .cards.cards-new::before {
  content: "";
  position: absolute;
}
          .cards {
  position: relative;
  overflow: hidden;
}

.cards a img {
  transition: 0.5s ease;
}
.cards:hover a img {
  transform: scale(1.1);
}
.cards:hover a p .fas {
  left: 10px;
}

.info-sec {
  position: absolute;
  bottom: 0;
  padding: 0px 0px 20px 20px;
}
.cards img {
}
.cards a h3 {
  color: #ffffff;
  font-size: 15px;
  font-family: inherit;
  font-weight: 500;
  background: #141414a3;
  padding: 3px 9px;
}
.cards.cards-new a h3 {
  color: #fff;
  font-family: inherit;
  font-weight: 500;
}
  .info-sec {
    position: absolute;
    bottom: -8px;
    padding: 0px 0px 0px 0px;
}
    .bg-grays{
    background-color: #fbf8f4;
    padding: 20px;
    }
    .nav-pills .nav-link{
    color: #000;
    font-size: 14px;
        font-weight: 600;
    padding: 15px 20px;
    border-radius: 0;
    margin-bottom: 0;
    
    }
    .nav-pills .nav-link.active,.nav-pills .nav-link:hover{
    background-color: #fbf8f4;
     color: #000;
    }
     
     
      `}</style>
    </>
  );
}
