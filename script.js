
document.getElementById('calculateBtn').addEventListener('click', function() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  const resultEl = document.getElementById('result');

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    resultEl.innerText = 'Please enter valid numbers.';
    return;
  }

  if (day < 1 || day > 31) {
    resultEl.innerText = 'Day must be between 1 and 31.';
    return;
  }
  if (month < 1 || month > 12) {
    resultEl.innerText = 'Month must be between 1 and 12.';
    return;
  }
  const currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) {
    resultEl.innerText = `Year must be between 1900 and ${currentYear}.`;
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    resultEl.innerText = 'Invalid date. Please enter a real date.';
    return;
  }

  const today = new Date();
  if (birthDate > today) {
    resultEl.innerText = 'Birth date cannot be in the future.';
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  resultEl.innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
});