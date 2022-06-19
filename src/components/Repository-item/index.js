import React from 'react'

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
    return (
        <div>
            <h2>app-ideas</h2>
            <h4>Full Name</h4>
            <a href={linkToRepo} target="_blank">
                {fullName}
            </a>
        </div>
    )
}

export default RepositoryItem