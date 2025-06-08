export default {
    formatDate(timestamp) {
        if (timestamp == null) return 'N/A'
        return new Date(timestamp).toLocaleString('sr-RS', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })
    },
    addLeadingZeros(num) {
        return String(num).padStart(2, '0');
    }
}