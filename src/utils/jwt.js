export const addToken = () => {
    const token = JSON.parse(sessionStorage.getItem('token'))
    if (!token) return ''
    const tokenParsed = token.accessToken.replaceAll('"', "")
    const tokenCompleted = `Bearer ${tokenParsed}`
    return tokenCompleted;
}
