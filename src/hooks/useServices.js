import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')   //public theke amra shudhu folder name diye data fetch korbo.
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])   //useEffect er second param ta hocche dependcy list. ei list e jara jara thakbe tara jotobar change hobe useEffect ke totobar call kora hobe.ar joid useEffect ke react render koara somoy ekbar call chai tahole socond param hisebe ekta empty array hobe.ar joid kono second e kono param na deya hoy tahole se infinite taime cholte thakbe ebong ek soymoy  se error khab.

    return [services, setServices]
};

export default useServices;