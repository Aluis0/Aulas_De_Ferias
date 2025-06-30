document.addEventListener('DOMContentLoaded', () => {

    // --- Função Genérica de Verificação ---
    // Esta função será chamada por todos os botões de verificação
    const setupVerification = (buttonId, questionPrefix, feedbackPrefix, totalQuestions) => {
        const verifyButton = document.getElementById(buttonId);
        if (!verifyButton) return;

        verifyButton.addEventListener('click', () => {
            let allCorrect = true;

            for (let i = 1; i <= totalQuestions; i++) {
                const inputElement = document.getElementById(`${questionPrefix}${i}`);
                const feedbackElement = document.getElementById(`${feedbackPrefix}${i}`);
                
                // Ignora se o elemento não existir
                if (!inputElement) continue;

                const userAnswer = inputElement.value.trim().toLowerCase().replace(/\s+/g, ' ');
                const correctAnswer = inputElement.dataset.answer;

                // Limpa o feedback anterior
                inputElement.classList.remove('correct', 'incorrect');
                if (feedbackElement) {
                    feedbackElement.style.display = 'none';
                    feedbackElement.innerHTML = '';
                }

                if (userAnswer === correctAnswer) {
                    inputElement.classList.add('correct');
                } else {
                    inputElement.classList.add('incorrect');
                    allCorrect = false;

                    // Lógica de feedback inteligente (apenas para a atividade do "don't")
                    if (feedbackElement) {
                        const verb = inputElement.dataset.verb;
                        let feedbackHint = `Quase lá! Releia com atenção. <span class="en-word">You</span> can do it!`;
                        
                        if (verb) { // Se for a atividade do 'don't'
                            if (!userAnswer.includes("don't") && !userAnswer.includes("do not")) {
                                feedbackHint = `Lembre-se da palavra mágica para negativas... <span class="en-word">don't</span>!`;
                            } else if (!userAnswer.includes(verb)) {
                                feedbackHint = `Ótimo uso do <span class="en-word">don't</span>! Mas não se esqueça do verbo de ação.`;
                            }
                        }
                        
                        feedbackElement.innerHTML = feedbackHint;
                        feedbackElement.style.display = 'block';
                    }
                }
            }

            if (allCorrect) {
                alert('Incrível! Todas as respostas estão corretas! Você é um mestre!');
            }
        });
    };

    // Configurar as verificações para cada dia da Semana 1
    setupVerification('verify-s1d1', 's1d1q', null, 10); // Dia 1
    setupVerification('verify-s1d3', 's1d3q', 's1d3-feedback', 10); // Dia 3 (com feedback)
    setupVerification('verify-s1d4', 's1d4q', null, 10); // Dia 4
    setupVerification('verify-s1d5', 's1d5q', null, 10); // Dia 5

    // --- Funcionalidade dos Botões de Áudio ---
    document.querySelectorAll('.audio-btn').forEach(button => {
        button.addEventListener('click', () => {
            const audioSrc = button.dataset.audioSrc;
            alert(`Tocando áudio: ${audioSrc} (funcionalidade a ser implementada)`);
        });
    });

    // --- Funcionalidade de Concluir a Semana ---
    const completeWeekButton = document.getElementById('complete-week-btn');
    if (completeWeekButton) {
        completeWeekButton.addEventListener('click', () => {
            const weekNumber = completeWeekButton.dataset.week;
            localStorage.setItem(`week${weekNumber}_completed`, 'true');
            alert(`Congratulations! Missão da Semana ${weekNumber} concluída!`);
            window.location.href = '../index.html';
        });
    }
    // Adicione estas linhas ao final do arquivo js/atividades.js

// Configurar as verificações para cada dia da Semana 2
setupVerification('verify-s2d1', 's2d1q', null, 5); // Treino 1
setupVerification('verify-s2d2', 's2d2q', 's2d2-feedback', 4); // Treino 2
setupVerification('verify-s2d3', 's2d3q', 's2d3-feedback', 5); // Treino 3


});