// TestComponent.js
import React, { useEffect } from 'react';
import { auth } from '../../utils/firebaseAuthUtil';

const TestComponent = () => {
  useEffect(() => {
    console.log('Firebase Auth:', auth);
  }, []);

  return <div>Firebase is set up correctly if you see no errors in the console.</div>;
};

export default TestComponent;
