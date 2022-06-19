import { useContext } from "react"
import { GithubContext } from "../Providers/gitHubProvider"

const useGitHub = () => {
    const { githubState, getUser } = useContext(GithubContext)

    return { githubState, getUser }
}

export default useGitHub