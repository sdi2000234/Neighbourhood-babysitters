import React from 'react'
import './NotificationsProfessional.css';
import Message from '../../components/Message';
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';

function NotificationsProfessional() {

    const breadcrumbPages = [
        { name: 'ΕΙΔΟΠΟΙΗΣΕΙΣ' }
    ];

    // Ορισμός του array με τα δεδομένα 
    const historyData = [
    {
        picLink: "Pfp",
        name: "Αγγελική Χριστοπούλου",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "30/11/2024"
    },
    {
        picLink: "Pfp",
        name: "Αγγελική Χριστοπούλου",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "30/11/2024"
    },
    {
        picLink: "Pfp",
        name: "Ελένη Χριστοπούλου",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "30/11/2024"
    }

    ];


    return (
        <>  

        <ProfessionalNavigation currentNavPage={'profNot'}/>
        <MyBreadcrumbs breadcrumbPages={breadcrumbPages} />

        <div className='NotificationsProfessionalContainer'>

            <div className='filtersNotifProfessional'> 

                <div>
                    Φίλτρα
                    <hr className='lineNotProfessional'/>
                </div>

                <div>

                    <ul>
                        <li>
                            <input type="checkbox" id="checkbox1" />
                            <label for="checkbox1" class="checkbox-label"> Νέα Αίτηση Συνεργασίας</label>
                        </li>
                        <li>
                            <input type="checkbox" id="checkbox2" />
                            <label for="checkbox2" class="checkbox-label"> Νέα Αξιολόγηση</label>
                        </li>
                        <li>
                            <input type="checkbox" id="checkbox3" />
                            <label for="checkbox3" class="checkbox-label"> Αποδοχή Συμφωνητικού</label>
                        </li>
                        <li>
                            <input type="checkbox" id="checkbox4" />
                            <label for="checkbox4" class="checkbox-label"> Επιβεβαίωση Πληρωμής</label>
                        </li>
                        <li>
                            <input type="checkbox" id="checkbox5" />
                            <label for="checkbox5" class="checkbox-label"> Τροποποίηση Ραντεβού</label>
                        </li>
                    </ul>

                    <hr className='lineNotProfessional'/>

                </div>

                <div>

                    <p className='sortingtextclass'>Ταξινόμηση:</p>

                    <ul>
                        <li>
                            <input type="radio" id="radio1" name="sortOptionsProfessional"/>
                            <label for="radio1" class="radio-label"> Ημερομηνία - Αύξουσα</label>
                        </li>
                        <li>
                            <input type="radio" id="radio2" name="sortOptionsProfessional"/>
                            <label for="radio2" class="radio-label"> Ημερομηνία - Φθίνουσα</label>
                        </li>
                        <li>
                            <input type="radio" id="radio3" name="sortOptionsProfessional"/>
                            <label for="radio3" class="radio-label"> Όνομα - Αύξουσα</label>
                        </li>
                        <li>
                            <input type="radio" id="radio4" name="sortOptionsProfessional"/>
                            <label for="radio4" class="radio-label"> Όνομα - Φθίνουσα</label>
                        </li>
                        
                    </ul>

                    <hr className='lineNotProfessional'/>

                </div>

            </div>

            <div className='NotificationssProfessional'>
            {historyData.map((data, index) => (
                <div key={index}>
                <Message
                    picLink={data.picLink}
                    name={data.name}
                    content={data.content}
                    date={data.date}
                />
                <br />
                </div>
            ))}
            </div>


        </div>

            <Footer/>
        </>
    )
}

export default NotificationsProfessional