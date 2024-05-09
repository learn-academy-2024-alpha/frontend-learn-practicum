import { useState, useEffect } from "react"

const useFetch = (formData, endpoint, requestMethod) => {
  console.log("useFetch", formData, endpoint, requestMethod)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const developmentURL = "http://localhost:3000"

  useEffect(() => {
    const fetchRequest = async (formData) => {
      setLoading(true)
      try {
        const signInResponse = await fetch(`${developmentURL}/${endpoint}`, {
          method: requestMethod,
          headers: {
            "Content-Type": "application/json",
            Acceapt: "application/json"
          },
          body: JSON.stringify(formData)
        })
        if (!signInResponse.ok) throw new Error("Fetch failed")
        const payload = await signInResponse.json()
        setLoading(false)
        setData(payload)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchRequest(formData)
  }, [formData, endpoint, requestMethod]) // any time these values change, the useEffect will run
  return { data, loading, error }
}

export { useFetch }
