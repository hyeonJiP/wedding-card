import React, { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Divider, message } from "antd";
import { MessageFilled, LinkOutlined } from "@ant-design/icons";
import "./share.scss";
import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from "../config";

const Share = () => {
  // Kakao SDK 로드 및 초기화
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAOTALK_API_TOKEN);
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const shareToKakao = () => {
    if (!window.Kakao) {
      message.error("카카오 SDK 로딩에 실패했습니다.");
      return;
    }
    try {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: `${GROOM_NAME}♡${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래 버튼을 눌러 청첩장을 확인해 보세요!",
          imageUrl: KAKAOTALK_SHARE_IMAGE,
          link: {
            mobileWebUrl: WEDDING_INVITATION_URL,
            webUrl: WEDDING_INVITATION_URL,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: WEDDING_INVITATION_URL,
              webUrl: WEDDING_INVITATION_URL,
            },
          },
        ],
      });
      message.success("카카오톡으로 청첩장을 공유합니다!");
    } catch (error) {
      console.error(error);
      message.error("공유 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="share-wrapper" data-aos="fade-up">
      <Divider plain className="share-divider">
        <span className="share-title">청첩장 공유하기</span>
      </Divider>

      <Button
        className="share-kakao-button"
        size="large"
        icon={<MessageFilled />}
        onClick={shareToKakao}
      >
        카카오톡으로 공유하기
      </Button>

      <CopyToClipboard
        text={WEDDING_INVITATION_URL}
        onCopy={() => message.success("청첩장 주소가 복사되었습니다.")}
      >
        <Button
          className="share-link-button"
          size="large"
          icon={<LinkOutlined />}
        >
          청첩장 주소 복사하기
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default Share;
