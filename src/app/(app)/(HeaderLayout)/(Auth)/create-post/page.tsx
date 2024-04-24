'use client';
import { fetchCreatePost } from '@/api/allRequest';
import { CurrentFormContext } from '@/app/(app)/CurentFormContext';
import CreatePostAirConditionForm from '@/components/common/Form/CreatePostAirConditionForm';
import CreatePostBusinessPremisesForm from '@/components/common/Form/CreatePostBusinessPremisesForm';
import InputCustom from '@/components/common/InputCustom';
import ModalCategorySelectCustom from '@/components/common/ModalCategorySelectCustom';
import PreviewProduct from '@/components/common/PreviewProduct';
import getBase64, { FileType } from '@/services/getBase64';
import getFormByKey from '@/services/getFormByKey';
import { InboxOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {
  Button,
  Flex,
  Form,
  Image,
  Input,
  Modal,
  Space,
  UploadFile,
  UploadProps,
  notification,
} from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

export default function CreatePostPage() {
  const currentForm = useContext(CurrentFormContext);
  const [categoryId, setCategoryId] = useState<string | number>();
  const [preview, setPreview] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [videoFileList, setVideoFileList] = useState<UploadFile[]>([]);
  const [submittable, setSubmittable] = useState<boolean>(false);
  const [form] = Form.useForm();

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const handlePreview: (file: UploadFile) => Promise<void> = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name ||
        (file.url ? file.url.substring(file.url.lastIndexOf('/') + 1) : '')
    );
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    const newList: UploadFile<any>[] = newFileList.map((item) => ({
      ...item,
      status: 'done',
    }));
    setFileList(newList);
  };
  const handleChangeVideo: UploadProps['onChange'] = ({
    fileList: newFileList,
  }) => {
    const newList: UploadFile<any>[] = newFileList.map((item) => ({
      ...item,
      status: 'done',
    }));
    setVideoFileList(newList);
  };
  const handleCancel = () => setPreviewOpen(false);

  const fetchCreate = () => {
    const formData = new FormData();
    currentForm.currentData?.name &&
      formData.append('name', currentForm.currentData?.name as string);
    currentForm.currentData?.description &&
      formData.append(
        'description',
        currentForm.currentData?.description as string
      );
    currentForm.currentData?.quantity &&
      formData.append('quantity', currentForm.currentData?.quantity as string);
    currentForm.currentData?.shop &&
      formData.append('shop', currentForm.currentData?.shop as string);
    currentForm.currentData?.item_category &&
      formData.append(
        'item_category',
        currentForm.currentData?.item_category as string
      );
    for (const [key, value] of Object.entries(
      currentForm.currentData?.infor || {}
    )) {
      if (value !== undefined && value !== null && value !== '') {
        formData.append(key, value.toString());
      }
    }

    fetchCreatePost(formData).then((res) => {
      console.log('OK');
      currentForm.setCurrentData?.({});
    });
  };

  return (
    <div className="w-4/5 flex flex-col gap-y-5 py-[20px] px-[30px] m-auto bg-white mt-[20px] rounded-lg">
      <Form
        form={form}
        validateMessages={{
          required: 'Vui lòng nhập đầy đủ',
        }}
        scrollToFirstError
        onFinishFailed={(e) => {
          console.log(e);
          notification.error({
            message: 'Thông báo',
            description: 'Vui lòng nhập đầy đủ!',
          });
        }}
        onFinish={fetchCreate}
      >
        {preview ? (
          <PreviewProduct onCancel={() => setPreview(false)} />
        ) : (
          <>
            {/* <Form name="basic" autoComplete="off" onFinish={fetchCreate}>
            <Form.Item required name={'ok'} rules={[{ required: true }]}>
              <InputCustom
                defaultValue={currentForm.currentData?.infor?.title}
                label={'Tiêu đề tin đăng'}
              />
            </Form.Item>
            <Form.Item required name={'ab'} rules={[{ required: true }]}>
              <Input
                defaultValue={currentForm.currentData?.infor?.title}
              />
            </Form.Item>
            <Form.Item rules={[{ required: true }]}>
              <Button htmlType="submit">as</Button>
            </Form.Item>
          </Form> */}
            <div className="w-full flex gap-x-10">
              <div className="flex-1">
                <b>Ảnh / video sản phẩm</b>
                <Space className="flex text-[#9b9b9b] text-[13px]">
                  Xem thêm về
                  <Link href="/">
                    <p className="text-blue-500 underline text-wrap">
                      Quy định đăng tin của chợ tốt
                    </p>
                  </Link>
                </Space>
                <div className="w-[300px] min-h-[200px] flex items-center justify-center">
                  <Dragger
                    className="truncate w-full"
                    name="images_A1_data"
                    listType="picture"
                    fileList={fileList}
                    accept="image/*"
                    // onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <Flex vertical justify="center">
                      <p className="ant-upload-text !text-[14px]">
                        Hình ảnh có kích thước tối thiệu{' '}
                      </p>
                      <p className="ant-upload-text !text-[14px]">240 x 240</p>
                    </Flex>
                  </Dragger>
                  <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <Image
                      alt="example"
                      style={{ width: '100%' }}
                      src={previewImage}
                    />
                  </Modal>
                </div>
                <div className="w-[300px] min-h-[200px] py-[20px] flex items-center justify-center">
                  <Dragger
                    className="truncate w-full"
                    name="Video"
                    listType="picture"
                    fileList={videoFileList}
                    maxCount={1}
                    accept="video/*"
                    onChange={handleChangeVideo}
                  >
                    <p className="ant-upload-drag-icon">
                      <VideoCameraOutlined />
                    </p>
                    <p className="ant-upload-text !text-[14px]">
                      Đăng tối đa 1 video{' '}
                    </p>
                  </Dragger>
                  <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <Image
                      alt="example"
                      style={{ width: '100%' }}
                      src={previewImage}
                    />
                  </Modal>
                </div>
              </div>
              <div className="flex-[3_2_0%]">
                <ModalCategorySelectCustom
                  onChangeKey={(e) => currentForm.setCurrentForm?.(e)}
                  label="Danh mục tin đăng"
                />
                <CreatePostBusinessPremisesForm />
                {/* {currentForm.currentForm ? (
              getFormByKey(currentForm.currentForm)
            ) : (
              <ModalCategorySelectCustom
                onChangeKey={(e) => currentForm.setCurrentForm?.(e)}
                label="Danh mục tin đăng"
              />
            )} */}
                <Flex gap={20} className="my-[20px]">
                  <Form.Item className="flex-1">
                    <button
                      disabled={!submittable}
                      type="submit"
                      onClick={() => setPreview(true)}
                      className="w-full py-[10px] rounded-lg border text-[#da7502] border-[#da7502] disabled:border-[#8e8e8e] disabled:text-[#787878] disabled:bg-[#c1c1c1] disabled:cursor-not-allowed hover:bg-[#ffe9c2]"
                    >
                      Xem trước
                    </button>
                  </Form.Item>
                  <Form.Item className="flex-1">
                    <button
                      type="submit"
                      // onClick={fetchCreate}
                      className="w-full py-[10px] rounded-lg border text-white bg-[#da7502] border-[#da7502] hover:text-white hover:bg-[#da6702]"
                    >
                      Đăng tin
                    </button>
                  </Form.Item>
                </Flex>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
