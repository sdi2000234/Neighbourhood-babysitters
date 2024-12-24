import React from 'react';
import './ParentAllAppointments.css';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import AppointmentCardProfessional from '../../components/AppointmentCardProfessional';
import Grid from '@mui/material/Grid2';  

function ParentAllAppointments() { //ΙΣΩΣ ΘΕΛΕΙ ΠΕΡΙΣΣΟΤΕΡΑ ΠΧ ΠΡΟΦΙΛ/ΡΑΝΤΕΒΟΥ
    const breadcrumbPages = [
        { name: 'ΡΑΝΤΕΒΟΥ' }
    ];

    // Πίνακας ραντεβού με ημερομηνίες και ώρες
    const appointments = [
        {
            picLink: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
            professionalName: 'Μαρία Παπαδοπούλου',
            date: '12/02/2024',  
            time: '12:30 μμ',
            loc: "https://www.webex.com/test-meeting.html",
            type: "online"
        },
        {
            picLink: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
            professionalName: 'Γιάννης Ιωάννου',
            date: '12/02/2024',  
            time: '10:00 πμ',
            loc: "Αθήνα",
            type: "facetoface"
        },
        {
            picLink: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
            professionalName: 'Αλέξανδρος Κωνσταντίνου',
            date: '03/04/2024', 
            time: '12:30 μμ',
            loc: "https://www.webex.com/test-meeting.html",
            type: "online"
        },
        {
            picLink: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
            professionalName: 'Γιάννης Ιωάννου',
            date: '12/03/2024',  
            time: '10:00 πμ',
            loc: "Αθήνα",
            type: "facetoface"
        },
        {
            picLink: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
            professionalName: 'Αλέξανδρος Κωνσταντίνου',
            date: '12/03/2024', 
            time: '8:30 πμ',
            loc: "https://www.webex.com/test-meeting.html",
            type: "online"
        }
        
    ];

    // Συνάρτηση για μετατροπή της ημερομηνίας από 'DD/MM/YYYY' σε 'YYYY-MM-DD'
    const convertToDateObject = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    };

    // Συνάρτηση για μετατροπή της ώρας σε 24ωρη μορφή για σύγκριση
    const convertTo24HourFormat = (timeString) => {
        const [time, period] = timeString.split(' ');  // Διαχωρισμός την ώρα και την περίοδο (π.χ., '12:30 μμ' -> ['12:30', 'μμ'])
        let [hours, minutes] = time.split(':');  // Διαχωρισμός ώρες και λεπτά
        hours = parseInt(hours);
        
        if (period === 'μμ' && hours !== 12) {
            hours += 12;  // Μετατροπή PM (εκτός από 12 μ.μ.)
        } else if (period === 'πμ' && hours === 12) {
            hours = 0;  // Μετατροπή 12 π.μ. σε 0 ώρες
        }

        return new Date(2000, 0, 1, hours, minutes);  // Δημιουργία ένος νέου Date αντικείμενο για σύγκριση (δεν μας ενδιαφέρει η ημερομηνία)
    };

    // Ταξινόμηση του πίνακα με βάση την ημερομηνία και την ώρα
    const sortedAppointments = [...appointments].sort((a, b) => {
        const dateA = convertToDateObject(a.date);
        const dateB = convertToDateObject(b.date);

        // Αν οι ημερομηνίες είναι ίδιες, συγκρίνουμε την ώρα
        if (dateA.getTime() === dateB.getTime()) {
            const timeA = convertTo24HourFormat(a.time);
            const timeB = convertTo24HourFormat(b.time);
            return timeA - timeB;  // Σύγκριση των ωρών
        }

        // Αν οι ημερομηνίες είναι διαφορετικές, συγκρίνουμε τις ημερομηνίες
        return dateA - dateB;
    });

    // Συνάρτηση για την εμφάνιση της ημερομηνίας στην μορφή 'DD/MM/YYYY'
    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <ParentNavigation currentNavPage={'parAp'}/>
            <MyBreadcrumbs breadcrumbPages={breadcrumbPages} />

                <Grid container spacing={4} justifyContent="center" alignItems="flex-start" className="appointments">
                    {sortedAppointments.map((appointment, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <AppointmentCardProfessional 
                                picLink={appointment.picLink} 
                                professionalName={appointment.professionalName} 
                                date={formatDate(appointment.date)}  // Εμφάνιση ημερομηνίας με την επιθυμητή μορφή
                                loc={appointment.loc} 
                                time={appointment.time} 
                                type={appointment.type} 
                            />
                        </Grid>
                    ))}
                </Grid>

            <Footer />
        </>
    );
}

export default ParentAllAppointments;
