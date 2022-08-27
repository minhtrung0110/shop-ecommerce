import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward} from "@fortawesome/free-solid-svg-icons";
import {Button} from "reactstrap";

function Pagination(props) {
    const { pagination, onPageChange} = props;
    const {_page,_limit, _totalRows    }=pagination
    const totalPages=Math.ceil(_totalRows/_limit)
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    const handleOnChangePage=(newPage)=>{
       if(onPageChange){
           onPageChange(newPage)
       }
    }

    return (
        <div className="text-center">
            <Button
                disabled={_page <= 1}
                onClick={()=>handleOnChangePage(_page-1)}
                color="secondary"
                outline
                >
                Back
            </Button>
            {
               pageNumbers.map((item,index)=>(
                   <Button
                        active={_page===item}
                       outline color="success"
                   onClick={()=>handleOnChangePage(item)}
                   >{item}</Button>
               ))
            }
            <Button
                disabled={_page >= totalPages}
                onClick={()=>handleOnChangePage(_page+1)}
                color="secondary"
                outline
            >
               Next
            </Button>
        </div>
    );
}

export default Pagination;