import React, { useState } from "react";
import "./ImgList.css";

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
}
export default function ImgList() {
  const map = new Map();

  const [aIndex,setAIndex] = useState(0)

  const goToNum = (num) => {
    setAIndex(aIndex + 1)
    const node = map.get(catList[aIndex + 1]);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  // window.addEventListener("cut",e => {
  //     console.log(e);
  // })
  return (
    <div className="box">
      <h1 className="hao-color">我是一个很长的文字，好看的文本</h1>
      <button onClick={() => goToNum()}>下一个</button>
      <ul className="cat-list">
        {catList.map((item, index) => {
          return (
            <li key={index} className={index === aIndex ? 'active': ''}>
              <img
                src={item}
                ref={(node) => map.set(item, node)}
                alt="mao"
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// return catList;
