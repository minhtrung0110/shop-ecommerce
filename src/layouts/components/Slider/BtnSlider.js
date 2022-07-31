import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faDiagramNext } from "@fortawesome/free-solid-svg-icons";
import style from "./Slider.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={cx('btn-slide',direction === "next" ? "next" : "prev")}
    >
      {direction === "next" ?<FontAwesomeIcon icon={faCircleArrowRight}/> :<FontAwesomeIcon icon={faCircleArrowLeft}/> } 
      
    </button>
  );
}