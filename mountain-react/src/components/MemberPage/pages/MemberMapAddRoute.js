import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

//====== below pages start ======//
import CheckBox from './CheckBox';
//====== above pages end ======//

//====== below catch member info start ======//
import { useAuth } from '../../../context/auth';
//====== below catch member info end ======//

//====== below api connect tool start ======//
import axios from 'axios';
import { memberRouteURL } from '../../../utils/config';
//====== above api connect tool end ======//

// import { log } from 'fabric/fabric-impl';

function MemberMapAddRoute(props) {
  const { member, mapRouteShow, setMapRouteShow } = useAuth(); //把 member＆新增路線重算積分，會員level需重抓開關，從 useContext中拿出來
  const { show, setShow } = props;
  const [data, setData] = useState([]);

  //=== 彈跳視窗開關 start ===//
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //=== 彈跳視窗開關 end ===//

  //sel
  const [selectedOption, setSelectedOption] = useState([]);
  //checkbox(multi)
  const [wentList, setWentList] = useState([]);

  //====== 接表單輸入的資料(Form) start ======//
  const handleSumbmit = async (e) => {
    setShow(false); //將彈跳視窗關閉
    e.preventDefault(); //記住你輸入時的值,submit時不會清空(也可以用在btn在form時不讓它提交)

    if (member === null) {
      return;
    } else {
      try {
        console.log('WentmemberID:', member); //for check
        // let response =
        await axios.post(memberRouteURL + '/wentRoute', {
          wentList,
          selectedOption,
          member,
        }); //NEXT: 送到伺服器去
        setWentList([]); //送完後清空陣列，以免上次資料重複送到後端
        setSelectedOption([]); //送完後清空陣列，以免上次資料重複送到後端
        if (mapRouteShow === false) {
          setMapRouteShow(true); //將member資料重抓開關
        } else {
          setMapRouteShow(false); //將member資料重抓開關
        }
        //console.log('wentRoute response:', response); //for check
      } catch (e) {
        console.log(e);
      }
    }
  };
  //====== 接表單輸入的資料(Form) end ======//

  useEffect(() => {
    if (member === null) {
      return;
    }
    async function getRouteData() {
      try {
        const RouteData = await axios.post(
          memberRouteURL + '/catchArticle',
          member
        );
        // console.log('catchArticle沒去過路線:', RouteData.data.dbResults); //for check
        setData(RouteData.data.dbResults);
      } catch (e) {
        console.log(e);
      }
    }
    getRouteData();
  }, [show, member]);

  return (
    <>
      {/* Button trigger modal start */}
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
