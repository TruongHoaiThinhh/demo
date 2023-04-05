import React, { useEffect, useState } from 'react'

function Testimoial() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUser(users))
    }, [])

    return (
        <div class="testimoial">
            <div class="small-main">
                <div class="row">

                    {users.map(user => (
                        <div class="col-3" key={user.id}>
                            <i class="fa fa-quote-left"></i>

                            <p>
                                {user.company.catchPhrase}
                            </p>

                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>

                            <img src={require("../assets/images/user-1.png")} alt="" />

                            <h3>{user.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimoial
