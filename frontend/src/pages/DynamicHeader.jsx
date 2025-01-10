import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import HeaderKeeper from './HeaderKeeper';
import HeaderRegular from './HeaderRegular';
import HeaderUnconnected from './Header_starter';

const DynamicHeader = () => {
  const [headerType, setHeaderType] = useState('unconnected');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setHeaderType(userData.isKeeper ? 'keeper' : 'regular');
        }
      } else {
        setHeaderType('unconnected');
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (headerType === 'keeper') return <HeaderKeeper />;
  if (headerType === 'regular') return <HeaderRegular />;
  return <HeaderUnconnected />;
};

export default DynamicHeader;
