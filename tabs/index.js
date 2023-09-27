const btnStep1 = document.getElementById("btnStep1")
const btnStep2 = document.getElementById("btnStep2")
const btnStep3 = document.getElementById("btnStep3")
const titleElement = document.getElementById("title-descripton")
const paragraphElement = document.getElementById("paragraph-description")

changeBtnProps(btnStep1)

function changeBtnProps(button) {
    button.disabled = true
    button.style.backgroundColor = "#fff"
    button.style.color = "#000"
    button.classList.remove("hover")
}

function changeOtherBtnsProps(button) {
    button.disabled = false
    button.style.backgroundColor = "#111"
    button.style.color = "#facc00"
    button.classList.add("hover")
}

function printStep(buttonID) {
    switch (buttonID) {
        case "btnStep1":
            titleElement.textContent = "Step 1"
            paragraphElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint cumque quasi, amet impedit tempore necessitatibus iste. Ratione possimus perspiciatis sapiente, ex alias, ipsam sint beatae vel repellat aperiam corrupti porro et molestiae nobis itaque recusandae vitae atque! Reiciendis voluptatum molestiae autem consectetur corporis libero itaque quo mollitia quod! Corrupti doloribus veniam iusto soluta laborum saepe debitis reiciendis atque nihil eaque ducimus quo ullam ipsum, laboriosam velit vitae sint, eius molestiae unde, tempora hic ipsam? Cupiditate, beatae. Nostrum eos, id velit nisi libero exercitationem, et fugiat assumenda mollitia debitis deleniti, illum iusto. Officiis, ratione ex? Magni, impedit vel. Quam, eaque."
            break
        case "btnStep2":
            titleElement.textContent = "Step 2"
            paragraphElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae doloremque enim deleniti voluptatum necessitatibus, facilis et quas, quasi magni obcaecati iusto ipsam ipsum amet autem labore dignissimos accusantium dolorem perspiciatis non harum, alias vel a asperiores? Qui amet tempora mollitia quos, facilis debitis nemo praesentium, optio facere nostrum, eum totam magnam quasi laborum sint repellendus quibusdam vero? Ipsum explicabo officiis culpa delectus quasi cumque saepe voluptates accusantium voluptatem omnis iste, sequi beatae quae dolor vero nostrum at amet eum dolores ut. Autem velit eius, libero adipisci dolore harum accusantium ipsum, voluptate ad recusandae vitae blanditiis? Harum nihil molestiae cum!"
            break
        case "btnStep3":
            titleElement.textContent = "Step 3"
            paragraphElement.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, asperiores magnam? In expedita laudantium magnam ratione alias minus nemo incidunt, dignissimos architecto placeat corporis molestiae labore vitae ullam laborum ut culpa eaque officiis, blanditiis sunt fugit ex? Neque quod mollitia delectus ipsa? Dolore veritatis, tenetur laudantium possimus unde debitis enim est illum, ea distinctio quod itaque quaerat ex sint eum optio in saepe labore sunt odit? Dolore, iusto! Ducimus sint laudantium consectetur. Velit facere culpa excepturi ad, quae distinctio iure incidunt. Odio alias laboriosam unde quo repudiandae corporis laborum quaerat asperiores minima quis in nam maxime recusandae iure, provident a?"
            break
    }
}

btnStep1.addEventListener("click", () => {
    printStep("btnStep1")
    changeBtnProps(btnStep1)
    changeOtherBtnsProps(btnStep2)
    changeOtherBtnsProps(btnStep3)
})

btnStep2.addEventListener("click", () => {
    printStep("btnStep2")

    changeBtnProps(btnStep2)
    changeOtherBtnsProps(btnStep1)
    changeOtherBtnsProps(btnStep3)
})

btnStep3.addEventListener("click", () => {
    printStep("btnStep3")
    changeBtnProps(btnStep3)
    changeOtherBtnsProps(btnStep1)
    changeOtherBtnsProps(btnStep2)
})