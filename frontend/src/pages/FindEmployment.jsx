import React from 'react';
import './FindEmployment.css'
import nanny from '../assets/babysitter_intro.png';
import step0 from '../assets/info_white.png'
import step1 from '../assets/profile_white.png'
import step2 from '../assets/personal_ad_white.png'
import step3 from '../assets/conversation_white.png'
import step4 from '../assets/handshake_white.png'
import step5 from '../assets/voucher_white.png'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const FindEmployment = () => {

    const navigate = useNavigate();
    const handleTerms = () => {navigate('/TermsForVoucher');};
    const handleRegister = () => {navigate('/register');};

    return (
        <div className='findEmployment'>
            <div className='nannyImage'>
                <img src={nanny} alt='nanny'/>
            </div>
            <div>
                <h2>Βρείτε εργασία ως επαγγελματίας φροντιστής μέσω της πλατφόρμας μας!</h2>
                <div className='findEmploymentSteps'>
                    <div className='imageBG'>
                        <img src={step0} alt='step0'/>
                    </div>
                    <div className='lezada'>
                        <h3>Έλεγξε εάν πληρείς τις προϋποθέσεις συμμετοχής στην δράση:</h3>
                        <p>Μπορείς να μεταβείς στην σελίδα <button onClick={handleTerms}>"Προϋποθέσεις για Voucher"</button> ώστε να επιβεβαιώσεις αν μπορείς να συμμετάσχεις στο πρόγραμμά μας και να λάβεις αμοιβή.</p>
                    </div>
                </div>
                <div className='findEmploymentSteps'>
                    <div className='imageBG'>
                        <img src={step1} alt='step1'/>
                    </div>
                    <div className='lezada'>
                        <h3>Δημιούργησε το προφίλ σου:</h3>
                        <p>Συμπλήρωσε τα στοιχεία σου, τα πιστοποιητικά σου, και τις ικανότητές σου στο προφίλ σου ώστε να μπορούν να μάθουν για εσένα ενδιαφερόμενοι γονείς.</p>
                    </div>
                </div>
                <div className='findEmploymentSteps'>
                    <div className='imageBG'>
                        <img src={step2} alt='step2'/>
                    </div>
                    <div className='lezada'>
                        <h3>Δημιούργησε και κοινοποίησε αγγελίες:</h3>
                        <p>Μπορείς να υποβάλλεις αγγελίες που θα εμφανίζονται σε ενδιαφερόμενους γονείς και θα διευκολύνουν την εύρεση θέσης εργασίας σου.</p>
                    </div>
                </div>
                <div className='findEmploymentSteps'>
                    <div className='imageBG'>
                        <img src={step3} alt='step3'/>
                    </div>
                    <div className='lezada'>
                        <h3>Γνώρισε τους γονείς που ενδιαφέρονται να σε απασχολήσουν:</h3>
                        <p>Μπορείς να κλείσεις ραντεβού γνωριμίας - είτε δια ζώσης είτε online - ώστε να έρθεις σε άμεση επαφή με τους γονείς που αναξητούν τις υπηρεσίες σου.</p>
                    </div>
                </div>
                <div className='findEmploymentSteps'>
                    <div className='imageBG'>
                        <img src={step4} alt='step4'/>
                    </div>
                    <div className='lezada'>
                        <h3>Υπέγραψε συμφωνητικό συνεργασίας:</h3>
                        <p>Το συμφωνητικό θα περιλαμβανει απαραίτητες πληροφορίες όπως η διάρκεια της εργασίας σου με τον συγκεκριμένο γονέα, καθώς και το ποσό που θα λαμβάνεις ως αμοιβή για κάθε μήνα εργασίας.</p>
                    </div>
                </div>
                <div className='findEmploymentSteps'>
                    <div className='imageBG'>
                        <img src={step5} alt='step5'/>
                    </div>
                    <div className='lezada'>
                        <h3>Πληρωμή μέσω Voucher:</h3>
                        <p>Η πληρωμή για την εργασία σου θα γίνεται μέσω Voucher που προσφέρει το κράτος στα άτομα που πληρούν τις απαραίτητες προϋποθέσεις.</p>
                    </div>
                </div>
            </div>
            <div className='registerDIV'>
                <h1 className='registerFindEmployment'>Κάνε εγγραφή ως επαγγελματίας πατώντας το παρακάτω κουμπί και έπειτα τσεκάροντας το κουτάκι "Θέλω να εγγραφώ ως επαγγελματίας"</h1>
                <button onClick={handleRegister} className='registerButtonFindEmployment'>Εγγραφή</button>
            </div>
            <Footer/>
        </div>
    );
};

export default FindEmployment;