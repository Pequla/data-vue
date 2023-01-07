export default {
    formatDate(timestamp) {
        const date = new Date(timestamp)
        return `${date.toLocaleDateString('sr-SR')} ${this.addLeadingZeros(date.getHours())}:${this.addLeadingZeros(date.getMinutes())}`
    },
    addLeadingZeros(num) {
        return String(num).padStart(2, '0');
      }
}