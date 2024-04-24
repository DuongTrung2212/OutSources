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
  defaultValue?: string | number | undefined;
  type?: 'text' | 'number';
  onChange?: (e: string | number | undefined) => void;
}

export default function InputCustom(props: Props) {
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
  const handleChange = (e: string | number | undefined) => {
    setValue(e || undefined);
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
        <Flex className="w-full" vertical gap={1}>
          <Space
            className={`w-full text-[#9b9b9b] transition-all text-[14px] ${
              (focus || value === 0 || value) && '!text-[12px] font-medium'
            }`}
          >
            {props.label}
            {props.required && <span className="text-red-500">*</span>}
          </Space>
          {(focus || value === 0 || value) && (
            <Input
              onChange={(e) => {
                if (props.type === 'number') {
                  if (!isNaN(Number(e.target.value))) {
                    handleChange(e.target.value || undefined);
                  } else {
                    if (e.target.value.length <= 1) {
                      handleChange(undefined);
                    }
                    // else {
                    //   handleChange(value || undefined);
                    // }
                  }
                  // Number(e.target.value)
                  //   ? handleChange(e.target.value || undefined)
                  //   : handleChange(undefined);
                  Number(e.target.value === '')
                    ? setValid(false)
                    : setValid(true);
                } else {
                  e.target.value ? setValid(true) : setValid(false);
                  props.maxLength
                    ? e.target.value.length <= props.maxLength &&
                      handleChange(e.target.value)
                    : handleChange(e.target.value);
                }
              }}
              value={value || ''}
              className="!p-0 !w-full"
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
