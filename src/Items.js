import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

export default function Items() {
    const [searchkey, setsearchkey] = useState("");
    const itemsobj = useSelector((store) => store.itemsReducer);
    const [itemslist, setitemslist] = useState(itemsobj.items);

    function filteritems() {
        const duplicatelist = itemsobj.items;
        const filteredlist = duplicatelist.filter((item) =>
            item.phone_name.toLowerCase().includes(searchkey.toLowerCase())
        );
        setitemslist(filteredlist);
    }

    const itemsdata = itemslist.map((item) => {
        return (
            <div className="col-md-4">
                <Item item={item} />
            </div>
        );
    });

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Search Items"
                className="form-control mb-5"
                value={searchkey}
                onChange={(e) => {
                    setsearchkey(e.target.value);
                }}
                onKeyUp={filteritems}
            />

            <h1>Total Items : {itemslist.length} </h1>

            <div className="row">{itemsdata}</div>
        </div>
    );
}
