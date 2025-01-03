import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>

            <div id="logout-button-div">
                <button id="logout-button">Logout</button>

                <Link
                    id="texting-page-link"
                    to='/textingPage'
                >
                    Texting Page Link
                </Link>
                <Link
                    id="register-page-link"
                    to='/register'
                >
                    Register Link
                </Link>
                <Link
                    id="find-friends-page-link"
                    to='/findFriends'
                >
                    Find Friends Link
                </Link>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Homepage;