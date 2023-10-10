const addAdultTicket = document.querySelector('.addAdultTicketBtn')
const addKidTicket = document.querySelector('.addKidTicketBtn')

const addTicketButtons = document.querySelectorAll(".addTicketBtn")

const ticketsContainer = document.querySelector(".tickets")
const ticketsContainerResult = document.querySelector(".tickets-list")

const totalValueText = document.querySelector('.total-result')

const payBtn = document.querySelector('.pay')

let totalValue = 0
const adultPrice = 150
const kidPrice = 50
let ticketIndex = 0

const totalNameText = document.querySelector('.total-name')

const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

addTicketButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const newTicket = document.createElement("div")
        newTicket.classList.add("ticket")
        newTicket.classList.add(`ticket${ticketIndex}`)
        newTicket.setAttribute("data-index", ticketIndex)
        
        const newTicketResult = document.createElement("div")
        newTicketResult.classList.add("result-preview")
        newTicketResult.classList.add(`result-preview${ticketIndex}`)
        newTicketResult.setAttribute("data-index", ticketIndex)

        if (button.classList.contains("addAdultTicketBtn")) {
            totalValue += adultPrice
            totalValueText.innerHTML = `R$${totalValue}`
            newTicket.classList.add("ticket-adult")
            newTicket.innerHTML = `
            <div class="ticket-texts ticket-texts${ticketIndex}">
                <h3 class="ticket-type">Ingresso Adulto</h3>
                <div class="ticket-content ticket-name">
                    <label for="iname">Nome:</label>
                    <input class="iname iname${ticketIndex}" type="text" name="iname" id="" placeholder="Nome e Sobrenome"><br>
                </div>
                <div class="ticket-content ticket-cpf">
                    <label for="icpf">CPF:</label>
                    <input class="icpf icpf${ticketIndex}" type="number" name="icpf" id="" placeholder="XXX.XXX.XXX.XX"><br>
                </div>
                <div class="ticket-content ticket-birth">
                    <label for="ibirth">Data de <br> Nascimento:</label>
                    <input class="ibirth ibirth${ticketIndex}" type="date" name="ibirth" id=""><br>
                </div>
                <div class="ticket-content ticket-students">
                    <label for="ilist-student">Alunos:</label>
                    <select class="list-students list-students${ticketIndex}" id="">
                        <option value="">Selecione uma opção</option>
                        <option value="Diego da Silva">Diego da Silva</option>
                        <option value="Daniel Zamboni">Mitinho GG</option>
                    </select>
                </div>
                <div class="ticket-content ticket-teacher">
                    <label for="iteacher-name">Professores:</label>
                    <input class="iteacher-name iteacher-name${ticketIndex}" type="text" name="iteacher-name" id="" placeholder="Nome do professor(a)">
                </div>
            </div>
            <div class="rest-know">
                <button class="delete-btn">Excluir</button>
                <div class="restriction-div">
                    <label class="rest-label" for="irestriction">Possui Alguma Restrição Alimentar?</label>
                    <textarea class="irestriction irestriction${ticketIndex}" name="irestriction" id="irestriction" cols="10" rows="3" placeholder="Se sim, digite aqui..."></textarea>
                </div>
                <div class="know-div">
                    <p>Conhece alguém do Cetec?</p>
                    <div class="to-know">
                    <div class="radio">
                        <input class="itype-input itype-input${ticketIndex}" type="radio" id="radio1" name="know-somebody" data-ticket-index="${ticketIndex}" value="yes-student">
                        <label class="radio-label" for="radio1">Pai de Aluno</label>
                    </div>
                    <div class="radio">
                        <input class="itype-input itype-input${ticketIndex}" type="radio" id="radio2" name="know-somebody" data-ticket-index="${ticketIndex}" value="yes-teacher"> 
                        <label class="radio-label" for="radio2">Sou Professor</label>
                    </div>
                    <div class="radio">
                        <input class="itype-input itype-input${ticketIndex}" type="radio" id="radio3" name="know-somebody" data-ticket-index="${ticketIndex}" value="no"> 
                        <label class="radio-label" for="radio3">Não</label>
                    </div>
                </div>
            </div>
            `;
            newTicketResult.innerHTML = `
                <div class="result-texts">
                    <span class="result-type">Ingresso Adulto:</span><br>
                    <span class="result-name">Nome: X</span><br>
                    <span class="result-cpf">CPF: X</span><br>
                    <span class="result-restriction">Restrição: X</span>
                </div>
                <div class="result-value">
                    <span>R$${adultPrice},00</span>
                </div>
            `;
        } else if (button.classList.contains("addKidTicketBtn")) {
            totalValue += kidPrice
            totalValueText.innerHTML = `R$${totalValue}`
            newTicket.classList.add("ticket-kid")
            newTicket.innerHTML = `
            <div class="ticket-texts ticket-texts${ticketIndex}">
                <h3 class="ticket-type">Ingresso Criança</h3>
                <div class="ticket-content ticket-name">
                    <label for="iname">Nome:</label>
                    <input class="iname iname${ticketIndex}" type="text" name="iname" id="" placeholder="Nome e Sobrenome"><br>
                </div>
                <div class="ticket-content ticket-cpf">
                    <label for="icpf">CPF:</label>
                    <input class="icpf icpf${ticketIndex}" type="number" name="icpf" id="" placeholder="XXX.XXX.XXX.XX"><br>
                </div>
                <div class="ticket-content ticket-birth">
                    <label for="ibirth">Data de <br> Nascimento:</label>
                    <input class="ibirth ibirth${ticketIndex}" type="date" name="ibirth" id=""><br>
                </div>
                <div class="ticket-content ticket-students">
                    <label for="ilist-student">Alunos:</label>
                    <select class="list-students" id="">
                        <option value="">Selecione uma opção</option>
                        <option value="Diego da Silva">Diego da Silva</option>
                        <option value="Daniel Zamboni">Mitinho GG</option>
                    </select>
                </div>
                <div class="ticket-content ticket-teacher">
                    <label for="iteacher-name">Professores:</label>
                    <input class="iteacher-name" type="text" name="iteacher-name" id="" placeholder="Nome do professor(a)">
                </div>
            </div>
            <div class="rest-know">
                <button class="delete-btn">Excluir</button>
                <div class="restriction-div">
                    <label class="rest-label" for="irestriction">Possui Alguma Restrição Alimentar?</label>
                    <textarea class="irestriction irestriction${ticketIndex}" name="irestriction" id="irestriction" cols="10" rows="3" placeholder="Se sim, digite aqui..."></textarea>
                </div>
                <div class="know-div">
                    <p>Conhece alguém do Cetec?</p>
                    <div class="to-know">
                    <div class="radio">
                        <input class="itype-input itype-input${ticketIndex}" type="radio" id="radio1" name="know-somebody" data-ticket-index="${ticketIndex}" value="yes-student">
                        <label class="radio-label" for="radio1">Pai de Aluno</label>
                    </div>
                    <div class="radio">
                        <input class="itype-input itype-input${ticketIndex}" type="radio" id="radio2" name="know-somebody" data-ticket-index="${ticketIndex}" value="yes-teacher"> 
                        <label class="radio-label" for="radio2">Sou Professor</label>
                    </div>
                    <div class="radio">
                        <input class="itype-input itype-input${ticketIndex}" type="radio" id="radio3" name="know-somebody" data-ticket-index="${ticketIndex}" value="no"> 
                        <label class="radio-label" for="radio3">Não</label>
                    </div>
                </div>
            </div>
            `;

            newTicketResult.innerHTML = `
                <div class="result-texts">
                    <span class="result-type">Ingresso Criança:</span><br>
                    <span class="result-name">Nome: X</span><br>
                    <span class="result-cpf">CPF: X</span><br>
                    <span class="result-restriction">Restrição: X</span>
                </div>
                <div class="result-value">
                    <span>R$${kidPrice},00</span>
                </div>
            `;
        }

        ticketsContainer.appendChild(newTicket)
        ticketsContainerResult.appendChild(newTicketResult)
        ticketIndex += 1
    });
});

ticketsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const button = event.target;
        const ticket = button.closest(".ticket");

        if (ticket) {
            const ticketType = ticket.classList.contains("ticket-adult") ? "adult" : "kid";
            const ticketIndexToDelete = parseInt(ticket.getAttribute("data-index"));

            if (ticketType === "adult") {
                totalValue -= adultPrice;
            } else if (ticketType === "kid") {
                totalValue -= kidPrice;
            }

            totalValueText.innerHTML = `R$${totalValue}`;

            const ticketResult = ticketsContainerResult.querySelector(`.result-preview${ticketIndexToDelete}`);
            if (ticketResult) {
                ticketResult.remove();
            }

            ticket.remove();

            const ticketResults = ticketsContainerResult.querySelectorAll(".result-preview");

            ticketResults.forEach((ticketResult, index) => {
                let currentIndex = parseInt(ticketResult.getAttribute("data-index"));

                if (currentIndex > ticketIndexToDelete) {
                    currentIndex -= 1;
                    ticketResult.setAttribute("data-index", currentIndex);
                }
            });
        }
    }
});


ticketsContainer.addEventListener("change", (event) => {
    const target = event.target;

    if (target.classList.contains("itype-input")) {
        const ticketIndex = target.getAttribute("data-ticket-index");
        const selectElement = document.querySelector(`.itype-select${ticketIndex}`);
        const labelElement = document.querySelector(`.itype-label${ticketIndex}`);
        const studentSection = document.querySelector(`.ticket-students${ticketIndex}`);
        const teacherSection = document.querySelector(`.ticket-teacher${ticketIndex}`);
        console.log(selectElement, labelElement, studentSection, teacherSection)

        if (selectElement && labelElement && studentSection && teacherSection) {
            if (target.value === "yes-student") {
                selectElement.style.display = "block";
                labelElement.style.display = "block";
                studentSection.style.display = "block";
                teacherSection.style.display = "none";
            } else if (target.value === "yes-teacher") {
                selectElement.style.display = "block";
                labelElement.style.display = "block";
                studentSection.style.display = "none";
                teacherSection.style.display = "block";
            } else if (target.value === "no") {
                selectElement.style.display = "none";
                labelElement.style.display = "none";
                studentSection.style.display = "none";
                teacherSection.style.display = "none";
            }
        }
    }
});


payBtn.addEventListener('click', () => {
    const ticketElements = document.querySelectorAll('.ticket');
    const ticketsValues = [];

    if (ticketElements.length === 0) {
        console.log('Por favor, adicione pelo menos um ingresso antes de pagar.');
        return;
    }

    let allTicketsValid = true;

    ticketElements.forEach((ticketElement, index) => {
        const nameInput = document.querySelector(`.iname${index}`);
        const cpfInput = document.querySelector(`.icpf${index}`);
        const birthInput = document.querySelector(`.ibirth${index}`);
        const restrictionTextarea = document.querySelector(`.irestriction${index}`);

        const isNameValid = nameRegex.test(nameInput.value);
        const isCPFValid = cpfRegex.test(cpfInput.value);
        const isBirthValid = birthInput.value !== '';

        nameInput.value = 'Miguel Valentini'
        cpfInput.value = '12345678910'
        birthInput.value = '2000-01-01'

        nameInput.removeAttribute('id');
        cpfInput.removeAttribute('id');
        birthInput.removeAttribute('id');

        restrictionTextarea.setAttribute('id', 'success-completing')

        if (isNameValid) {
            nameInput.setAttribute('id', 'success-completing');
        }
        if (isCPFValid) {
            cpfInput.setAttribute('id', 'success-completing');
        }
        if (isBirthValid) {
            birthInput.setAttribute('id', 'success-completing');
        }
        
        if (!isNameValid || !isCPFValid || !isBirthValid) {
            allTicketsValid = false;

            if (!isNameValid) {
                nameInput.setAttribute('id', 'unsuccess-completing');
            }
            if (!isCPFValid) {
                cpfInput.setAttribute('id', 'unsuccess-completing');
            }
            if (!isBirthValid) {
                birthInput.setAttribute('id', 'unsuccess-completing');
            }
        }

        const ticketType = ticketElement.classList.contains('ticket-adult') ? 'adult' : 'kid'; 

        const birthDate = new Date(birthInput.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        const ticketValues = {
            name: nameInput.value,
            cpf: cpfInput.value,
            birth: birthInput.value,
            type: ticketType,
            restriction: restrictionTextarea.value,
            age: age
        };

        ticketsValues.push(ticketValues);

        if (ticketType === 'kid') {
            if (age >= 5 && age <= 10) {
                console.log(`Ingresso ${index + 1} é de Criança com idade válida.`);
            } else {
                console.log(`Ingresso ${index + 1} é de Criança com idade inválida.`);
                allTicketsValid = false;
                ticketElement.setAttribute('id', 'unsuccess-completing');
                birthInput.setAttribute('id', 'unsuccess-completing');
            }
        }
    });

    if (!allTicketsValid) {
        console.log('Dados inválidos');
    } else {
        console.log('Pagamento bem-sucedido!');
        console.log('Valores dos ingressos:', ticketsValues);
    }
});
