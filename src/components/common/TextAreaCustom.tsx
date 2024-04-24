import { CaretDownOutlined } from '@ant-design/icons';
import { Flex, Input, InputRef, Space } from 'antd';
import React, {
  ClassAttributes,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface Props {
  maxLength?: number;
  required?: boolean;
  label: string;
  className?: string;
  type?: 'text' | 'number';
  defaultValue?: string | number | undefined;
  onChange?: (e: string | number | undefined) => void;
  textAreaClassName?: string;
}
export default function TextAreaCustom(props: Props) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState<string | number | undefined>(
    props.defaultValue
  );
  const [valid, setValid] = useState(true);
  const inputRef = useRef<InputRef>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = () => {
    setFocus(false);
  };
  const handleChange = (e: string | number) => {
    setValue(e);
    props.onChange?.(e || undefined);
  };
  useOnClickOutside(divRef, handleClickOutside);
  return (
    <div
      ref={divRef}
      onClick={() => setFocus(true)}
      className={`w-full ${props.className}`}
    >
      <div
        className={`w-full relative flex justify-between px-[10px] rounded-lg border ${
          focus || value === 0 || value ? 'py-[5px]' : 'py-[15px] '
        } ${props.required ? !valid && 'border-red-500' : ''}`}
      >
        <Flex vertical gap={1}>
          <Space
            className={`w-full text-[#b4b4b4] transition-all text-[14px] ${
              (focus || value === 0 || value) && '!text-[12px] font-medium'
            }`}
          >
            {props.label}
            {props.required
              ? !valid && <span className="text-red-500">*</span>
              : ''}
          </Space>
          {(focus || value === 0 || value) && (
            <Input.TextArea
              autoSize
              onChange={(e) => {
                if (props.type === 'number') {
                  Number(e.target.value || 0)
                    ? handleChange(e.target.value)
                    : handleChange(0);
                  Number(e.target.value || 0)
                    ? setValid(true)
                    : setValid(false);
                } else {
                  e.target.value ? setValid(true) : setValid(false);
                  props.maxLength
                    ? e.target.value.length <= props.maxLength &&
                      handleChange(e.target.value)
                    : handleChange(e.target.value);
                }
              }}
              value={value || ''}
              // ${focus && '!min-h-[100px]'}
              // ${props.textAreaClassName}
              className={`!p-0 !min-h-[100px]`}
              ref={inputRef}
              placeholder="Borderless"
              variant="borderless"
            />
          )}
        </Flex>
      </div>
      <div className="px-[10px]">
        {props.required
          ? !valid && (
              <p className="text-[10px] text-red-500">Vui lòng nhập đầy đủ</p>
            )
          : ''}
        {props.maxLength
          ? typeof value === 'string' && (
              <p className="text-[10px] text-slate-500 font-medium">
                {value.length}/{props.maxLength}
              </p>
            )
          : ''}
      </div>
    </div>
  );
}
