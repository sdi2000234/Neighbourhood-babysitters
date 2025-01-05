import React from "react";
import './Breadcrumbs.css';

// In cases like PAGE1 , it gets called like <Breadcrumbs page1={"PAGE1"} />
// In cases like PAGE1 > PAGE2 , it gets called like <Breadcrumbs page1={"PAGE1"} link1={"./Link1"} page2={"PAGE2"} />
// In cases like PAGE1 > PAGE2 > PAGE3 , it gets called like <Breadcrumbs page1={"PAGE1"} link1={"./Link1"} page2={"PAGE2"}  link2={"./Link2"} page3={"PAGE3"} />

function Breadcrumbs({page1, link1=null, page2=null, link2=null, page3=null})
{
    return (
        <div className="breadCrumbs">
            {page2===null ? <p className="currentCrumb">{page1}</p> : <p className="previousCrumb"><a href={link1}>{page1} &gt;</a></p>}
            {page3===null ? <p className="currentCrumb">{page2}</p> : <div><p className="previousCrumb"><a href={link2}>{page2} &gt;</a></p><p className="currentCrumb">{page2}</p></div>}
        </div>
    );
}

export default Breadcrumbs;