class RockPaperScissorsGame {
    constructor() {
        this.options = ["👊", "🖐", "✌"]
        this.userScore = 0
        this.computerScore = 0
        this.resultElement = document.getElementById("result")
        this.userScoreElement = document.getElementById("userScore")
        this.computerScoreElement = document.getElementById("computerScore")
        this.btnRock = document.getElementById("btnRock")
        this.btnPaper = document.getElementById("btnPaper")
        this.btnScissors = document.getElementById("btnScissors")

        this.btnRock.addEventListener("click", () => this.play("👊"))
        this.btnPaper.addEventListener("click", () => this.play("🖐"))
        this.btnScissors.addEventListener("click", () => this.play("✌"))
    }

    computerSelection() {
        const randNumber = Math.floor(Math.random() * 3)
        return this.options[randNumber]
    }

    compare(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            this.resultElement.textContent = "It's a tie!"
        } else if (
            (userChoice === "👊" && computerChoice === "✌") ||
            (userChoice === "🖐" && computerChoice === "👊") ||
            (userChoice === "✌" && computerChoice === "🖐")
        ) {
            this.resultElement.textContent = `You win! ${userChoice} beats ${computerChoice}`
            this.userScore++
        } else {
            this.resultElement.textContent = `You lose! ${computerChoice} beats ${userChoice}`
            this.computerScore++
        }

        this.updateScores()
    }
    play(userChoice) {
        const computerChoice = this.computerSelection()
        this.compare(userChoice, computerChoice)
    }

    updateScores() {
        this.userScoreElement.textContent = this.userScore
        this.computerScoreElement.textContent = this.computerScore
    }
}

const game = new RockPaperScissorsGame()