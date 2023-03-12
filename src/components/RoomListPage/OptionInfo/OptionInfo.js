import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';


function OptionInfo() {
    const [dateRange, setDateRange] = useState([new Date(), null]); //지정날짜를 state로 관리
    const [startDate, endDate] = dateRange;

    const [count, setCount] = useState(2); // 초기 인원수를 5로 설정

    const handleClick = () => {
        setCount(count - 1 >= 2 ? count - 1 : 2); // 0 이하로 내려가지 않도록 함
    };

    const handleClick2 = () => {
        setCount(count + 1 <= 10 ? count + 1 : 10); // 0 이하로 내려가지 않도록 함
    };

    const [imgUrl, setimgUrl] = useState([
        { id: 'single', src: "images/싱글.png", isGrayscale: false },
        { id: 'double', src: "images/더블.png", isGrayscale: false },
        { id: 'twin', src: "images/트윈.png", isGrayscale: false },
        { id: 'ondol', src: "images/온돌.png", isGrayscale: false }

    ])
    const toggleGrayscale = (id) => {
        setimgUrl(
            imgUrl.map((image) =>
                image.id === id ? { ...image, isGrayscale: !image.isGrayscale } : image
            )
        );
    };


    return (
        <Option>
            <p>날짜</p>
            <MyDatePicker

                locale={ko}
                selectsRange={true}
                minDate={new Date()}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);

                }}
            />

            < hr />
            <p>상세조건</p>
            <ResetInput type="button" id="reset" value="초기화" />
            <ApplyInput type="button" id="apply" value="적용" />
            <br />
            <>
                {DetailType.map((type, index) => (
                    <InputWrap>
                        <Label>
                            <CheckBox
                                key={type.id}
                                name={index}
                                value={type.name}
                                type="checkbox"
                            />
                            {type.name}
                        </Label>
                    </InputWrap>
                ))}
                <Title>호텔/리조트 유형</Title>

                {HotelType.map((type, index) => (
                    <InputWrap>
                        <Label>
                            <CheckBox
                                key={type.id}
                                name={index}
                                value={type.name}
                                type="checkbox"
                            />
                            {type.name}
                        </Label>
                    </InputWrap>
                ))}
                <Person>
                    <Title>인원</Title>
                    <Button onClick={handleClick} disabled={count === 2}> - </Button>
                    <Count> {count} </Count>
                    <Button onClick={handleClick2} disabled={count === 10}> + </Button>
                </Person>
                <br />
                <Title>베드 타입</Title>
                <BedList>
                    {imgUrl.map((image) =>
                        <Image
                            key={image.id}
                            src={image.src}
                            alt={`image-${image.id}`}
                            onClick={() => toggleGrayscale(image.id, image.src)}
                            style={{ filter: image.isGrayscale ? 'none' : 'grayscale(100%)' }} />
                    )}
                </BedList>
                <Title>공용시설</Title>
                <PublicUseContainer>
                    <PublicUseColumn>
                        {Public.slice(0, Public.length / 2).map((type, index) => (
                            <PublicUse key={type.id}>
                                <CheckBox2
                                    key={type.id}
                                    name={index}
                                    value={type.name}
                                    type="checkbox"
                                />
                                {type.name}

                            </PublicUse>
                        ))}
                    </PublicUseColumn>
                    <PublicUseColumn>
                        {Public.slice(Public.length / 2).map((type, index) => (
                            <PublicUse key={type.id}>
                                <CheckBox2
                                    key={type.id}
                                    name={index}
                                    value={type.name}
                                    type="checkbox"
                                />
                                {type.name}
                            </PublicUse>
                        ))}
                    </PublicUseColumn>
                </PublicUseContainer>
                <Title>객실 내 시설</Title>


                <Title>기타</Title>

            </>
        </Option>
    );
}

export default OptionInfo

const HotelType = [
    {
        id: 1,
        name: '5성급',
    },
    {
        id: 2,
        name: '특1급',
    },
    {
        id: 3,
        name: '특급',
    },

];

const DetailType = [
    {
        id: 1,
        name: '예약가능',

    },
    {
        id: 2,
        name: '프로모션',
    },
]

const Public = [
    { id: 1, name: '피트니스' },
    { id: 2, name: '수영장' },
    { id: 3, name: '사우나' },
    { id: 4, name: '골프장' },
    { id: 5, name: '레스토' },
    { id: 6, name: '엘레베이터' },
    { id: 7, name: '라운지' },
    { id: 8, name: '공용PC' },
    { id: 9, name: 'BBQ' },
    { id: 10, name: '카페' },
    { id: 11, name: '공용스파' },
    { id: 12, name: '족구장' },
    { id: 13, name: '세미나실' },
    { id: 14, name: '편의점' },
    { id: 15, name: '노래방' },
    { id: 16, name: '주방/식당' },
    { id: 17, name: '세탁기' },
    { id: 18, name: '건조기' },
    { id: 19, name: '탈수기' },
    { id: 20, name: '주차장' },
    { id: 21, name: '취사가능' },
    { id: 22, name: '공용샤워실' },
    { id: 23, name: '온천' },
    { id: 24, name: '스키장' },

]

const Option = styled.div`
width: 250px;
height: auto;
border: 1px solid black;
float: left;
margin: 19px;
box-sizing: border-box;
p{
    margin: 20px;
    font-size: 20px;
    display:flex;
    font-weight: bolder;
}
`;
const MyDatePicker = styled(DatePicker)`
width:90%;
width: 200px;
font-size: 13px;
font-weight: bolder;
height:30px;
background-color: Whitesmoke;
border-radius: 4px;
border: 0.5px solid black;
float:center;
padding: 15px;

`;

const ResetInput = styled.input`
display: center;
justify-content: space-evenly;
margin: 5px;
color: #F7323F;
background-color: white;
border: 1px solid #F7323F;
width: 100px;
height: 40px;
border-radius: 5px;
`;

const ApplyInput = styled.input`
display: center;
justify-content: space-evenly;
margin: 5px;
background-color: #F7323F;
color: white;
border: 1px solid #F7323F;
width: 100px;
height: 40px;
border-radius: 5px;
`;

const InputWrap = styled.div`
  margin: 10px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
  transform: ${({ checkbox }) => checkbox || 'scale(1.4)'};
  -webkit-appearance: none;
  border: 0.5px solid;
  padding: 5px;
  border-radius: 2px;
  position: relative;
  margin-left: 10px;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #FB0552;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 17px;
  padding: 7px 0;
  color: #6E6E6E;
`;

const Person = styled.div`
display: flex;
align-items: center;
justify-content: space-between
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 8px;
  font-size: 20px;
  font-weight: bolder;

  &:disabled {
    color: gray;
  }
`;

const Count = styled.div`
font-size: 20px;
font-weight: bolder;
`;

//------------------------------------------------

const Title = styled.h2`
margin: 20px;
  font-size: 15px;
   display:flex;
   font-weight: bolder;
   color: #6E6E6E;
`;

const BedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  img{
    width: 60px;
    height: 60px;
}
`;

const Image = styled.img`
max-width: 100%;
height: auto;
transition: filter 0.3s ease-in-out;
`;

const PublicUse = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  font-size:14px;
  padding: 5px 0;
  color: #6E6E6E;
`;

const CheckBox2 = styled.input`
margin-right: 10px;
  transform: ${({ checkbox }) => checkbox || 'scale(1.4)'};
  -webkit-appearance: none;
  border: 0.5px solid;
  padding: 5px;
  border-radius: 2px;
  position: relative;
  margin-left: 10px;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #FB0552;
  }
`;
const PublicUseContainer = styled.div`
  display: flex;
  
  flex-wrap: wrap;
`;

const PublicUseColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px; /* add some margin between columns */
`;
