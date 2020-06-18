import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [userEmail, setEmail] = useState(null)
  const [userPhone, setPhone] = useState(null)

  const login = useCallback((jwtToken, id, email, phone) => {
    setToken(jwtToken)
    setUserId(id)
    setEmail(email)
    setPhone(phone)

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, userEmail: email, userPhone:phone
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    if (data && data.token) {
      login(data.token, data.userId, data.userEmail, data.userPhone)
    }
    setReady(true)
  }, [login])


  return { login, logout, token, userId, ready, userEmail, userPhone }
}