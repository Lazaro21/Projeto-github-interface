import React, { createContext, useState } from 'react'

export const GitHubContext = createContext({
    user: {

    },
    repositories: [],
    starred: [],
})

const GitHubProvider = ({ children }) => {
    const [gitHubState, setGitHubState] = useState({
        user: {
            login: {
                login: undefined,
                name: undefined,
                publicUrl: undefined,
                blog: undefined,
                company: undefined,
                location: undefined,
                followers: 0,
                following: 0,
                public_gists: 0,
            }
        },
        repositories: [],
        starred: [],
    })
    const contextValue = {
        gitHubState
    }

    return (
        <GitHubContext.Provider value={contextValue}>
            {children}
        </GitHubContext.Provider>
    )
}

export default GitHubProvider
