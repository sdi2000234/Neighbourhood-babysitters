import React from "react";
import './Breadcrumbs.css';
import { useNavigate } from 'react-router-dom';

// In cases like PAGE1 , it gets called like <Breadcrumbs page1={"PAGE1"} />
// In cases like PAGE1 > PAGE2 , it gets called like <Breadcrumbs page1={"PAGE1"} link1={"../Link1"} page2={"PAGE2"} />
// In cases like PAGE1 > PAGE2 > PAGE3 , it gets called like <Breadcrumbs page1={"PAGE1"} link1={"../Link1"} page2={"PAGE2"}  link2={"../Link2"} page3={"PAGE3"} />

function Breadcrumbs({page1, link1=null, page2=null, link2=null, page3=null})
{

    //Για περιήγηση σε υπολοιπες σελίδες
    const navigate = useNavigate();
    const handleLink1 = () => { navigate(link1); };
    const handleLink2 = () => { navigate(link2); };

    return (
        <div className="breadCrumbs">
            {page2===null ? <p className="currentCrumb">{page1}</p> : <p onClick={handleLink1} className="previousCrumb">{page1} &gt;</p>}
            {page3===null ? <p className="currentCrumb">{page2}</p> : <div><p onClick={handleLink2} className="previousCrumb">{page2} &gt;</p><p className="currentCrumb">{page2}</p></div>}
        </div>
    );
}

export default Breadcrumbs;