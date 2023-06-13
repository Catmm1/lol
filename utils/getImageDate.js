
const pad = (date) => {
    let datestr = String(date)
    if (date < 10) {
        return '0' + datestr;
    } else {
        return date;
    }
}

function generateRandomString() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomLetter = alphabet.charAt(randomIndex);
        randomString += randomLetter;
    }
    return randomString;
}

function getFileExtension(filePath) {
    const lastDotIndex = filePath.lastIndexOf(".");
    if (lastDotIndex === -1) {
        return null; 
    }
    return filePath.substr(lastDotIndex);
}//获取文件后缀

module.exports.GenerateName = async (path) => {
    let suffix=getFileExtension(path);
    let random = generateRandomString();
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // 格式化日期时间字符串
    let formattedDate = year + pad(month) + pad(day) + pad(hours) + pad(minutes) + pad(seconds) + random+suffix;
    return formattedDate
}