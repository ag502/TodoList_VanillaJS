const baseURL = 'https://jsonplaceholder.typicode.com'

export const getPosts =  () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`${baseURL}/posts`)
            if (response.status === 200) {
                resolve(response.json())
            }
            reject(response.json())
        } catch (error) {
            reject(error)
        }
    })
}