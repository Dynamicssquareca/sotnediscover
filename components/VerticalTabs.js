"use client";
import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <Row>
        {/* Left Tabs */}
        <Col md="3" className="mb-3 mb-md-0">
          <Nav pills vertical>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => toggle("1")}
              >UK/Ireland</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => toggle("2")}
              >USA/Canada</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => toggle("3")}
              >France</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => toggle("4")}
              >Germany</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "5" })}
                onClick={() => toggle("5")}
              >Australia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "6" })}
                onClick={() => toggle("6")}
              >New Zealand</NavLink>
            </NavItem>
          </Nav>
        </Col>

        {/* Right Content */}
        <Col md="9">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <div class="my-row">
                    <div class="cards cards-new">
                        <a href="#">
                            <img src="/img/webpages/Angel-headstone.png" alt="Angel-headstone" />
                            <div className="info-sec"><h3>Headstone</h3></div>
                        </a>
                    </div>
                    <div class="cards cards-new">
                        <a href="#">
                            <img src="/img/webpages/Angel-headstone.png" alt="Angel-headstone" />
                            <div className="info-sec"><h3>Headstone</h3></div>
                        </a>
                    </div>
                    <div class="cards cards-new">
                        <a href="#">
                            <img src="/img/webpages/Angel-headstone.png" alt="Angel-headstone" />
                            <div className="info-sec"><h3>Headstone</h3></div>
                        </a>
                    </div>
                    <div class="cards cards-new">
                        <a href="#">
                            <img src="/img/webpages/Angel-headstone.png" alt="Angel-headstone" />
                            <div className="info-sec"><h3>Headstone</h3></div>
                        </a>
                    </div>
                    <div class="cards cards-new">
                        <a href="#">
                            <img src="/img/webpages/Angel-headstone.png" alt="Angel-headstone" />
                            <div className="info-sec"><h3>Headstone</h3></div>
                        </a>
                    </div>
                    <div class="cards cards-new">
                        <a href="#">
                            <img src="/img/webpages/Angel-headstone.png" alt="Angel-headstone" />
                            <div className="info-sec"><h3>Headstone</h3></div>
                        </a>
                    </div>
                </div>
            </TabPane>
            <TabPane tabId="2">
              <h4>Profile</h4>
              <p>This is the Profile tab content.</p>
            </TabPane>
            <TabPane tabId="3">
              <h4>Germany</h4>
              <p>This is the Messages tab content.</p>
            </TabPane>
            <TabPane tabId="4">
              <h4>Australia</h4>
              <p>This is the Settings tab content.</p>
            </TabPane>
            <TabPane tabId="5">
              <h4>Settings</h4>
              <p>This is the Settings tab content.</p>
            </TabPane>
            <TabPane tabId="6">
              <h4>Settings6</h4>
              <p>This is the Settings tab content.</p>
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
    bottom: 0;
    padding: 0px 0px 20px 20px;
}
      `}</style>
    </>
  );
}
