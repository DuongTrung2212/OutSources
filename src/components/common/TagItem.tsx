import { ShareAltOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import React, { ReactNode } from 'react';
interface Props {
  icon: ReactNode;
  title: string | number;
}
export default function TagItem(props: Props) {
  return (
    <div>
      <Space className="w-1/2" key={'as'}>
        {props.icon}
        <Tooltip>
          <p className="truncate w-[300px]">{props.title}</p>
        </Tooltip>
      </Space>
    </div>
  );
}
