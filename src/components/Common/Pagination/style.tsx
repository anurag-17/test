import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  .pagination {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 20px;
    padding: 0;
  }

  .pagination a {
    cursor: default;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    color: red;
    margin-left: 10px;
   }

   .pagination li:not(.disabled) a:hover {
    background-color: bisque;
    cursor: pointer;
   }

   .pagination li a {
    font-weight: bold;
   }
   
   .pagination li.active a {
    color: #fff;
    background: #6c7ac9;
   }
   
   .pagination li.disabled a {
    pointer-events: none;
    color: rgb(198, 197, 202);
    border: 1px solid rgb(198, 197, 202);
   }

 
`;
