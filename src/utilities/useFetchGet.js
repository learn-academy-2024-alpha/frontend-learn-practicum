import { useState, useEffect } from "react"

const useFetchGet = (endpoint) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const developmentURL = "http://localhost:3000"

  useEffect(() => {
    const fetchRequest = async () => {
      setLoading(true)
      try {
        const signInResponse = await fetch(`${developmentURL}/${endpoint}`)
        if (!signInResponse.ok) throw new Error("Fetch failed")
        const payload = await signInResponse.json()
        setLoading(false)
        setData(payload)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchRequest()
  }, [endpoint]) // any time these values change, the useEffect will run
  return { data, loading, error }
}

export { useFetchGet }
