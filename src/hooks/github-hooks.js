import { useContext } from "react"
import { GitHubContext } from "../Providers/gitHubProvider"

const useGitHub = () => {
    const { gitHubState } = useContext(GitHubContext)

    return { gitHubState }
}

export default useGitHub