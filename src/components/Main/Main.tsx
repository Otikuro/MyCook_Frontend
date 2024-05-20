import { useState } from 'react';
import Header from '../Header/Header';
import User from '../User/User';
import Explorer from '../Explorer/Explorer';
import NewPost from '../NewPost/NewPost';
import Navigation from '../Navigation/Navigation';
import Libraries from '../Libraries/Libraries';

export default function Main({ logoutHandler }: { logoutHandler: () => void }) {
    const [view, setView] = useState('Explorer');

    function viewHandler(selectedView: string) {
        setView(selectedView);
    }

    return (
        <>
            <Header viewHandler={viewHandler} />

            {view === 'User' ?
                <User logoutHandler={logoutHandler} />
                :
                <>
                    {view === 'Explorer' && (<Explorer />)}
                    {view === 'NewPost' && (<NewPost />)}
                    {view === 'Library' && (<Libraries />)}

                    <Navigation viewHandler={viewHandler} /> 
                </>
            }
        </>
    );
}