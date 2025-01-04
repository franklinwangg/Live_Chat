import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>

            <div id="logout-button-div">
                <div>
                    <button id="logout-button">Logout</button>

                </div>

                <div>
                    <Link
                        id="texting-page-link"
                        to='/textingPage'
                    >
                        Texting Page Link
                    </Link>
                </div>

                <div>
                    <Link
                        id="register-page-link"
                        to='/register'
                    >
                        Register Link
                    </Link>
                </div>

                <div>
                    <Link
                        id="find-friends-page-link"
                        to='/findFriends'
                    >
                        Find Friends Link
                    </Link>
                </div>

                <div>
                    <Link id="login-page-link" to="/login">
                        Login
                    </Link>
                </div>

            </div>
            <div>
            </div>
        </div>
    );
}

export default Homepage;