import React, { useState } from "react";
import { Divider, Button, message } from "antd";
import CopyToClipboard from "react-copy-to-clipboard";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../config";

import "./congratulatoryMoney.scss";

const CongratulatoryMoney = () => {
  const [groomOpen, setGroomOpen] = useState(false);
  const [brideOpen, setBrideOpen] = useState(false);

  const handleCopy = () => {
    message.success("계좌번호가 복사되었습니다.");
  };

  return (
    <div className="wrapper">
      <p className="section-title">마음을 전하는 곳</p>

      {/* 전체 계좌 섹션을 감싸는 div */}
      <div className="accounts-wrapper">
        {/* 신랑측 */}
        <div
          className="section-button"
          onClick={() => setGroomOpen(!groomOpen)}
        >
          신랑측 계좌번호{" "}
          {groomOpen ? (
            <UpOutlined style={{ fontSize: "14px" }} />
          ) : (
            <DownOutlined style={{ fontSize: "14px" }} />
          )}
        </div>
        {groomOpen && (
          <div className="account-list">
            <div className="account-item">
              <div className="account-info">
                국민은행 {GROOM_ACCOUNT_NUMBER}
                <br />
                {GROOM_NAME}
              </div>
              <CopyToClipboard text={GROOM_ACCOUNT_NUMBER} onCopy={handleCopy}>
                <Button className="copy-button">복사</Button>
              </CopyToClipboard>
            </div>
            {/* 아버님 계좌 */}
            <div className="account-item">
              <div className="account-info">
                농협은행 {GROOM_FATHER_ACCOUNT_NUMBER}
                <br />
                {GROOM_FATHER_NAME}
              </div>
              <CopyToClipboard
                text={GROOM_FATHER_ACCOUNT_NUMBER}
                onCopy={handleCopy}
              >
                <Button className="copy-button">복사</Button>
              </CopyToClipboard>
            </div>
            {/* 어머님 계좌 */}
            <div className="account-item">
              <div className="account-info">
                농협은행 {GROOM_MOTHER_ACCOUNT_NUMBER}
                <br />
                {GROOM_MOTHER_NAME}
              </div>
              <CopyToClipboard
                text={GROOM_MOTHER_ACCOUNT_NUMBER}
                onCopy={handleCopy}
              >
                <Button className="copy-button">복사</Button>
              </CopyToClipboard>
            </div>
          </div>
        )}

        {/* 신부측 */}
        <div
          className="section-button"
          style={{ marginTop: 10 }}
          onClick={() => setBrideOpen(!brideOpen)}
        >
          신부측 계좌번호{" "}
          {brideOpen ? (
            <UpOutlined style={{ fontSize: "14px" }} />
          ) : (
            <DownOutlined style={{ fontSize: "14px" }} />
          )}
        </div>
        {brideOpen && (
          <div className="account-list">
            <div className="account-item">
              <div className="account-info">
                신한은행 {BRIDE_ACCOUNT_NUMBER}
                <br />
                {BRIDE_NAME}
              </div>
              <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER} onCopy={handleCopy}>
                <Button className="copy-button">복사</Button>
              </CopyToClipboard>
            </div>
            {/* 어머님 계좌 */}
            <div className="account-item">
              <div className="account-info">
                농협은행 {BRIDE_MOTHER_ACCOUNT_NUMBER}
                <br />
                {BRIDE_MOTHER_NAME}
              </div>
              <CopyToClipboard
                text={BRIDE_MOTHER_ACCOUNT_NUMBER}
                onCopy={handleCopy}
              >
                <Button className="copy-button">복사</Button>
              </CopyToClipboard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CongratulatoryMoney;
