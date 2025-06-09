/* Сайт розроблено студенткою Величко Софією, група ФІТ2-11 */
const costs = {
  mini: { 
    fee: 3000, 
    rent: { kyiv: 1500, lviv: 1000, kharkiv: 900, odesa: 1200, other: 1100 }, 
    equipment: 2000 
  },
  standard: { 
    fee: 7000, 
    rent: { kyiv: 2500, lviv: 1800, kharkiv: 1600, odesa: 2000, other: 1800 }, 
    equipment: 4000 
  },
  premium: { 
    fee: 15000, 
    rent: { kyiv: 4000, lviv: 3000, kharkiv: 2500, odesa: 3500, other: 3200 }, 
    equipment: 8000 
  },
};

function calculateCosts() {
  const city = document.getElementById('city').value;
  const type = document.getElementById('type').value;

  const franchise = costs[type];
  if (!franchise) {
    document.getElementById('result').innerHTML = 'Виберіть правильний тип франшизи.';
    return;
  }

  const baseRent = franchise.rent[city] || franchise.rent['other'];
  const deposit = baseRent; 
  const totalRent = baseRent + deposit;

  const repairDesign = 3000;  
  const initialStock = 2000;   
  const marketingBudget = 1500; 
  
  const total = franchise.fee + totalRent + franchise.equipment + repairDesign + initialStock + marketingBudget;

  document.getElementById('result').innerHTML = `
    <h3>Результат розрахунку:</h3>
    <ul>
      <li><strong>Паушальний внесок:</strong> ${franchise.fee.toLocaleString()} $</li>
      <li><strong>Оренда приміщення (перший місяць + застава):</strong> ${totalRent.toLocaleString()} $ (Базова оренда: ${baseRent.toLocaleString()} $, Застава: ${deposit.toLocaleString()} $)</li>
      <li><strong>Обладнання:</strong> ${franchise.equipment.toLocaleString()} $</li>
      <li><strong>Ремонт/дизайн:</strong> ${repairDesign.toLocaleString()} $</li>
      <li><strong>Первісна закупівля товару/матеріалів:</strong> ${initialStock.toLocaleString()} $</li>
      <li><strong>Маркетинговий бюджет (стартовий):</strong> ${marketingBudget.toLocaleString()} $</li>
    </ul>
    <h3>Загальна орієнтовна сума: ${total.toLocaleString()} $</h3>
  `;
}

function showSection(id) {
  document.querySelectorAll('section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const consent = document.getElementById('consent').checked;

  if (!consent) {
    alert('Будь ласка, дайте згоду на обробку персональних даних.');
    return false;
  }

  document.getElementById('formResponse').textContent = `Дякуємо, ${name}! Ваше повідомлення отримано.`;

  event.target.reset();

  return false;
}