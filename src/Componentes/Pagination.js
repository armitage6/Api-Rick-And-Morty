import React, { useContext, useState } from "react";
import { Context } from "../store/context";

const Pagination = () => {
  const { store, actions } = useContext(Context);
  
   return  <header className="d-flex justify-content-between align-items-center">
      <button className="btn btn-primary btn-sm" onClick={() => actions.fetchPeople(store.peopleinfo.prev)}>
      Prev 
      </button>
      <button className="btn btn-primary btn-sm" onClick={() => actions.fetchPeople(store.peopleinfo.next)}>
        Next 
      </button>
    </header>
 
};

export default Pagination;
