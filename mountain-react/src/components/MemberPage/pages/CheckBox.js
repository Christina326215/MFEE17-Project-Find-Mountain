import React from 'react';

function CheckBox(props) {
  const {
    value,
    checkedValueList,
    setCheckedValueList,
    selectedOption,
    setSelectedOption,
  } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    // 如果目前在這狀態陣列 -> 移出
    if (checkedValueList.includes(value)) {
      // 1. 先從狀態陣列拷貝出新陣列
      // 2. 在拷貝的新陣列上處理
      const newLikeList = checkedValueList.filter((v, i) => {
        return v !== value;
      });
      // 3. 設定回狀態陣列
      return setCheckedValueList(newLikeList);
    }

    // 如果沒在這狀態陣列中 -> 加入
    setCheckedValueList([...checkedValueList, value]);
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          name="article"
          value={value.name}
          checked={checkedValueList.includes(value.name)}
          onChange={handleChange}
        />
        <label>{value.name}</label>

        <span className="mr-1 ml-4">路線評分</span>
        <select
          onChange={(e) => {
            setSelectedOption([...selectedOption, e.target.value + value.name]);
          }}
        >
          <option value="0">不評分</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
      </div>
    </>
  );
}

export default CheckBox;
