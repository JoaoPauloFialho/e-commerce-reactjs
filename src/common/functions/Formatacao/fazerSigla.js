export default function fazerSigla(string) {
    const array = []
    array.push(string.toUpperCase()[0])
    for (let i = string.length; i != -1; i--) {
        if (string[i] === ' ') array.push(string[i + 1])
    }
    return array.join('')
}