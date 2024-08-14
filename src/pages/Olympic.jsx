import { useState } from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import Table from "../components/Table";


const Olympic = () => {
  // 입력값 세팅
  // const countryId = document.getElementById("countryId");
  const [countrysName, setCountrysName] = useState("");
  const [countryMedalGold, setCountryMedalGold] = useState(0);
  const [countryMedalSilver, setCountryMedalSilver] = useState(0);
  const [countryMedalBronze, setCountryMedalBronze] = useState(0);

  // 국가목록 세팅
  const [countrys, setCountrys] = useState([]);

  const tableProps = {
    th_01: "국가명",
    th_02: "금메달",
    th_03: "은메달",
    th_04: "동메달",
    th_05: "액션"
  }

  // 국가 추가
  const addCountryHanlder = () => {
    if (countrysName.trim() === "" || countrysName === "undefined") {
      alert("국가명이 입력되지 않았습니다.");
      return false;
    }

    const isCountry = countrys.some(country => country.countrysName === countrysName.trim());
    if (!isCountry) {
      const newCountry = {
        id: new Date().getTime(), // uuid : 공부 (고유값)
        countrysName,
        countryMedalGold,
        countryMedalSilver,
        countryMedalBronze,
      }
      setCountrys([...countrys, newCountry]);
    } else {
      alert("이미 등록된 국가입니다. 업데이트를 원하시면 업데이트 버튼을 클릭해주세요.");
    }
    // 값 초기화 해줌
    resetCountryHandler();
  }

  // 국가 업데이트
  const updateCountryHanlder = () => {
    let updateChk = false;
    if (countrysName === "" || countrysName === "undefined") {
      alert("국가명이 입력되지 않았습니다.");
      return false;
    }
    const updateCountrys = countrys.map(country => {
      if (country.countrysName === countrysName) {
        updateChk = true;
        return {
          ...country,
          countryMedalGold,
          countryMedalSilver,
          countryMedalBronze,
        };
      }
      return country;
    })

    if (!updateChk) alert("현재 없는 국가입니다. 국가명을 정확히 입력해주세요.");
    else setCountrys(updateCountrys);

    resetCountryHandler();
  }

  // 국가 삭제
  const deleteCountryHanlder = (id) => {
    setCountrys(countrys.filter(country => country.id !== id));
  }

  // 국가 리스트
  const Country = ({ country, onDelete }) => {
    return (
      <tr>
        <td>{country.countrysName}</td>
        <td>{country.countryMedalGold}</td>
        <td>{country.countryMedalSilver}</td>
        <td>{country.countryMedalBronze}</td>
        <td>
          <button type='button' className='delBtn' onClick={() => onDelete(country.id)}>삭제</button>
        </td>
      </tr>
    );
  }

  // 초기화
  function resetCountryHandler() {
    setCountrysName("");
    setCountryMedalGold(0);
    setCountryMedalSilver(0);
    setCountryMedalBronze(0);
  }

  return (
    <div id='olympicWrap'>

      <div className='circleBox'>
        <div className='circle circle01'></div>
        <div className='circle circle02'></div>
        <div className='circle circle03'></div>
        <div className='circle circle04'></div>
        <div className='circle circle05'></div>
      </div>

      <div className='olympicArea'>
        <h1>PARIS 2024</h1>
        <div className='flexBox'>
          <div className="writeBox">
            <div className="inputArea">
              <div className="inputBox">
                <Input
                  title="국가명"
                  type="text"
                  placeholder="국가 입력"
                  value={countrysName}
                  onChangeFunc={(e) => setCountrysName(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <Input
                  title="금메달"
                  type="number"
                  placeholder="0"
                  value={countryMedalGold}
                  onChangeFunc={(e) => setCountryMedalGold(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <Input
                  title="은메달"
                  type="number"
                  placeholder="0"
                  value={countryMedalSilver}
                  onChangeFunc={(e) => setCountryMedalSilver(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <Input
                  title="동메달"
                  type="number"
                  placeholder="0"
                  value={countryMedalBronze}
                  onChangeFunc={(e) => setCountryMedalBronze(e.target.value)}
                />
              </div>
            </div>
            <div className="btnArea">
              <Button
                title="국가추가"
                type="button"
                className="addBtn"
                clickFunc={addCountryHanlder}
              />
              <Button
                title="업데이트"
                type="button"
                className="updateBtn"
                clickFunc={updateCountryHanlder}
              />
            </div>
          </div>
          <div className="tableWrap">
            <Table
              tableProps={tableProps}
              items={countrys}
              List={Country}
              onDelete={deleteCountryHanlder}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Olympic
