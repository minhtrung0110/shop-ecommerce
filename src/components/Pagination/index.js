import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward} from "@fortawesome/free-solid-svg-icons";
import {Button} from "reactstrap";

function Pagination(props) {
    const { pagination, onPageChange} = props;
    const {_page,_limit, _totalRows    }=pagination
    const totalPages=Math.ceil(_totalRows/_limit)

    const handleOnChangePage=(newPage)=>{
       if(onPageChange){
           onPageChange(newPage)
       }
    }
    return (
        <div>
            <Button
                disabled={_page <= 1}
                onClick={()=>handleOnChangePage(_page-1)}
                >
                Back
            </Button>


            <Button
                disabled={_page >= totalPages}
                onClick={()=>handleOnChangePage(_page+1)}
            >
               Next
            </Button>
        </div>
    );
}

export default Pagination;