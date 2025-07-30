import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Typography,
  message,
  List as AntList,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import "./guestbook.scss";

const { Title, Text } = Typography;

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEntries(
        snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
      );
    });
    return unsubscribe;
  }, []);

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      await addDoc(collection(db, "guestbook"), {
        ...values,
        createdAt: new Date(),
      });
      message.success("방명록이 등록되었습니다!");
      form.resetFields();
      setIsWriteModalOpen(false);
    } catch (err) {
      console.error(err);
      message.error("등록 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "guestbook", id));
      message.success("방명록이 삭제되었습니다.");
    } catch (err) {
      console.error(err);
      message.error("삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="guestbook-wrapper">
      <h2 className="section-title">방명록</h2>

      <Swiper
        className="guestbook-swiper"
        modules={[Navigation]}
        navigation
        // pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={2.2}
        centeredSlides={false}
      >
        {entries.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="guestbook-item-card">
              <Button
                type="text"
                icon={<CloseOutlined />}
                className="card-close-btn"
                onClick={() => handleDelete(item.id)}
              />
              <div className="item-from">
                <Text strong>FROM. {item.author}</Text>
              </div>
              <div className="item-text">{item.text}</div>
              <div className="item-date">
                {item.createdAt.toDate
                  ? item.createdAt.toDate().toLocaleString()
                  : new Date(item.createdAt).toLocaleString()}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="guestbook-actions">
        <Button
          className="guestbook-add-button first-btn"
          icon={<MenuOutlined />}
          onClick={() => setIsListModalOpen(true)}
        >
          전체보기
        </Button>
        <Button
          className="guestbook-add-button"
          type="primary"
          icon={<EditOutlined />}
          $1
          onClick={() => setIsWriteModalOpen(true)}
          block
        >
          작성하기
        </Button>
      </div>

      <Modal
        title="방명록 작성하기"
        open={isWriteModalOpen}
        onCancel={() => setIsWriteModalOpen(false)}
        footer={null}
        width={420}
        className="guestbook-modal"
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="author"
            label="성함"
            rules={[{ required: true, message: "성함을 입력해주세요." }]}
          >
            <Input placeholder="성함을 입력해주세요." />
          </Form.Item>
          <Form.Item
            name="text"
            label="내용"
            rules={[{ required: true, message: "내용을 입력해주세요." }]}
          >
            <Input.TextArea
              autoSize={{ minRows: 3 }}
              placeholder="내용을 입력해주세요."
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={submitting}>
              작성하기
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Full List Modal */}
      <Modal
        title="방명록 전체보기"
        open={isListModalOpen}
        onCancel={() => setIsListModalOpen(false)}
        footer={null}
        width={420}
        className="guestbook-list-modal"
      >
        <AntList
          dataSource={entries}
          renderItem={(item) => (
            <AntList.Item
              actions={[
                <Button
                  type="text"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(item.id)}
                />,
              ]}
            >
              <AntList.Item.Meta
                title={
                  <div className="item-header">
                    <Text strong>FROM. {item.author}</Text>
                    <Text type="secondary" className="item-date">
                      {item.createdAt.toDate
                        ? item.createdAt.toDate().toLocaleString()
                        : new Date(item.createdAt).toLocaleString()}
                    </Text>
                  </div>
                }
                description={<div className="item-text">{item.text}</div>}
              />
            </AntList.Item>
          )}
        />
      </Modal>
    </div>
  );
}
