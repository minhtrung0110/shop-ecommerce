import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {Button} from "reactstrap";
import styles from "./Pagination.module.scss"
import  classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Pagination(props) {
    const _pageNeighbours=2
    const { pagination, onPageChange} = props;
    const {_page,_limit, _totalRows,}=pagination
    const totalPages=Math.ceil(_totalRows/_limit)

   /*for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }*/
    const pageLeftNumbers = [];
    for (let i = _page-1; i >= _page- _pageNeighbours && i>=1; i--) {
        pageLeftNumbers.push(i);
    }

    const pageRightNumbers = [];
    for (let i = _page+1; i <= _page+ _pageNeighbours && i<=totalPages; i++) {
        pageRightNumbers.push(i);
    }
   // console.log([...pageLeftNumbers,_page,...pageRightNumbers].sort())
    const handleOnChangePage=(newPage)=>{
       if(onPageChange){
           onPageChange(newPage)
       }
    }
    //console.log('pageLeft:',pageLeftNumbers)
   // console.log('pageRight:',pageRightNumbers)
    const pageNumbers = [...pageLeftNumbers,_page,...pageRightNumbers].sort();
    return (
        <div className={cx("pagination","text-center")}>
            <Button
                disabled={_page <= 1}
                onClick={()=>handleOnChangePage(1)}
                color="secondary"
                outline
                className={cx('page')}
            >
                <FontAwesomeIcon icon={faAnglesLeft} />
            </Button>

            <Button
                disabled={_page <= 1}
                onClick={()=>handleOnChangePage(_page-1)}
                color="secondary"
                outline
                className={cx('page')}
                >
                <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
            {_page !== 1 && <Button
                disabled={_page !== 1}
                color="secondary"
                outline
                className={cx('page','disabled')}
            >
                ...
            </Button>
            }




            {
               pageNumbers.map((item,index)=>(
                   <Button
                       className={cx('page')}
                        active={_page===item}
                       outline color="success"
                   onClick={()=>handleOnChangePage(item)}
                   >{item}</Button>
               ))
            }







            {_page !== totalPages && <Button
                disabled={_page !== totalPages}
                color="secondary"
                outline
                className={cx('page','disabled')}
            >
                ...
            </Button>
            }
            <Button
                disabled={_page >= totalPages}
                onClick={()=>handleOnChangePage(_page+1)}
                color="secondary"
                outline
                className={cx('page')}
            >
               <FontAwesomeIcon icon={faAngleRight} />
            </Button>
            <Button
                disabled={_page >=totalPages}
                onClick={()=>handleOnChangePage(totalPages)}
                color="secondary"
                outline
                className={cx('page')}
            >
                <FontAwesomeIcon icon={faAnglesRight} />
            </Button>
        </div>
    );
}

export default Pagination;