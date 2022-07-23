import React from "react";
import "./sidebar.css";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Button from "./Button";
import TitleButton from "./TitleButton";
import ola from "../assets/ola.png";
import Tables from "../Components/Tables";
import LineChartP from "../Components/LineChartP";
import PieChartP from "../Components/PieChartP";
import Grid from "../Components/Grid";
import unacademy from "../assets/unacademy.png";
import TableTop from "./TableTop";
import Button2 from "./Button2";
import NewsCard from "./NewsCard";

const SidebarP = () => {
  const items = [
    <SidebarItem>
      <h3 className="sidebar-logo">logo</h3>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-top">
        <Button widthv={120} name="sell/buy↗️" />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-mid-top">
        <Button widthv={120} name="calculator↗️" />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-mid-top">
        <Button widthv={120} name="scoops↗️" />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-mid-top">
        <Button widthv={120} name="Learn Centre↗️" />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="last-but mar-mid-top">
        <Button2 name="refer to get $" />
      </div>
    </SidebarItem>
  ];
  return (
    <div>
      <Sidebar
        className="side-bar"
        content={items}
        width={200}
        background={"#FFF"}
        toggleIconColor={"#000000"}
        color={"#000000"}
        activeHightlight={"#FFF"}
        hoverHighlight={"#FFF"}
        textAlign={"center"}
      >
        <div className="fix-nav">
          <div className="row">
            <div className="col-9">
              <TitleButton name="search pricing, analyst updates, etc ( cmd + K)↗️" />
            </div>
            <div className="col-3 logo-top">
              <img className="logo-top-size" src={ola} />
            </div>
          </div>
        </div>

        <div className="container con-abs">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-2">
                  <img className="img-size" src={unacademy} />
                </div>
                <div className="col-6">
                  <h3 className="title-name">Unacademy</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="pie-size">
                <PieChartP />
              </div>
            </div>
            <div className="col">
              <div className="table-top">
                <TableTop />
              </div>
            </div>
          </div>
          <div className="row">
            <Grid />
          </div>
          <div className="row">
            <div className="col">
              <div className="but-below">
                <Button widthv={200} name="sell/buy ↗️" />
              </div>
            </div>
            <div className="col">
              <div className="but-below">
                <Button widthv={200} name="Share w family ↗️" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row mt-5">
            <Tables />
          </div>
          <div className="row mt-5">
            <Tables />
          </div>
          <div className="row mt-5">
            <NewsCard
              hone="Abhinavjdhgdgvfsdgfvkjjdhfvudkjfbkdjbfckjdbfcdjkfbdcjkfbcdjkhfbciudkjfchnfiucvdsg"
              uone="Abhinav Awasthi"
              cone="kjgjhiugvbhjkfsdhkgvuhsdvgdkgvbsdjsgbfvkjdsbfvkjdssgfvjkdsgsfvbhvdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkvbkdj"
              htwo="Abhinavjdhgdgvfsdgfvkjjdhfvudkjfbkdjbfckjdbfcdjkfbdcjkfbcdjkhfbciudkjfchnfiucvdsg"
              utwo="Abhinav Awasthi"
              ctwo="kjgjhiugvbhkvbkdj"
              hthr="Abhinavjdhgdgvfsdgfvkjjdhfvudkjfbkdjbfckjdbfcdjkfbdcjkfbcdjkhfbciudkjfchnfiucvdsg"
              uthr="Abhinav Awasthi"
              cthr="kjgjhiugvbhkvbkdj"
            />
          </div>
          <br />
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarP;
