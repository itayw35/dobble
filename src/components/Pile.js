import React, { useEffect, useState } from "react";

function Pile() {
  const [cards, setCards] = useState([
    "https://rb.gy/1c9onp",
    "https://rb.gy/dmf21z",
    "https://rb.gy/qlflls",
    "http://surl.li/nniko",
    "http://surl.li/nnimi",
    "http://surl.li/nnimw",
    "https://tinyurl.ph/DtoVY",
    "http://surl.li/nnins",
    "http://surl.li/nnioh",
    "http://surl.li/nnipp",
    "http://surl.li/nniqg",
    "https://shorturl.asia/gMDK6",
    "https://shorturl.asia/3mhAM",
    "https://shorturl.asia/j0CZM",
    "https://shorturl.asia/vas1N",
    "https://shorturl.asia/nJjDh",
    "https://shorturl.asia/8ZEOo",
    "https://shorturl.asia/Q0dWD"
  ]);
  const makeCardsPile = (arr)=>{
    const deck = []
    for(let j = 0; j < 8; j++){
    let newArr = [...arr]
    const card = []
    for(let i = 0; i < 3; i++){
      const randomNum = generateRandomNum(newArr.length - 1)
      console.log(randomNum);
      card.push(newArr[randomNum])
      newArr = [...newArr.slice(0,randomNum),...newArr.slice(randomNum + 1,newArr.length - 1)]
    }
    console.log(card);
    deck.push(card)
  }
  console.log(deck);
  }
  const generateRandomNum = (num)=>{
   return Math.round(Math.random() * (num))
  }
useEffect=(makeCardsPile(cards),[])
  return (
  <div>
    {cards?cards.map((v)=>{return(
      <img src={v}></img>
    )}):null}
  </div>);
}

export default Pile;
