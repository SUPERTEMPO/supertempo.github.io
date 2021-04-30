const shareButton = document.getElementById("shareButton")
shareButton.addEventListener("click", (e) => shareLink(e))
async function shareLink(e) {
    e.preventDefault()
    const title = document.getElementById("title")
    const text = document.getElementById("text")
    const url = document.getElementById("url")
    const message = document.getElementById("message")
    message.innerText = ''
    let isError = false
    if(title.value === "" || text.value === "" || url.value === ""){
        message.innerText = "Please enter all required inputs"
        isError = true
    }
    if(isError) return 
    if (navigator.share) {
        await navigator.share({
                title: title.value,
                text: text.value,
                url: url.value,
        })
        return message.innerText = "Link Shared Successfully"
    }
    message.innerText = "Web Share API is not available in your browser."
}
// share file button
const shareFilesButton = document.getElementById("shareFilesButton")
shareFilesButton.addEventListener("click", (e) => shareFiles(e))
const file = document.getElementById("file")
const files = []
file.addEventListener('change',e =>{
    files.push(e.target.files[0])
})
async function shareFiles(e) {
    e.preventDefault()
    const title = document.getElementById("title1")
    const text = document.getElementById("text1")
    const message1 = document.getElementById("message1")
    message1.innerText = ''

    let isError = false
    if(title.value === "" || text.value === "" || files.length === 0){
        message1.innerText = "Please enter all required inputs"
        isError = true
    }
    if(isError) return 
    console.log(files)
    if (navigator.canShare && navigator.canShare({files: files})) {
        try {
            await navigator.share({
                title: title.value,
                text: text.value,
                files: files,
            })
            return message1.innerText = 'File Shared Successfully'
        } catch (error) {
            console.log(error)
            return message1.innerText = 'Error sharing'
        }
    }
    return message1.innerText = "Web Share API is not available in your browser."
}