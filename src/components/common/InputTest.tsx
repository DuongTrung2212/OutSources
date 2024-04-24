import { Input } from 'antd';
import React from 'react';
import '../Styles/InputTest.css';

export default function InputTest() {
  return (
    <div className="form relative w-full h-fit">
      <Input
        className="text-black inputAntd"
        type="text"
        name="text"
        autoComplete="off"
        required
      />
      <label htmlFor="text" className="label-name">
        <span className="content-name">Your Text</span>
      </label>
    </div>
  );
}
