// import React from "react";
// import styled from "styled-components";

 const Modal = () =>{
    return( 
//         <>
//             <Overlay>
//                 <ContenedorModal>
//                     <h1>conetinod</h1>
//                 </ContenedorModal>
//             </Overlay>
//         </>

// const Overlay = styled.div`
//     width: 100vw;
//     height:100vh;
//     position:fixed;
//     top:0;
//     left:0;
//     background: rgba(0,0,0,.5);
//     display:flex;
//     padding:40px;
//     aling-items: center;
//     justify-content:center;
// `;
// const ContenedorModal = styled.div`
//     width:500px;
//     min-height:100px;
//     background:#fff;
//     position:relative;
//     padding:20px;
// `;

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
        </div>
        </div>
    </div>
</div>
        );
    }
export default Modal;