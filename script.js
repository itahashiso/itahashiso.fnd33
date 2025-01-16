'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function getComputerChoice() {
    const choices = ['グー', 'チョキ', 'パー'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "あいこ";
    } else if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'チョキ' && computerChoice === 'パー') ||
        (userChoice === 'パー' && computerChoice === 'グー')
    ) {
        return "あなたの勝ち！";
    } else {
        return "コンピュータの勝ち！";
    }
}

function playJanken(userChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        あなたの選択: ${userChoice} <br>
        コンピュータの選択: ${computerChoice} <br>
        結果: ${determineWinner(userChoice, computerChoice)}
    `;
}
