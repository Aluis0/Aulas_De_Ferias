document.addEventListener('DOMContentLoaded', () => {
    // Função para verificar o status de conclusão de cada semana
    function checkCompletionStatus() {
        for (let i = 1; i <= 4; i++) {
            const isCompleted = localStorage.getItem(`week${i}_completed`);
            if (isCompleted === 'true') {
                const card = document.getElementById(`week-${i}`);
                const statusBadge = document.getElementById(`status-${i}`);
                
                if (card) {
                    card.classList.add('completed');
                }
                if (statusBadge) {
                    statusBadge.textContent = 'CONCLUÍDO!';
                }
            }
        }
    }

    // Verifica o status assim que a página carrega
    checkCompletionStatus();
});