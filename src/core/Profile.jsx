import React from 'react';
import ResumeData from '../components/profile/resume-data/resume-data.component';
import Layout from './Layout';
import { read } from './api';

const Profile = props => {

    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    const getResumeData = profileId => {
        read(profileId).then(result => {
            if(result.error){
                setError(result.error)
            } else {
                setData(result);
            }
        })
    }

    useEffect(() => {
        const profileID = props.match.params.profileId;
        getResumeData(profileID);
    }, [])

    return (
        <div className='profile'>
            <Layout>
                <ResumeData />      
            </Layout>
        </div>
    )

}



export default Profile;