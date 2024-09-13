import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
// import { fireDB } from '../firbase/f'; // Import your Firebase configuration
import { fireDb } from '../../firebase/firebaseconfig';
function MyState(props) {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    };

    const [searchkey, setSearchkey] = useState('');
    const [loading, setLoading] = useState(false);
    const [getAllBlog, setGetAllBlog] = useState([]);

    function getAllBlogs() {
        setLoading(true);
        try {
            const q = query(
                collection(fireDb, 'blogPost'),
                orderBy('time')
            );
            const data = onSnapshot(q, (querySnapshot) => {
                let blogArray = [];
                querySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });

                setGetAllBlog(blogArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, []);

    //delete profile
    // Blog Delete Function 
    const deleteProfiles = async (id) => {
        try {
            await deleteDoc(doc(fireDb, "blogPost", id));
            getAllBlogs()
            toast.success("Blogs deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MyContext.Provider
            value={{
                mode,
                toggleMode,
                searchkey,
                setSearchkey,
                loading,
                setLoading,
                getAllBlog,
                deleteProfiles
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
