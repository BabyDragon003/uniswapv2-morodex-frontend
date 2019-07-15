
const useUserAgent = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-useragent', navigator.userAgent)
  }, [])
}

export default useUserAgent
