import React, { useState } from 'react';

const Checkbox = () => {
  const list = [
    { label: '1번요소', value: 'one' },
    { label: '2번요소', value: 'two' },
    { label: '3번요소', value: 'three' },
    { label: '4번요소', value: 'four' },
    { label: '5번요소', value: 'five' },
  ];

  const [checkItems, setCheckItems] = useState<string[]>([]);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const newArray = [...checkItems];
    if (checked) {
      setCheckItems([...newArray, value]);
    } else if (!checked && checkItems.includes(value)) {
      setCheckItems(newArray.filter((el) => el !== value));
    }
  };

  const handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      const newArray: any[] = [];
      list.forEach((el) => newArray.push(el.value));
      setCheckItems(newArray);
    } else {
      setCheckItems([]);
    }
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <input
          type="checkbox"
          id="all"
          checked={list.length === checkItems.length}
          onChange={handleAllCheck}
        />
        <label htmlFor="all">전체선택</label>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {list.map((el, index) => (
          <div style={{ display: 'flex' }} key={el.value}>
            <input
              type="checkbox"
              key={index}
              id={el.value}
              value={el.value}
              checked={checkItems.includes(el.value)}
              onChange={handleClick}
            ></input>
            <label htmlFor={el.value}>{el.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Checkbox;
