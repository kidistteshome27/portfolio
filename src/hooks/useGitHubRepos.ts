import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import {
  mergePublicRepo,
  privateWork,
  type GitHubApiRepo,
  type WorkDetail,
} from '../data/github'

export function useGitHubRepos() {
  const [publicRepos, setPublicRepos] = useState<WorkDetail[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=100`,
        )
        if (!res.ok) throw new Error('Could not load GitHub repos')
        const data: GitHubApiRepo[] = await res.json()
        if (!cancelled) {
          setPublicRepos(data.filter((r) => !r.private).map(mergePublicRepo))
          setError(null)
        }
      } catch {
        if (!cancelled) {
          setError('Unable to fetch live repos — showing saved work instead.')
          setPublicRepos([])
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  const allWork = [...publicRepos, ...privateWork]

  return {
    publicRepos,
    privateRepos: privateWork,
    allWork,
    loading,
    error,
    counts: {
      all: allWork.length,
      public: publicRepos.length,
      private: privateWork.length,
    },
  }
}
