export const addToken = () => {
    const token = localStorage.getItem('token')
    console.log(token);
    if (!token) return ''
    const tokenParsed = token.replaceAll('"', "")
    const tokenCompleted = `Bearer ${tokenParsed}`
    return tokenCompleted;
}
