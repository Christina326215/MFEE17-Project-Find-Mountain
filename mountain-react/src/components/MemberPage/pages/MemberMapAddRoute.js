import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CheckBox from './CheckBox';

import axios from 'axios';
import { memberRouteURL } from '../../../utils/config';
// import { log } from 'fabric/fabric-impl';

function MemberMapAddRoute(props) {
  const { show, setShow } = props;
  const [data, setData] = useState([]);

  //=== 彈跳視窗開關 star ===//
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //=== 彈跳視窗開關 end ===//

  //sel
  const [selectedOption, setSelectedOption] = useState([]);
  //checkbox(multi)
  const [wentList, setWentList] = useState([]);

  //====== 接表單輸入的資料(Form) star ======//
  const handleSumbmit = async (e) => {
    setShow(false); //將彈跳視窗關閉

    //=== 記住你輸入時的值,submit時不會清空 ===//
    e.preventDefault();

    try {
      let response = await axios.post(memberRouteURL + '/wentRoute', {
        wentList,
        selectedOption,
      }); //NEXT: 送到伺服器去
      //console.log('wentRoute response:', response); //for check
    } catch (e) {
      console.log(e);
    }
  };
  //====== 接表單輸入的資料(Form) end ======//

  useEffect(() => {
    async function getRouteData() {
      try {
        const RouteData = await axios.get(memberRouteURL + '/catchArticle');
        console.log('catchArticle沒去過路線:', RouteData.data.dbResults); //for check
        setData(RouteData.data.dbResults);
      } catch (e) {
        console.log(e);
      }
    }
    getRouteData();
  }, [show]);

  return (
    <>
      {/* Button trigger modal star */}
      <button className="btn btn-primary" onClick={handleShow}>
        新增去過路線
      </button>
      {/* Button trigger modal end */}

      {/* Modal star */}
      <Modal size="xxl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>新增去過路線</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {/* TODO: value=product id */}
            {data.map((v) => {
              return (
                <CheckBox
                  key={v.id}
                  value={v}
                  checkedValueList={wentList}
                  setCheckedValueList={setWentList}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              );
            })}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            取消
          </Button>
          <Button variant="primary" onClick={handleSumbmit}>
            新增路線
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal end */}
    </>
  );
}

export default MemberMapAddRoute;
